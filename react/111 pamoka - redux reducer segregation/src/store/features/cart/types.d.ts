export type AddToCartAction = {
  type: 'ADD_TO_CART',
  payload: {
    id: string,
    amount: number,
  }
};

export type CartAction = AddToCartAction;
