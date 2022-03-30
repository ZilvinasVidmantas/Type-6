import Product from '../types/product';
import Category from '../types/category';
import ProductCategory from '../types/product-category';
import ProductJoined from '../types/product-joined';

class ProductsCollection {
  public constructor(
    private products: Product[],
    private categories: Category[],
    private productsCategories: ProductCategory[],
  ) { }

  public get all(): ProductJoined[] {
    const { products, categories, productsCategories } = this;

    const productsJoined: ProductJoined[] = products.map((product) => {
      const productCategoriesIds = productsCategories
        .filter((pc) => pc.productId === product.id)
        .map((pc) => pc.categoryId);

      const productCategories = categories
        .filter((category) => productCategoriesIds.includes(category.id))
        .map((category) => category.title);

      return {
        ...product,
        categories: productCategories.join(', '),
      };
    });

    return productsJoined;
  }
}

export default ProductsCollection;
