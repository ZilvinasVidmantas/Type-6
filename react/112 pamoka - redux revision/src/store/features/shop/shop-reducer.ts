/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { ShopState, ShopAction } from './types';

const initialState: ShopState = {
  items: [],
};

const shopReducer: Reducer<ShopState, ShopAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOP_CHANGE_ITEM_AMOUNT': {
      return {
        ...state,
        items: state.items.map((item) => (item.id === action.payload.id
          ? { ...item, amount: action.payload.amount }
          : item
        )),
      };
    }

    default: return state;
  }
};

export default shopReducer;
