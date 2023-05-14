import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function deleteProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await Product.findByIdAndDelete(id);

    res.sendStatus(204);
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
}
