import { Request, Response } from "express";
import Product from "../models/Product";

export const createProduct = async (req : Request, res : Response) => {
    try {
        const product = await Product.create(req.body)
        res.json({data: product})
    } catch (error) {
        console.log(error);
    }   
}