import { Router } from "express"
import { createProduct, deleteProduct, getProductById, getProducts, updateAvailability, updateProduct } from "./handlers/product"
import { body, param } from "express-validator";
import { handleInputErrors } from "./middleware";

const router = Router()

/**
 * @swagger
 * components:
 *      schemas:
 *          Product:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The Product ID
 *                      example: 1
 *                  name:
 *                      type: string
 *                      description: The Product name
 *                      example: Iphone 15 PRO
 *                  price:
 *                      type: number
 *                      description: The Product price
 *                      example: 1299
 *                  availability:
 *                      type: boolean
 *                      description: The Product availability
 *                      example: true
 */


/**
 * @swagger
 * /api/products:
 *      get:
 *          summary: Get a list of products
 *          tags:
 *              - Products
 *          description: Return a list of products
 *          responses:
 *              200:
 *                  description: Successful response
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Product'
 */

// GET
router.get('/',
    getProducts
)

// GET BY ID
router.get('/:id', 
    param('id').isInt().withMessage('ID not valid'),
    handleInputErrors,
    getProductById
)

/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *      summary: Get a product by ID
 *      tags:
 *          - Products
 *      description: Return a product based on its unique ID
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to retrieve
 *          required: true
 *          schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Successful Response
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          400:
 *              description: Bad Request - Invalid ID
 *          404:
 *              description: Not found
 */

// POST
router.post('/', 
    // VALIDATION 
    body('name')
        .notEmpty().withMessage('The product name must not be empty'),
        
    body('price')
        .isNumeric().withMessage('Please enter a valid product price')
        .notEmpty().withMessage('The product price must not be empty')
        .custom( value => value > 0).withMessage('Please enter a valid product price'),
    handleInputErrors,
    createProduct
)

// PUT
router.put('/:id',
    param('id').isInt().withMessage('ID not valid'),
    
    body('name')
    .notEmpty().withMessage('The product name must not be empty'),
        
    body('price')
        .isNumeric().withMessage('Please enter a valid product price')
        .notEmpty().withMessage('The product price must not be empty')
        .custom( value => value > 0).withMessage('Please enter a valid product price'),
    body('availability')
        .isBoolean().withMessage('Availability must be a boolean'),
    handleInputErrors,
    updateProduct
)


// PATCH
router.patch('/:id',
    param('id').isInt().withMessage('ID not valid'),
    handleInputErrors,
    updateAvailability
)



// DELETE
router.delete('/:id',
    param('id').isInt().withMessage('ID not valid'),
    handleInputErrors,
    deleteProduct
)

export default router