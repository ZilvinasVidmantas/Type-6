/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'redux';
import { Item } from '../../../types';
import { AppAction, RootState } from '../../redux-types';
import { CartAddItemAction, CartUpdateItemAction, CartActionType } from './cart-types';
import { createShopChangeItemAmountAction } from '../shop/shop-action-creators';

const createCartAddItemAction = (shopItemId: string, amount: number): CartAddItemAction => ({
  type: CartActionType.CART_ADD_ITEM,
  payload: { shopItemId, amount },
});

const createCartUpdateItemAction = (cartItemId: string, amount: number): CartUpdateItemAction => ({
  type: CartActionType.CART_UPDATE_ITEM,
  payload: { cartItemId, amount },
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
    if (newAmount > 0) {
      const cartUpdateItemAction = createCartUpdateItemAction(existingCartItem.id, newAmount);
      dispatch(cartUpdateItemAction);
    } else {
      // @@@
      // Siunčiamas pašalinimo veiksmas, nes kiekis === 0
    }
  } else {
    const cartAddItemAction = createCartAddItemAction(shopItemId, newAmount);
    dispatch(cartAddItemAction);
  }

  const shopChangeItemAmountAction = createShopChangeItemAmountAction(shopItemId, amountLeft);
  dispatch(shopChangeItemAmountAction);
};

/*
  @@@ Vietoje reikia išsiųsti cartReducer'iui žinutę, kad pašalinti krepšelio prekę, kurios kiekis yra 0
    * Sukurkite ActionType tipą enum'e
    * Sukurkite Action, kuris naudotų ActionType
    * Sukurkite action'ą, pagal Action
    * @@@ išsiųskite action'ą
    * cartReducer'yje aprašykite logiką, kuri reaguodama į action'ą (atpažintą pagal ActionType) pašalintų prekę

    Atlikimui iki 8:55,
    Pertrauka
    Tęsiame 9:05
*/
