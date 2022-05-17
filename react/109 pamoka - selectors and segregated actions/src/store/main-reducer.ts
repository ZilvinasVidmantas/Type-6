/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { v4 as createId } from 'uuid';
import { User } from '../types';
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
  auth: {
    user: null,
    error: null,
    loading: false,
  },
};

/*
  clearError: VoidFunction,
  login: (crudentials: Crudentials, next: string) => void,
  register: (userRegistration: UserRegistration) => void,
  logout: VoidFunction,

  LOGIN - kviečiamas iš komponento
  LOGIN_SUCCESS - LOGIN action'o rezultatas
  LOGIN_FAILURE - LOGIN action'o rezultatas
  REGISTER - kviečiamas iš komponento
  REGISTER_SUCCESS - REGISTER action'o rezultatas
  REGISTER_FAILURE - REGISTER action'o rezultatas
*/

const mainReducer: Reducer<State, Action> = (state = initialState, { type, payload }) => {
  if (type === 'ADD_TO_CART') {
    const userJSON = localStorage.getItem('user');
    const user = userJSON ? JSON.parse(userJSON) as User : null;
    if (user) {
      console.log('siunčiami duomeny į serverį');
    } else {
      console.log('išsaugomi duomenys localStorage');
    }

    const shopItem = state.cart.find((cartItem) => cartItem.itemId === payload.id);
    let cart: State['cart'];
    let items: State['items'];

    if (shopItem) {
      const diff = shopItem.amount - payload.amount;
      items = state.items.map((item) => (item.id === payload.id
        ? { ...item, amount: item.amount + diff }
        : item));

      cart = [...state.cart.filter(({ itemId }) => itemId !== payload.id)];
      shopItem.amount = payload.amount;
      if (shopItem.amount > 0) {
        cart.push(shopItem);
      }
    } else {
      items = state.items.map((item) => (item.id === payload.id
        ? { ...item, amount: item.amount - payload.amount }
        : item));
      cart = [
        ...state.cart,
        {
          id: createId(),
          itemId: payload.id,
          amount: payload.amount,
        },
      ];
    }

    return {
      ...state,
      items,
      cart,
    };
  }
  return state;
};

export default mainReducer;
