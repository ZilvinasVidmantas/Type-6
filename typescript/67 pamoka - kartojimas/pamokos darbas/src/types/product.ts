import Category from './category.js';

type Product = {
  id: string,
  title: string,
  description?: string,
  price: number,
  type: Category,
};

export default Product;
