import { User } from '../types/user';
import {
  AddToCartAction,
  AuthSuccessAction,
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

// 10min pertrauka
// 5min - aprašyti likusius 2 action-creator'ius
