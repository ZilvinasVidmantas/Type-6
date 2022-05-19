import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { State, AppDispatch } from './types';

export const useRootSelector: TypedUseSelectorHook<State> = useSelector;

export const useRootDispatch = () => useDispatch<AppDispatch>();
