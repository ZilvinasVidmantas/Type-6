import { ProductPopulated } from '../../../types';

export type ShopState = {
  products: ProductPopulated[],
  loading: boolean,
  error: string | null,
};

export enum ShopActionType {
  SHOP_FETCH_PRODUCTS_LOADING = 'SHOP_FETCH_PRODUCTS_LOADING',
  SHOP_CLEAR_ERROR = 'SHOP_CLEAR_ERROR',
  SHOP_FETCH_PRODUCTS_SUCCESS = 'SHOP_FETCH_PRODUCTS_SUCCESS',
  SHOP_FETCH_PRODUCTS_FAILURE = 'SHOP_FETCH_PRODUCTS_FAILURE',
}

export type ShopFetchProductsLoadingAction = {
  type: ShopActionType.SHOP_FETCH_PRODUCTS_LOADING
};

export type ShopClearErrorAction = {
  type: ShopActionType.SHOP_CLEAR_ERROR
};

export type ShopFetchProductsSuccessAction = {
  type: ShopActionType.SHOP_FETCH_PRODUCTS_SUCCESS,
  payload: {
    products: ProductPopulated[],
  }
};

export type ShopFetchProductsFailureAction = {
  type: ShopActionType.SHOP_FETCH_PRODUCTS_FAILURE,
  payload: {
    error: string,
  }
};

export type ShopAction = ShopFetchProductsLoadingAction | ShopFetchProductsSuccessAction | ShopFetchProductsFailureAction | ShopClearErrorAction;
