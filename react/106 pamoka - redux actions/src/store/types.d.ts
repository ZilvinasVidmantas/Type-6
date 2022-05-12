export type Item = {
  id: string,
  images: string[],
  price: number,
  categories: string[],
  amount: number,
};

export type CartItem = {
  id: string,
  itemId: string,
  amount: number
};

export type State = {
  items: Item[],
  cart: CartItem[]
};

export type Action = {
  type: string,
  payload: any,
};
