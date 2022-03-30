import Table from './table';
import products from '../data/products';
import categories from '../data/categories';
import productsCategories from '../data/products-categories';
import ProductsCollection from '../helpers/products-collection';
import stringifyProperties from '../helpers/stringify-properties';
import SelectField from './select-field';

class App {
  private htmlElement: HTMLElement;

  private productsCollection: ProductsCollection;

  public constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);
    this.productsCollection = new ProductsCollection(products, categories, productsCategories);

    if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

    this.htmlElement = foundElement;
  }

  // eslint-disable-next-line class-methods-use-this
  private handleCategoryChange = (categoryId: string) => {
    console.log('Pasikeitė kategorija:', categoryId);
  };

  public initialize = (): void => {
    const categoryOptions = [
      { value: '-1', title: 'Visos kategorijos' },
      ...categories.map(({ id, title }) => ({ title, value: id })),
    ];
    const categorySelect = new SelectField({
      options: categoryOptions,
      onChange: this.handleCategoryChange,
    });

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
    container.className = 'container my-5 d-flex flex-column gap-3';
    container.append(
      categorySelect.htmlElement,
      productTable.htmlElement,
    );

    this.htmlElement.append(container);
  };
}

export default App;

/*
  // 1. Gauti pakeistos kategorijos id App komponente
  2. Table - įgalinti lentelės duomenų atnaujinimą
  3. ProductsCollection įgalinti produktų gavimą pagal kategorijos id
  4. Apjungti funkcionalumą:
    pasikeitus kategorijai[1.] nuadosime ProductsCollection, kad gauti produktus pagal
    pasikeitusią kategoriją[3.] ir tuomet perduosi duomenis lentelei,
    kuri atnaujins lentelės duomenis [2.]
*/
