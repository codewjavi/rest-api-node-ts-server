import { Router } from "express"
import { createProduct, deleteProduct, getProductById, getProducts, updateAvailability, updateProduct } from "./handlers/product"
import { body, param } from "express-validator";
import { handleInputErrors } from "./middleware";

const router = Router()

router.get('/',
    getProducts
)

router.get('/:id', 
    param('id').isInt().withMessage('ID must be an integer'),
    
    handleInputErrors,

    getProductById
)

router.post('/', 
    // VALIDATION 
    body('name')
    .notEmpty().withMessage('The product name must not be empty'),
        
    body('price')
        .isNumeric().withMessage('Please enter a valid product price.')
        .notEmpty().withMessage('The product price must not be empty')
        .custom( value => value > 0).withMessage('Please enter a valid product price.'),
    
    handleInputErrors,
    
    createProduct
)

router.put('/:id',
    param('id').isInt().withMessage('ID must be an integer'),
    
    body('name')
    .notEmpty().withMessage('The product name must not be empty'),
        
    body('price')
        .isNumeric().withMessage('Please enter a valid product price.')
        .notEmpty().withMessage('The product price must not be empty')
        .custom( value => value > 0).withMessage('Please enter a valid product price.'),
    body('availability')
        .isBoolean().withMessage('Availability must be a boolean'),

    handleInputErrors,

    updateProduct
)

router.patch('/',
    param('id').isInt().withMessage('ID must be an integer'),
    handleInputErrors,
    updateAvailability
)

router.delete('/:id',
    param('id').isInt().withMessage('ID must be an integer'),
    handleInputErrors,
    deleteProduct
)

export default router