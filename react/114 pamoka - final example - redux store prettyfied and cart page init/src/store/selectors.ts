import { RootState } from './redux-types';

export * from './features/auth/auth-selectors';

// navigation selectors
export const selectRedirect = (state: RootState) => state.navigation.redirect;

// shop selectors
export const selectShopItems = (state: RootState) => state.shop.items;
export const selectShopItemsLoading = (state: RootState) => state.shop.loading;
export const selectShopError = (state: RootState) => state.shop.error;

// cart selectors
export const selectCartItems = (state: RootState) => state.cart.items;
