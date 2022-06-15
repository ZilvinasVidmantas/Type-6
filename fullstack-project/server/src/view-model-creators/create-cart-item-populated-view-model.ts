import { CartItemPopulatedDocument } from '../models/user-model';
import createProductViewModel, { ProductViewModel } from './create-product-view-model';

export type CartItemPopulatedViewModel = {
  id: string,
  product: ProductViewModel
  amount: number,
  createdAt: string,
  updatedAt: string,
};

const createCartItemPopulatedViewModel = (cartItemPopulatedDoc: CartItemPopulatedDocument):
  CartItemPopulatedViewModel => ({
    id: cartItemPopulatedDoc._id.toString(),
    product: createProductViewModel(cartItemPopulatedDoc.product),
    amount: cartItemPopulatedDoc.amount,
    createdAt: cartItemPopulatedDoc.createdAt,
    updatedAt: cartItemPopulatedDoc.updatedAt,
  });

export default createCartItemPopulatedViewModel;
