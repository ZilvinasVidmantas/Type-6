import { User } from '../types/user';
import {
  AddToCartAction,
  AuthSuccessAction,
  AuthFailureAction,
  AuthLoadingAction,
} from './types';

export const createAddToCartAction = (id: string, amount: number): AddToCartAction => ({
  type: 'ADD_TO_CART',
  payload: {
    id, amount,
  },
});

export const createAuthSuccessAction = (user: User): AuthSuccessAction => ({
  type: 'AUTH_SUCCESS',
  payload: { user },
});

export const createAuthFailureAction = (error: string): AuthFailureAction => ({
  type: 'AUTH_FAILURE',
  payload: { error },
});

export const authFailureAction: AuthLoadingAction = {
  type: 'AUTH_LOADING',
};

/*
  Sukurti LoginAction tipą ir createLoginAction action-creator
    payload: {
      next: string,
      crudentials: Crudentials
    }

  Sukurti RegisterAction tipą ir createRegisterAction action-creator
    payload: {
      next: string,
      userRegistration: UserRegistration
    }

  tipus aprašykite faile types.d.ts

  action'us ir action-creator'ius aprašykite šiame faile
*/
