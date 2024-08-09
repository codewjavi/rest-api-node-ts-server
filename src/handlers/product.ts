import { Request, Response } from "express";
import Product from "../models/Product";

// GET
export const getProducts = async (req : Request, res : Response) => {
    const products = await Product.findAll({
        order: [
            ['price', 'DESC']
        ]
    })
    res.json({data: products})
}

// GET
export const getProductById = async (req : Request, res : Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)
    if(!product) {
        return res.status(404).json({
            error: 'Product not found'
        })
    }
    res.json({data: product})
}

// CREATE
export const createProduct = async (req : Request, res : Response) => {
    const product = await Product.create(req.body)
    res.status(201).json({data: product})
}

// PUT
export const updateProduct = async (req : Request, res : Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)
    
    if(!product) {
        return res.status(404).json({
            error: 'Product not found'
        })
    }

    // UPDATING
    await product.update(req.body)
    await product.save()
    res.json({data: product})
}

// PATCH
export const updateAvailability = async (req : Request, res : Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)
    
    if(!product) {
        return res.status(404).json({
            error: 'Product not found'
        })
    }

    // UPDATING
    product.availability = !product.dataValues.availability  // Changing the current value
    await product.save()
    res.json({data: product})
}

// DELETE
export const deleteProduct = async (req : Request, res : Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)
    
    if(!product) {
        return res.status(404).json({
            error: 'Product not found'
        })
    }

    await product.destroy()
    res.json({data: 'Product deleted'})
}
