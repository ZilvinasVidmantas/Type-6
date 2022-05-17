import { Item, CartItem, User } from '../types';

export type State = {
  items: Item[],
  cart: CartItem[],
  auth: {
    user: User | null,
    error: string | null,
    loading: boolean,
  }
};

export type Action = {
  type: string,
  payload: any,
};
