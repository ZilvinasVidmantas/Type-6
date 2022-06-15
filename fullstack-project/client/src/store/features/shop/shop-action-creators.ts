import { Dispatch } from 'redux';
import ShopService from '../../../services/shop-service';
import { ProductPopulated } from '../../../types';
import { AppAction } from '../../redux-types';
import {
  ShopActionType,
  ShopFetchProductsLoadingAction,
  ShopFetchProductsSuccessAction,
  ShopFetchProductsFailureAction,
  ShopClearErrorAction,
} from './shop-types';

const shopFetchProductsLoadingAction: ShopFetchProductsLoadingAction = {
  type: ShopActionType.SHOP_FETCH_PRODUCTS_LOADING,
};

export const shopClearErrorAction: ShopClearErrorAction = {
  type: ShopActionType.SHOP_CLEAR_ERROR,
};

const createShopFecthProductsSuccessAction = (products: ProductPopulated[]): ShopFetchProductsSuccessAction => ({
  type: ShopActionType.SHOP_FETCH_PRODUCTS_SUCCESS,
  payload: { products },
});

const createShopFetchProductsFailureAction = (error: string): ShopFetchProductsFailureAction => ({
  type: ShopActionType.SHOP_FETCH_PRODUCTS_FAILURE,
  payload: { error },
});

export const shopFetchProductsActionThunk = async (dispatch: Dispatch<AppAction>): Promise<void> => {
  dispatch(shopFetchProductsLoadingAction);
  try {
    const products = await ShopService.fetchProducts();
    const shopFecthProductsSuccessAction = createShopFecthProductsSuccessAction(products);
    dispatch(shopFecthProductsSuccessAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const shopFetchProductsFailureAction = createShopFetchProductsFailureAction(errMsg);
    dispatch(shopFetchProductsFailureAction);
  }
};
