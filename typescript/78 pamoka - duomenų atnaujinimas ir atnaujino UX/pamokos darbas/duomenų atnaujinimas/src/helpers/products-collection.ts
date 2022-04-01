import Product from '../types/product';
import Category from '../types/category';
import ProductCategory from '../types/product-category';
import ProductJoined from '../types/product-joined';
import createId from './create-id';

type ProductProps = {
  title: string,
  price: number,
  categories: string[];
  description?: string,
};

type ProductsCollectionProps = {
  products: Product[],
  categories: Category[],
  productsCategories: ProductCategory[],
};

class ProductsCollection {
  public constructor(private props: ProductsCollectionProps) { }

  private joinProduct = (product: Product): ProductJoined => {
    const { categories, productsCategories } = this.props;

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
    const { products } = this.props;

    return products.map(this.joinProduct);
  }

  public getByCategoryId = (categoryId: string): ProductJoined[] => {
    const { products, categories, productsCategories } = this.props;

    const category = categories.find((x) => x.id === categoryId);

    if (category === undefined) return this.all;

    const productsIds = productsCategories
      .filter((pc) => pc.categoryId === categoryId)
      .map((pc) => pc.productId);

    const selectedProducts = products.filter((p) => productsIds.includes(p.id));

    return selectedProducts.map(this.joinProduct);
  };

  public deleteProduct = (productId: string): void => {
    const { products } = this.props;

    this.props.products = products.filter((p) => p.id !== productId);
  };

  public add = ({ categories: categoriesIds, ...props }: ProductProps): void => {
    const { products, categories, productsCategories } = this.props;

    const existingCategoriesIds = categories.map((c) => c.id);
    if (categoriesIds.some((categoryId) => !existingCategoriesIds.includes(categoryId))) {
      alert('Bandoma sukurti naują produktą, su kategorijomis, kurių nėra kategorijų masyve');
      return;
    }

    const newProduct: Product = {
      id: createId(),
      ...props,
    };

    categoriesIds.forEach((categoryId) => {
      const newProductCategory: ProductCategory = {
        id: createId(),
        productId: newProduct.id,
        categoryId,
      };
      productsCategories.push(newProductCategory);
    });

    products.push(newProduct);
  };
}

export default ProductsCollection;
