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
      amount: 0,
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
      },
    },
  ],
  cart: [],
};

/*
  1. Šiame faile:
    Sumažinti State.items kiekį pagal action.payload.amount ir action.payload.id, pagal tai kiek buvo įdėta į krepšelį
  2. Po pridejimo atspausdinti:
    * jeigu vartotojas prisijungęs atspausdinti konsolėje: 'Siunčiami duomenys į serverį'
    * jeigu vartotojas neprisijungęs atspausdinti konsolėje: 'Išsaugomi duomenys LocalStorage'

*/
const mainReducer: Reducer<State, Action> = (state = initialState, action) => {
  if (action.type === 'ADD_TO_CART') {
    return {
      ...state,
      cart: [
        ...state.cart,
        {
          id: createId(),
          itemId: action.payload.id,
          amount: action.payload.amount,
        },
      ],
    };
  }
  return { ...state };
};

export default mainReducer;
