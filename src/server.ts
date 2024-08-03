import express from 'express'
import router from './router'
import db from './config/db'

// Connect DB

async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log('connected')
    } catch (error) {
        console.log(error);
    }
}

connectDB()

const server = express()

// ROUTING

server.use('/api/products', router)
export default server

