/* eslint-disable @typescript-eslint/default-param-last */
import { createStore, Reducer } from 'redux';
import { useSelector } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';

type Item = {
  id: string,
  images: string[],
  price: number,
  categories: string[],
  amount: number,
};

export type State = {
  items: Item[],
};

export const useReduxSelector = <Selected = unknown>
  (selector: (state: State) => Selected) => useSelector<State, Selected>(selector);

type Action = {
  type: string,
  payload: any,
};

const initialState: State = {
  items: [
    {
      id: '1',
      images: [
        'https://www.ubuy.vn/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTFhcUNwa2xJSUwuX0FDX1NMMTAwMF8uanBn.jpg',
      ],
      price: 199.99,
      categories: ['artilery', 'hobies'],
      amount: 7,
    },
    {
      id: '2',
      images: [
        'https://www.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFINEpETHJHREwuX0FDX1NMMTAwMF8uanBn.jpg',
      ],
      price: 39.99,
      categories: ['artilery', 'hobies'],
      amount: 24,
    },
    {
      id: '3',
      images: [
        'https://i0.wp.com/sabersmith.com/wp-content/uploads/2020/07/Hand-Half-Gold-Black-on-Green-with-Wire.jpg?fit=800%2C1200&ssl=1',
      ],
      price: 479.99,
      categories: ['close-combat', 'hobies'],
      amount: 4,
    },
  ],
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
