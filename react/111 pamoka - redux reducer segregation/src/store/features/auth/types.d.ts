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

export type AuthAction = AuthSuccessAction | AuthFailureAction | AuthLoadingAction | AuthLogoutAction | AuthClearErrorAction;
