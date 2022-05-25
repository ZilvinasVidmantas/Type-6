import { CartItem } from '../../../types';

export type CartState = {
  items: CartItem[],
};

export enum CartActionType {
  CART_ADD_ITEM = 'CART_ADD_ITEM',
  CART_UPDATE_ITEM = 'CART_UPDATE_ITEM',
  CART_DELETE_ITEM = 'CART_DELETE_ITEM',
}

export type CartAddItemAction = {
  type: CartActionType.CART_ADD_ITEM,
  payload: {
    shopItemId: string,
    amount: number,
  }
};

export type CartUpdateItemAction = {
  type: CartActionType.CART_UPDATE_ITEM,
  payload: {
    cartItemId: string,
    amount: number,
  }
};

export type CartDeleteItemAction = {
  type: CartActionType.CART_DELETE_ITEM,
  payload: {
    cartItemId: string,
  }
};

export type CartAction = CartAddItemAction | CartUpdateItemAction | CartDeleteItemAction;
