import { CartItem } from '../models/user-model';

export type CartItemViewModel = {
  id: string,
  productId: string,
  amount: number,
  createdAt: string,
  updatedAt: string,
};

const createCartItemViewModel = (cartItemDoc: CartItem): CartItemViewModel => ({
  id: cartItemDoc._id.toString(),
  productId: cartItemDoc.product._id.toString(),
  amount: cartItemDoc.amount,
  createdAt: cartItemDoc.createdAt,
  updatedAt: cartItemDoc.updatedAt,
});

export default createCartItemViewModel;
