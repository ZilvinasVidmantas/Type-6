export type CartItemPopulated = {
  id: string,
  product: {
    id: string,
    title: string,
    price: number,
    updatedAt: string,
    categoryIds: string[],
    images: string[],
  },
  amount: number,
  createdAt: string,
  updatedAt: string,
};
