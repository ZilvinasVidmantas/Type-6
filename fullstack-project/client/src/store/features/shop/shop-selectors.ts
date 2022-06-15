import { RootState } from '../../redux-types';

export const selectShopProducts = (state: RootState) => state.shop.products;
export const selectShopCAtegories = (state: RootState) => state.shop.categories;
export const selectShopLoading = (state: RootState) => state.shop.loading;
export const selectShopError = (state: RootState) => state.shop.error;
