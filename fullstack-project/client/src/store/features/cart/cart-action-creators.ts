/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'redux';
import { CartItemJoined } from '../../../types';
import { AppAction, RootState } from '../../redux-types';
import {
  CartFetchItemsLoadingAction,
  CartFetchItemsSuccessAction,
  CartFetchItemsFailureAction,
  CartAddItemAction,
  CartUpdateItemAction,
  CartDeleteItemAction,
  CartActionType,
} from './cart-types';

const cartFetchItemsLoadingAction: CartFetchItemsLoadingAction = {
  type: CartActionType.CART_FETCH_ITEMS_LOADING,
};

const createCartFetchItemsSuccessAction = (joinedItems: CartItemJoined[]): CartFetchItemsSuccessAction => ({
  type: CartActionType.CART_FETCH_ITEMS_SUCCESS,
  payload: { joinedItems },
});

const createCartFetchItemsFailureAction = (error: string): CartFetchItemsFailureAction => ({
  type: CartActionType.CART_FETCH_ITEMS_FAILURE,
  payload: { error },
});

const createCartAddItemAction = (shopItemId: string, amount: number): CartAddItemAction => ({
  type: CartActionType.CART_ADD_ITEM,
  payload: { shopItemId, amount },
});

const createCartUpdateItemAction = (cartItemId: string, amount: number): CartUpdateItemAction => ({
  type: CartActionType.CART_UPDATE_ITEM,
  payload: { cartItemId, amount },
});

const createCartDeleteItemAction = (cartItemId: string): CartDeleteItemAction => ({
  type: CartActionType.CART_DELETE_ITEM,
  payload: { cartItemId },
});

export const createModifyCartItemAction = (shopItemId: string, newAmount: number) => (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
): void => {
  const { cart } = getState();
  const existingCartItem = cart.items.find((x) => x.shopItemId === shopItemId);

  if (existingCartItem) {
    if (newAmount > 0) {
      const cartUpdateItemAction = createCartUpdateItemAction(existingCartItem.id, newAmount);
      dispatch(cartUpdateItemAction);
    } else {
      const cartDeleteItemAction = createCartDeleteItemAction(existingCartItem.id);
      dispatch(cartDeleteItemAction);
    }
  } else {
    const cartAddItemAction = createCartAddItemAction(shopItemId, newAmount);
    dispatch(cartAddItemAction);
  }
};

export const cartFetchItemsAction = async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
): Promise<void> => {
  dispatch(cartFetchItemsLoadingAction);

  try {
    const cartItems = getState().cart.items;
    const shopItemsIds = cartItems.map((cartItem) => cartItem.shopItemId);

    // TODO: ČIA YRA NESAMONĘ KURIAI REIKIA APRAŠYTI APJUNGIMĄ
    const joinedCartItems: CartItemJoined[] = [];

    const cartFetchItemsSuccessAction = createCartFetchItemsSuccessAction(joinedCartItems);
    dispatch(cartFetchItemsSuccessAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const authFailureAction = createCartFetchItemsFailureAction(errMsg);
    dispatch(authFailureAction);
  }
};
