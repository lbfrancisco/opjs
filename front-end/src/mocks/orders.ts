import { Order } from '../types/Order';

export const orders: Order[] = [
  {
    '_id': '643330a31b5c9607b6ad1ca4',
    'table': '2',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1681076274585-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 2,
        '_id': '643330a31b5c9607b6ad1ca5'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1681064191540-coca-cola.png',
          'price': 8,
        },
        'quantity': 6,
        '_id': '643330a31b5c9607b6ad1ca6'
      }
    ],
  }
];
