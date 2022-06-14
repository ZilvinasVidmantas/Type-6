/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { AuthState, AuthAction, AuthActionType } from './auth-types';
import { getLocalStorageItem, setLocalStoreageItem } from '../../../helpers/local-storage-helpers';

const { REACT_APP_AUTH_TOKEN_IN_LOCAL_STORAGE } = process.env;
if (REACT_APP_AUTH_TOKEN_IN_LOCAL_STORAGE === undefined) throw new Error('Please declare variables in /.env.local');

const initialState: AuthState = {
  user: null,
  error: null,
  loading: false,
};

const authReducer: Reducer<AuthState, AuthAction> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionType.AUTH_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    }

    case AuthActionType.AUTH_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    }

    case AuthActionType.AUTH_LOGOUT: {
      return {
        ...state,
        user: null,
      };
    }

    case AuthActionType.AUTH_CLEAR_ERROR: {
      return {
        ...state,
        error: null,
      };
    }

    case AuthActionType.AUTH_LOADING: {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }

    default: return state;
  }
};

export default authReducer;
