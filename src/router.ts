import { Router } from "express"
import { createProduct } from "./handlers/product"

const router = Router()

router.get('/', (req, res) => {
    res.send('from get')
})

router.post('/', createProduct)

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