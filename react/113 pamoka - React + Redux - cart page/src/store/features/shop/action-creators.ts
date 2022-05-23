/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'redux';
import axios from 'axios';
import { AppAction } from '../../types';
import {
  ShopFetchItemsLoadingAction,
  ShopFetchItemsSuccessAction,
  ShopFetchItemsFailureAction,
} from './types';
import { Item } from '../../../types';
import pause from '../../../helpers/pause';

const shopFetchItemsLoadingAction: ShopFetchItemsLoadingAction = {
  type: 'SHOP_FETCH_ITEMS_LOADING',
};

const createShopFecthItemsSuccessAction = (items: Item[]): ShopFetchItemsSuccessAction => ({
  type: 'SHOP_FETCH_ITEMS_SUCCESS',
  payload: { items },
});

const createShopFetchItemsFailureAction = (error: string): ShopFetchItemsFailureAction => ({
  type: 'SHOP_FETCH_ITEMS_FAILURE',
  payload: { error },
});

export const shopFetchItemsAction = async (dispatch: Dispatch<AppAction>): Promise<void> => {
  dispatch(shopFetchItemsLoadingAction);

  try {
    const { data } = await axios.get<Item[]>('http://localhost:8001/shopItems');
    await pause(2000);
    const shopFecthItemsSuccessAction = createShopFecthItemsSuccessAction(data);
    dispatch(shopFecthItemsSuccessAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const shopFetchItemsFailureAction = createShopFetchItemsFailureAction(errMsg);
    dispatch(shopFetchItemsFailureAction);
  }
};
