/* eslint-disable import/prefer-default-export */
import { useSelector } from 'react-redux';
import { State } from './types';

export const useReduxSelector = <Selected = unknown>
  (selector: (state: State) => Selected) => useSelector<State, Selected>(selector);
