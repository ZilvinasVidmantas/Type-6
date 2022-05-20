import { Item } from '../../../types';

export type ShopState = {
  items: Item[]
};

export type ShopChangeItemAmountAction = {
  type: 'SHOP_CHANGE_ITEM_AMOUNT',
  payload: {
    id: string,
    amount: number
  },
};

export type ShopFetchItemsAction = {
  type: 'SHOP_FETCH_ITEMS'
};

export type ShopAction = ShopChangeItemAmountAction | ShopFetchItemsAction;
