import { Item } from '../../../types';

export type ShopState = {
  items: Item[]
};

export type ShoptFetchItemsLoadingAction = {
  type: 'SHOP_FETCH_ITEMS_LOADING'
};

export type ShoptFetchItemssSuccessAction = {
  type: 'SHOP_FETCH_ITEMS_SUCCESS',
  payload: {
    items: Item[],
  }
};

export type ShoptFetchItemssFailureAction = {
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

export type ShopAction = ShoptFetchItemsLoadingAction | ShoptFetchItemssSuccessAction | ShoptFetchItemssFailureAction | ShopChangeItemAmountAction;
