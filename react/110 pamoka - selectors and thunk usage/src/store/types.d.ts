import { ThunkDispatch } from 'redux-thunk';
import {
  Item,
  CartItem,
  User,
} from '../types';

export type State = {
  items: Item[],
  cart: CartItem[],
  auth: {
    user: User | null,
    error: string | null,
    loading: boolean,
  },
  redirect: string | null,
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
    user: User,
    redirect: string,
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

export type AuthLogoutAction = {
  type: 'AUTH_LOGOUT',
};

export type AuthClearErrorAction = {
  type: 'AUTH_CLEAR_ERROR',
};

export type ClearRedirectAction = {
  type: 'CLEAR_REDIRECT',
};

export type Action = AddToCartAction | AuthSuccessAction | AuthFailureAction | AuthLoadingAction | AuthLogoutAction | AuthClearErrorAction | ClearRedirectAction;

export type AppDispatch = ThunkDispatch<State, undefined, Action>;
