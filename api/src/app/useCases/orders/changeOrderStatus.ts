import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if(!['WAITING', 'IN_PRODUCTION', 'COMPLETED'].includes(status)) {
      return res.status(400).json({
        error: 'Status is not a valid order status. A valid order status is WAITING, IN_PRODUCTION, COMPLETED'
      });
    }

    await Order.findByIdAndUpdate(orderId, { status });
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
