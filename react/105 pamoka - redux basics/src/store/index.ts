/* eslint-disable @typescript-eslint/default-param-last */
import { createStore, Reducer } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

type Item = {
  id: string,
  images: string[],
  price: number,
  categories: string[],
  amount: number,
};

type State = {
  items: Item[],
  kitaSavybe: string,
};

type Action = {
  type: string,
  payload: any,
};

const initialState: State = {
  items: [],
  kitaSavybe: 'belekas',
};

// Reducer'is - tai funkcija kuri reaguoja į ACTION'us ir pagal ACTION'o tipą
// Grąžinau pakitusią ir naują state reikšmę
const mainReducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // ateityje pridėsime naują item
      return state;
    case 'REMOVE_ITEM':
      // ateityje pridėsime pašalinsime item
      return state;
    case 'UPDATE_ITEM':
      // ateityje pridėsime atnaujinsim item
      return state;

    default:
      return state;
  }
};

const store = createStore(
  mainReducer,
  composeWithDevTools(),
);

export default store;
