import { Router } from 'express';

import multer from 'multer';
import path from 'node:path';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';
import { deleteProduct } from './app/useCases/products/deleteProduct';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },

    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  }),
});

// List categories
router.get('/categories', listCategories);

// Create a new category
router.post('/categories', createCategory);

// List products
router.get('/products', listProducts);

// Create a new product
router.post('/products', upload.single('image'), createProduct);

// Delete a product
router.delete('/products/:id', deleteProduct);

// List products by category
router.get('/categories/:id/products', listProductsByCategory);

// List orders
router.get('/orders', listOrders);

// Create a new order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:id', changeOrderStatus);

// Delete/cancel order
router.delete('/orders/:id', cancelOrder);
