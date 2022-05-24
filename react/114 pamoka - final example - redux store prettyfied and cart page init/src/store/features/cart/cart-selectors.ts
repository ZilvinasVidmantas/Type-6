import { RootState } from '../../redux-types';

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartItemsCount = (state: RootState) => state.cart.items.length;
