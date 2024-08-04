import { Router } from "express"
import { createProduct } from "./handlers/product"
import { body } from "express-validator";

const router = Router()

router.get('/', (req, res) => {
    res.send('from get')
})

router.post('/', 
    // VALIDATION 
    body('name')
    .notEmpty().withMessage('The product name must not be empty'),
        
    body('price')
        .isNumeric().withMessage('Please enter a valid product price.')
        .notEmpty().withMessage('The product price must not be empty')
        .custom( value => value > 0).withMessage('Please enter a valid product price.'),

    createProduct
)

router.put('/', (req, res) => {
    res.send('from put')
})

router.patch('/', (req, res) => {
    res.send('from patch')
})

router.delete('/', (req, res) => {
    res.send('from delete')
})

export default router