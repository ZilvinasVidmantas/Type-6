export type Item = {
  id: string,
  images: string[],
  price: number,
  categories: string[],
  amount: number,
};

export type State = {
  items: Item[],
};

export type Action = {
  type: string,
  payload: any,
};
