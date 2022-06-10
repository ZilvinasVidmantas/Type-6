import { CartItemPopulatedDocument } from '../models/user-model';
import createProductPopulatedViewModel, { ProductPopulatedViewModel } from './create-product-populated-view-model';

export type CartItemPopulatedViewModel = {
  id: string,
  product: ProductPopulatedViewModel
  amount: number,
  createdAt: string,
  updatedAt: string,
};

const createCartItemPopulatedViewModel = (cartItemPopulatedDoc: CartItemPopulatedDocument):
  CartItemPopulatedViewModel => ({
    id: cartItemPopulatedDoc._id.toString(),
    product: createProductPopulatedViewModel(cartItemPopulatedDoc.product),
    amount: cartItemPopulatedDoc.amount,
    createdAt: cartItemPopulatedDoc.createdAt,
    updatedAt: cartItemPopulatedDoc.updatedAt,
  });

export default createCartItemPopulatedViewModel;
