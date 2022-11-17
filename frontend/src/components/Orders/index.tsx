import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '6372e48cbcd195b0d3d0f7f3',
    'table': '1',
    'status': 'COMPLETED',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'description': 'Pizza quatro queijos',
          'imagePath': '1668472896991-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6372e48cbcd195b0d3d0f7f4'
      },
      {
        'product': {
          'name': 'Coca cola',
          'description': 'Coca cola',
          'imagePath': '1668473462705-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '6372e48cbcd195b0d3d0f7f5'
      },
    ],
  },
  {
    '_id': '6372e48cbcd195b0d3d0f7f3',
    'table': '2',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'description': 'Pizza quatro queijos',
          'imagePath': '1668472896991-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6372e48cbcd195b0d3d0f7f4'
      },
      {
        'product': {
          'name': 'Coca cola',
          'description': 'Coca cola',
          'imagePath': '1668473462705-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '6372e48cbcd195b0d3d0f7f5'
      },
    ],
  },
  {
    '_id': '6372e48cbcd195b0d3d0f7f3',
    'table': '3',
    'status': 'IN_PRODUCTION',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'description': 'Pizza quatro queijos',
          'imagePath': '1668472896991-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6372e48cbcd195b0d3d0f7f4'
      },
      {
        'product': {
          'name': 'Coca cola',
          'description': 'Coca cola',
          'imagePath': '1668473462705-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '6372e48cbcd195b0d3d0f7f5'
      },
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera..."
        orders={orders.filter(orders => orders.status === 'WAITING')}
      />
      <OrdersBoard
        icon="👩‍🍳"
        title="Em preparação..."
        orders={orders.filter(orders => orders.status === 'IN_PRODUCTION')}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={orders.filter(orders => orders.status === 'COMPLETED')}
      />
    </Container>
  );
}
