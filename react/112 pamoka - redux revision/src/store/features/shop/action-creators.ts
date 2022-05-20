/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'redux';
import { AppAction } from '../../types';
import {
  ShoptFetchItemsLoadingAction,
  ShoptFetchItemssSuccessAction,
  ShoptFetchItemssFailureAction,
} from './types';

export const shopFetchItemsAction = async (dispatch: Dispatch<AppAction>): Promise<void> => {
  alert('Daromas Siuntimas ....');
};
