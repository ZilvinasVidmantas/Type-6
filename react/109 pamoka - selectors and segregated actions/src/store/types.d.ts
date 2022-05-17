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

export type AddToCartAction = {
  type: 'ADD_TO_CART',
  payload: {
    id: string,
    amount: number,
  }
};

export type AuthSuccessAction = {
  type: 'AUTH_SUCCESS',
  payload: {
    user: User
  }
};

export type AuthFailureAction = {
  type: 'AUTH_FAILURE',
  payload: {
    error: string,
  }
};

export type AuthLoadingAction = {
  type: 'AUTH_LOADING',
};

export type Action = AddToCartAction | AuthSuccessAction | AuthFailureAction | AuthLoadingAction;
