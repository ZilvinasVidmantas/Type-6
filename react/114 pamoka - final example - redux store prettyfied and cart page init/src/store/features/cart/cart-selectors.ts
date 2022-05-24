/* eslint-disable import/prefer-default-export */
import { RootState } from '../../redux-types';

export const selectCartItems = (state: RootState) => state.cart.items;
