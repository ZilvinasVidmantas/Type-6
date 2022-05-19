import { Dispatch } from 'redux';
import AuthService from './auth-service';
import { User, Crudentials, UserRegistration } from '../../../types';
import {
  AuthSuccessAction,
  AuthFailureAction,
  AuthLoadingAction,
  AuthLogoutAction,
  AuthClearErrorAction,
} from './types';
import {
  createNavigationSetRedirectAction,
  navigationClearRedirectAction,
} from '../navigation/navigation-action-creators';
import { AppAction } from '../../types';

export const authLoadingAction: AuthLoadingAction = {
  type: 'AUTH_LOADING',
};

export const authClearErrorAction: AuthClearErrorAction = {
  type: 'AUTH_CLEAR_ERROR',
};

export const authLogoutAction: AuthLogoutAction = {
  type: 'AUTH_LOGOUT',
};

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
  redirect: string,
) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
  // siunčiame Reducer'iui
  dispatch(authLoadingAction);
  try {
    const user = await AuthService.login(crudentials);
    const authSuccessAction = createAuthSuccessAction(user);
    // siunčiame Reducer'iui
    const navigationSetRedirectAction = createNavigationSetRedirectAction(redirect);
    dispatch(navigationSetRedirectAction);
    dispatch(authSuccessAction);
    dispatch(navigationClearRedirectAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const authFailureAction = createAuthFailureAction(errMsg);
    // siunčiame Reducer'iui
    dispatch(authFailureAction);
  }
};

export const createRegisterAction = (
  userRegistration: UserRegistration,
  redirect: string,
) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
  // siunčiame Reducer'iui
  dispatch(authLoadingAction);
  try {
    const user = await AuthService.register(userRegistration);
    const authSuccessAction = createAuthSuccessAction(user);
    const navigationSetRedirectAction = createNavigationSetRedirectAction(redirect);
    dispatch(navigationSetRedirectAction);
    dispatch(authSuccessAction);
    dispatch(navigationClearRedirectAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const authFailureAction = createAuthFailureAction(errMsg);
    // siunčiame Reducer'iui
    dispatch(authFailureAction);
  }
};
