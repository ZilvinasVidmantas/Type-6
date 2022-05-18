import { Dispatch } from 'redux';
import { User, Crudentials } from '../types';
import AuthService from '../features/auth/auth-service';
import {
  AddToCartAction,
  AuthSuccessAction,
  AuthFailureAction,
  AuthLoadingAction,
  Action,
} from './types';

export const authLoadingAction: AuthLoadingAction = {
  type: 'AUTH_LOADING',
};

export const createAddToCartAction = (id: string, amount: number): AddToCartAction => ({
  type: 'ADD_TO_CART',
  payload: {
    id, amount,
  },
});

export const createAuthSuccessAction = (user: User, next?: string): AuthSuccessAction => ({
  type: 'AUTH_SUCCESS',
  payload: { user, next },
});

export const createAuthFailureAction = (error: string): AuthFailureAction => ({
  type: 'AUTH_FAILURE',
  payload: { error },
});

export const createLoginAction = (
  crudentials: Crudentials,
  next?: string,
) => async (dispatch: Dispatch<Action>): Promise<void> => {
  // siunčiame Reducer'iui
  dispatch(createAddToCartAction('asdasda', 55));
  try {
    const user = await AuthService.login(crudentials);
    const authSuccessAction = createAuthSuccessAction(user, next);
    // siunčiame Reducer'iui
    dispatch(authSuccessAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const authFailureAction = createAuthFailureAction(errMsg);
    // siunčiame Reducer'iui
    dispatch(authFailureAction);
  }
};
