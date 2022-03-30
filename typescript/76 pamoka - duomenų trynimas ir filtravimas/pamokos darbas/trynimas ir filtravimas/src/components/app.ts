import Table from './table';
import products from '../data/products';
import categories from '../data/categories';
import productsCategories from '../data/products-categories';
import ProductsCollection from '../helpers/products-collection';
import stringifyProperties from '../helpers/stringify-properties';

class App {
  private htmlElement: HTMLElement;

  private productsCollection: ProductsCollection;

  public constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);
    this.productsCollection = new ProductsCollection(products, categories, productsCategories);

    if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

    this.htmlElement = foundElement;
  }

  public initialize = (): void => {
    const productTable = new Table({
      title: 'Visos prekės',
      columns: {
        id: 'Id',
        title: 'Pavadinimas',
        price: 'Kaina',
        categories: 'Kategorijos',
        description: 'Aprašymas',
      },
      rowsData: this.productsCollection.all.map(stringifyProperties),
    });

    const container = document.createElement('div');
    container.className = 'container my-5';
    container.appendChild(productTable.htmlElement);

    this.htmlElement.append(container);
  };
}

export default App;
