import express from 'express'
import router from './router'
import db from './config/db'
import colors from 'colors'

// Connect DB

async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
    } catch (error) {
        console.log( colors.red( 'DB Connection Failed' ));
    }
}

connectDB()

const server = express()

// Reading data from form
server.use(express.json())

// ROUTING

server.use('/api/products', router)

server.get('/api', (req, res) => {
    res.json({msg: 'from API'})
})

export default server

