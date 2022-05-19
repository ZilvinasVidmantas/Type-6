import { Item } from '../../../types';

export type ShopState = {
  items: Item[]
};

export type ShopChangeItemAmount = {
  type: 'SHOP_CHANGE_ITEM_AMOUNT',
  payload: {
    id: string,
    amount: number
  },
};

export type ShopAction = ShopChangeItemAmount;
