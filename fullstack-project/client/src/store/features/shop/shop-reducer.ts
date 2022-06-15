/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { ShopState, ShopAction, ShopActionType } from './shop-types';

const initialState: ShopState = {
  products: [],
  loading: false,
  error: null,
};

const shopReducer: Reducer<ShopState, ShopAction> = (state = initialState, action) => {
  switch (action.type) {
    case ShopActionType.SHOP_FETCH_PRODUCTS_LOADING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case ShopActionType.SHOP_FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };
    }

    case ShopActionType.SHOP_FETCH_PRODUCTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    case ShopActionType.SHOP_CLEAR_ERROR: {
      return {
        ...state,
        error: null,
      };
    }

    default: return state;
  }
};

export default shopReducer;
