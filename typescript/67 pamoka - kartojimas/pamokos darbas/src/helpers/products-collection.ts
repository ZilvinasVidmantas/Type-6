import Product from '../types/product.js';

class ProductsCollection {
  private static validCategories: string[] = ['MotherBoard', 'RAM'];

  private products: Product[];

  public constructor(products: Product[]) {
    this.products = products;
  }

  public getByCategoryName(categoryName: string): Product[] {
    if (ProductsCollection.validCategories.includes(categoryName)) {
      return this.products.filter((x) => x.type.name === categoryName);
    }
    return this.getAll();
  }

  public getAll(): Product[] {
    return this.products;
  }
}

export default ProductsCollection;
