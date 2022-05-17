import {
  Item,
  CartItem,
  User,
  Crudentials,
  UserRegistration,
} from '../types';

export type State = {
  items: Item[],
  cart: CartItem[],
  auth: {
    user: User | null,
    error: string | null,
    loading: boolean,
  }
};

export type LoginAction = {
  type: 'LOGIN_ACTION',
  payload: {
    next: string,
    crudentials: Crudentials,
  }
};

export type RegisterAction = {
  type: 'REGISTER_ACTION',
  payload: {
    next: string,
    userRegistration: UserRegistration,
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
