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
  auth: {
    user: null,
    error: null,
    loading: false,
  },
};

const mainReducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const shopItem = state.cart.find((cartItem) => cartItem.itemId === action.payload.id);
      let cart: State['cart'];
      let items: State['items'];

      if (shopItem) {
        const diff = shopItem.amount - action.payload.amount;
        items = state.items.map((item) => (item.id === action.payload.id
          ? { ...item, amount: item.amount + diff }
          : item));

        cart = [...state.cart.filter(({ itemId }) => itemId !== action.payload.id)];
        shopItem.amount = action.payload.amount;
        if (shopItem.amount > 0) {
          cart.push(shopItem);
        }
      } else {
        items = state.items.map((item) => (item.id === action.payload.id
          ? { ...item, amount: item.amount - action.payload.amount }
          : item));
        cart = [
          ...state.cart,
          {
            id: createId(),
            itemId: action.payload.id,
            amount: action.payload.amount,
          },
        ];
      }

      return {
        ...state,
        items,
        cart,
      };
    }

    case 'AUTH_SUCCESS': {
      return {
        ...state,
        auth: {
          ...state.auth,
          user: action.payload.user,
          loading: false,
        },
      };
    }

    case 'AUTH_FAILURE': {
      return {
        ...state,
        auth: {
          ...state.auth,
          error: action.payload.error,
          loading: false,
        },
      };
    }

    case 'AUTH_LOGOUT': {
      return {
        ...state,
        auth: {
          ...state.auth,
          user: null,
        },
      };
    }

    case 'AUTH_CLEAR_ERROR': {
      return {
        ...state,
        auth: {
          ...state.auth,
          error: null,
        },
      };
    }

    case 'AUTH_LOADING': {
      return {
        ...state,
        auth: {
          ...state.auth,
          error: null,
          loading: true,
        },
      };
    }

    default: return state;
  }
};

export default mainReducer;

// Įgalinti navigavimą pagal 'next' savybę po prisijungimo/registracijos;
// Įgalinti redux auth state išlaikymą perkraunant puslapį;
// 11:20
// Peržiūrite kodą - 11:30
// klausimai
