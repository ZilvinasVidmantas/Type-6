import { Item } from '../../../types';

export type ShopState = {
  items: Item[],
  loading: boolean,
  error: string | null,
};

export type ShopFetchItemsLoadingAction = {
  type: 'SHOP_FETCH_ITEMS_LOADING'
};

export type ShopClearErrorAction = {
  type: 'SHOP_CLEAR_ERROR'
};

export type ShopFetchItemsSuccessAction = {
  type: 'SHOP_FETCH_ITEMS_SUCCESS',
  payload: {
    items: Item[],
  }
};

export type ShopFetchItemsFailureAction = {
  type: 'SHOP_FETCH_ITEMS_FAILURE',
  payload: {
    error: string,
  }
};

export type ShopChangeItemAmountAction = {
  type: 'SHOP_CHANGE_ITEM_AMOUNT',
  payload: {
    id: string,
    amount: number
  },
};

export type ShopAction = ShopFetchItemsLoadingAction | ShopFetchItemsSuccessAction | ShopFetchItemsFailureAction | ShopChangeItemAmountAction | ShopClearErrorAction;
