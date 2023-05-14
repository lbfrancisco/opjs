import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listProductsByCategory(req: Request, res: Response) {
  const { id } = req.params;

  const products = await Product.find().where('category').equals(id);

  res.json(products);
}
