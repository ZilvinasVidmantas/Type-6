import { ThunkDispatch } from 'redux-thunk';
import { AuthAction } from './features/auth/types';
import { NavigationAction } from './features/navigation/types';
import { CartAction } from './features/cart/types';
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

export type Action = AuthAction | CartAction | NavigationAction;

export type AppDispatch = ThunkDispatch<State, undefined, Action>;
