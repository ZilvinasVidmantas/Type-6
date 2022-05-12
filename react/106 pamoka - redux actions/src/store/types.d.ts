import { Item, CartItem } from '../types';

export type State = {
  items: Item[],
  cart: CartItem[]
};

export type Action = {
  type: string,
  payload: any,
};
