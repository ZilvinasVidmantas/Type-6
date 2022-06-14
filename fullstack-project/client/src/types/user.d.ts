import { CartItem } from './cart-item-new';

export type User = {
  id: string,
  email: string,
  role: 'user' | 'admin',
  createdAt: string,
  updatedAt: string,
  cartItems: CartItem[],
  name?: string,
  surname?: string,
  img?: string,
};
