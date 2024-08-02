import express from 'express'

const server = express()

// ROUTING

server.get('/', (req, res) => {
    res.send('from express')
})

export default server