import express from 'express'
import router from './router'
import db from './config/db'
import colors from 'colors'
import swaggerUi from "swagger-ui-express";
import swaggerSpec, { swaggerUiOptions } from './config/swagger'

// Connect DB

export async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
    } catch (error) {
        console.log( colors.red( 'DB Connection Failed' ));
    }
}

connectDB()

// Express Instance
const server = express()

// Reading data from forms
server.use(express.json())

// ROUTING

server.use('/api/products', router)

// DOCS
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))

export default server

