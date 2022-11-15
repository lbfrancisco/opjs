import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, ingredients, price, category } = req.body;

    const product = await Product.create({
      name,
      description,
      imagePath,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      price: Number(price),
      category });

    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
