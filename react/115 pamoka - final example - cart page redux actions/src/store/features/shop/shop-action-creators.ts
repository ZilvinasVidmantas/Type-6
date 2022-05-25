import { Dispatch } from 'redux';
import axios from 'axios';
import { Item } from '../../../types';
import { AppAction } from '../../redux-types';
import {
  ShopActionType,
  ShopFetchItemsLoadingAction,
  ShopFetchItemsSuccessAction,
  ShopFetchItemsFailureAction,
  ShopClearErrorAction,
  ShopChangeItemAmountAction,
} from './shop-types';

const shopFetchItemsLoadingAction: ShopFetchItemsLoadingAction = {
  type: ShopActionType.SHOP_FETCH_ITEMS_LOADING,
};

export const shopClearErrorAction: ShopClearErrorAction = {
  type: ShopActionType.SHOP_CLEAR_ERROR,
};

const createShopFecthItemsSuccessAction = (items: Item[]): ShopFetchItemsSuccessAction => ({
  type: ShopActionType.SHOP_FETCH_ITEMS_SUCCESS,
  payload: { items },
});

const createShopFetchItemsFailureAction = (error: string): ShopFetchItemsFailureAction => ({
  type: ShopActionType.SHOP_FETCH_ITEMS_FAILURE,
  payload: { error },
});

export const createShopChangeItemAmountAction = (id: string, amount: number): ShopChangeItemAmountAction => ({
  type: ShopActionType.SHOP_CHANGE_ITEM_AMOUNT,
  payload: { id, amount },
});

export const shopFetchItemsAction = async (dispatch: Dispatch<AppAction>): Promise<void> => {
  dispatch(shopFetchItemsLoadingAction);
  try {
    const { data } = await axios.get<Item[]>('http://localhost:8000/shopItems');
    const shopFecthItemsSuccessAction = createShopFecthItemsSuccessAction(data);
    dispatch(shopFecthItemsSuccessAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const shopFetchItemsFailureAction = createShopFetchItemsFailureAction(errMsg);
    dispatch(shopFetchItemsFailureAction);
  }
};
