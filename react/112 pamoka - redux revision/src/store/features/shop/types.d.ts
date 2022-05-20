import { Item } from '../../../types';

export type ShopState = {
  items: Item[]
};

export type ShopFetchItemsLoadingAction = {
  type: 'SHOP_FETCH_ITEMS_LOADING'
};

export type ShopFetchItemssSuccessAction = {
  type: 'SHOP_FETCH_ITEMS_SUCCESS',
  payload: {
    items: Item[],
  }
};

export type ShopFetchItemssFailureAction = {
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

export type ShopAction = ShopFetchItemsLoadingAction | ShopFetchItemssSuccessAction | ShopFetchItemssFailureAction | ShopChangeItemAmountAction;
