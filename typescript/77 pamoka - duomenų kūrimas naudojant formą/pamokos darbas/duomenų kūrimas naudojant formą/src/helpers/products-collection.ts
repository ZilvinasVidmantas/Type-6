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

  private joinProduct = (product: Product): ProductJoined => {
    const { categories, productsCategories } = this;

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
  };

  public get all(): ProductJoined[] {
    return this.products.map(this.joinProduct);
  }

  public getByCategoryId = (categoryId: string): ProductJoined[] => {
    const category = this.categories.find((x) => x.id === categoryId);

    if (category === undefined) return this.all;

    const productsIds = this.productsCategories
      .filter((pc) => pc.categoryId === categoryId)
      .map((pc) => pc.productId);

    const selectedProducts = this.products.filter((p) => productsIds.includes(p.id));

    return selectedProducts.map(this.joinProduct);
  };

  public deleteProduct = (productId: string): void => {
    this.products = this.products.filter((p) => p.id !== productId);
  };
}

export default ProductsCollection;
