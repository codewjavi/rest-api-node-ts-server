import { Router } from "express"

const router = Router()

router.get('/', (req, res) => {
    res.send('from get')
})

router.post('/', (req, res) => {
    res.send('from post')
})

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