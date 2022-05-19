import { State } from './types';

export const selectLoggedIn = (state: State) => Boolean(state.auth.user);

export const selectUser = (state: State) => state.auth.user;

export const selectAuthLoading = (state: State) => state.auth.loading;

export const selectAuthError = (state: State) => state.auth.error;

export const selectRedirect = (state: State) => state.redirect;
