import { CartItemJoined } from '../../../types';
import { RootState } from '../../redux-types';

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartItemsCount = (state: RootState) => state.cart.items.length;
export const selectCartJoinedItems = (state: RootState): CartItemJoined[] => [];
