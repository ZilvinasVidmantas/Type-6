/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'redux';
import { Item } from '../../../types';
import { AppAction, RootState } from '../../redux-types';
import { CartAddItemAction, CartUpdateItemAction } from './cart-types';
import { createShopChangeItemAmountAction } from '../shop/shop-action-creators';

const createCartUpdateItemAction = (cartItemId: string, amount: number): CartUpdateItemAction => ({
  type: 'CART_UPDATE_ITEM',
  payload: { cartItemId, amount },
});

const createCartAddItemAction = (shopItemId: string, amount: number): CartAddItemAction => ({
  type: 'CART_ADD_ITEM',
  payload: { shopItemId, amount },
});

export const createModifyCartItemAction = (shopItemId: string, newAmount: number) => (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
): void => {
  const { shop, cart } = getState();
  const existingCartItem = cart.items.find((x) => x.shopItemId === shopItemId);
  const shopItem = shop.items.find((x) => x.id === shopItemId) as Item;

  const totalAmount = existingCartItem ? existingCartItem.amount + shopItem.amount : shopItem.amount;
  const amountLeft = totalAmount - newAmount;

  if (existingCartItem) {
    const cartUpdateItemAction = createCartUpdateItemAction(existingCartItem.id, newAmount);
    dispatch(cartUpdateItemAction);
  } else {
    const cartAddItemAction = createCartAddItemAction(shopItemId, newAmount);
    dispatch(cartAddItemAction);
  }

  const shopChangeItemAmountAction = createShopChangeItemAmountAction(shopItemId, amountLeft);
  dispatch(shopChangeItemAmountAction);
};
