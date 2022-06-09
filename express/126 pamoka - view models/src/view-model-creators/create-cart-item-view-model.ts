import { CartItem } from '../models/user-model';

export type CartItemViewModel = {
  id: string,
  productId: string,
  amount: number,
};

const createCartItemViewModel = ({ _id, productId, ...props }: CartItem): CartItemViewModel => ({
  id: _id.toString(),
  productId: productId.toString(),
  ...props,
});

export default createCartItemViewModel;
