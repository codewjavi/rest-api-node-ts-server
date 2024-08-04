import { Request, Response } from "express";

export const createProduct = (req : Request, res : Response) => {
    res.send('from post')
}