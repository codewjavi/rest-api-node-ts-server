import { Request, Response } from "express";
import Product from "../models/Product";

// GET
export const getProducts = async (req : Request, res : Response) => {
   try {
    const products = await Product.findAll({
        attributes: {exclude: ['createdAt', 'updatedAt', 'availability']},
        order: [
            ['product', 'DESC']
        ]
    })
    res.json({data: products})
   } catch (error) {
    console.log(error);
   }
}

// GET
export const getProductById = async (req : Request, res : Response) => {
    try {
        const { id } = req.params
        const product = await Product.findByPk(id)
        
        if(!product) {
            return res.status(404).json({
                error: 'Product not found'
            })
        }
        
        res.json({data: product})
    } catch (error) {
        console.log(error);
    }
}

// CREATE
export const createProduct = async (req : Request, res : Response) => {
    try {
        const product = await Product.create(req.body)
        res.json({data: product})
    } catch (error) {
        console.log(error);
    }   
}

// PUT
export const updateProduct = async (req : Request, res : Response) => {
    try {
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
    } catch (error) {
        console.log(error);
    }
}

// PATCH
export const updateAvailability = async (req : Request, res : Response) => {
    try {
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
    } catch (error) {
        console.log(error);
    }
}

// DELETE
export const deleteProduct = async (req : Request, res : Response) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
}
