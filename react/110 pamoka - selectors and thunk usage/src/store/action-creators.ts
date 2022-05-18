import { Dispatch } from 'redux';
import { User, Crudentials, UserRegistration } from '../types';
import AuthService from '../features/auth/auth-service';
import {
  AddToCartAction,
  AuthSuccessAction,
  AuthFailureAction,
  AuthLoadingAction,
  AuthLogoutAction,
  AuthClearErrorAction,
  Action,
} from './types';

export const authLoadingAction: AuthLoadingAction = {
  type: 'AUTH_LOADING',
};

export const authClearErrorAction: AuthClearErrorAction = {
  type: 'AUTH_CLEAR_ERROR',
};

export const authLogoutAction: AuthLogoutAction = {
  type: 'AUTH_LOGOUT',
};

export const createAddToCartAction = (id: string, amount: number): AddToCartAction => ({
  type: 'ADD_TO_CART',
  payload: { id, amount },
});

export const createAuthSuccessAction = (user: User): AuthSuccessAction => ({
  type: 'AUTH_SUCCESS',
  payload: { user },
});

export const createAuthFailureAction = (error: string): AuthFailureAction => ({
  type: 'AUTH_FAILURE',
  payload: { error },
});

export const createLoginAction = (
  crudentials: Crudentials,
) => async (dispatch: Dispatch<Action>): Promise<void> => {
  // siunčiame Reducer'iui
  dispatch(authLoadingAction);
  try {
    const user = await AuthService.login(crudentials);
    const authSuccessAction = createAuthSuccessAction(user);
    // siunčiame Reducer'iui
    dispatch(authSuccessAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const authFailureAction = createAuthFailureAction(errMsg);
    // siunčiame Reducer'iui
    dispatch(authFailureAction);
  }
};

export const createRegisterAction = (
  userRegistration: UserRegistration,
) => async (dispatch: Dispatch<Action>): Promise<void> => {
  // siunčiame Reducer'iui
  dispatch(authLoadingAction);
  try {
    const user = await AuthService.register(userRegistration);
    const authSuccessAction = createAuthSuccessAction(user);
    // siunčiame Reducer'iui
    dispatch(authSuccessAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const authFailureAction = createAuthFailureAction(errMsg);
    // siunčiame Reducer'iui
    dispatch(authFailureAction);
  }
};
