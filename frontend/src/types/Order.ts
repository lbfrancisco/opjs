export interface Order {
  _id: string;
  table: string;
  status: 'WAITING' | 'IN_PRODUCTION' | 'COMPLETED';
  products: {
    _id: string;
    quantity: number;
    product: {
      name: string;
      description: string;
      imagePath: string;
      price: number;
    };
  }[];
}
