import { CartItem } from '../models/user-model';

export type CartItemViewModel = {
  id: string,
  productId: string,
  amount: number,
};

const createCartItemViewModel = (cartItem: CartItem): CartItemViewModel => ({
  id: cartItem._id.toString(),
  productId: cartItem.productId.toString(),
  amount: cartItem.amount,
});

export default createCartItemViewModel;
