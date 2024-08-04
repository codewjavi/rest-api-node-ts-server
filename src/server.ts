import express from 'express'
import router from './router'
import db from './config/db'
import colors from 'colors'

// Connect DB

async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log( colors.blue ('DB Successful Connection') )
    } catch (error) {
        console.log( colors.red( 'DB Connection Failed' ));
    }
}

connectDB()

const server = express()

// ROUTING

server.use('/api/products', router)
export default server

