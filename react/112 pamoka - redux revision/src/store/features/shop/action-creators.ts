/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'redux';
import { AppAction } from '../../types';
import {
  ShopFetchItemsLoadingAction,
  ShopFetchItemsSuccessAction,
  ShopFetchItemsFailureAction,
} from './types';

const shopFetchItemsLoadingAction: ShopFetchItemsLoadingAction = {
  type: 'SHOP_FETCH_ITEMS_LOADING',
};

export const shopFetchItemsAction = async (dispatch: Dispatch<AppAction>): Promise<void> => {
  dispatch(shopFetchItemsLoadingAction);
};
