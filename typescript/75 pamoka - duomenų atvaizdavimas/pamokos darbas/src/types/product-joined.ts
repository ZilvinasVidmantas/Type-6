import Product from './product';
import Category from './category';

type ProductJoined = Product & {
  categories: Category[],
};

export default ProductJoined;
