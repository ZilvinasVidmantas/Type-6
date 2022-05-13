/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { v4 as createId } from 'uuid';
import { State, Action } from './types';

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
      additionalProps: {
        arrowCount: '27',
        distance: '200m',
      },
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
      additionalProps: {
        length: '1.2m',
        curvedAngle: 'none',
      },
    },
  ],
  cart: [],
};

// Reducer'is - tai funkcija kuri reaguoja į ACTION'us ir pagal ACTION'o tipą
// Grąžinau pakitusią ir naują state reikšmę
const mainReducer: Reducer<State, Action> = (state = initialState, action) => {
  if (action.type === 'ADD_TO_CART') {
    return {
      ...state,
      cart: [
        ...state.cart,
        { id: createId(), itemId: action.payload.id, amount: 1 },
      ],
    };
  }
  return { ...state };
};

export default mainReducer;
