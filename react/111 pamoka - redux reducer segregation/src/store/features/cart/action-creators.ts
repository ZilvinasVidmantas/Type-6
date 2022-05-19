/* eslint-disable import/prefer-default-export */
import { AddToCartAction } from './types';

export const createAddToCartAction = (id: string, amount: number): AddToCartAction => ({
  type: 'ADD_TO_CART',
  payload: { id, amount },
});
