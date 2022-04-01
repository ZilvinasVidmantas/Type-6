import Product from './product';

type ProductJoined = Product & {
  categoriesIds: string[],
};

export default ProductJoined;
