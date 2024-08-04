import { Request, Response } from "express";
import Product from "../models/Product";
import { validationResult } from "express-validator";

export const createProduct = async (req : Request, res : Response) => {

    let errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const product = await Product.create(req.body)

    res.json({data: product})
}