import Form from './form.js';
import ProductsTable from './products-table.js';
import ProductCollection from '../helpers/product-collection.js';
import allProducts from '../data/products.js';
import CategorySelect from './category-select.js';

type CategoryNameToTitleDictionary = {
  [key: string]: string,
};

const categoryNameToTitleDictionary: CategoryNameToTitleDictionary = {
  all: 'Visi produktai',
  MotherBoard: 'Motininės plokštės',
  RAM: 'Operatyvi atmintis',
};

class App {
  public htmlElement: Element;

  private productForm: Form;

  private containerHtmlElement: HTMLDivElement;

  private productsTable: ProductsTable;

  private productCollection: ProductCollection;

  constructor(selector: string) {
    const foundElement = document.querySelector(selector);
    if (!foundElement) {
      throw new Error(`Nėra elemento su id: '${selector}'`);
    }
    this.htmlElement = foundElement;

    this.containerHtmlElement = document.createElement('div');
    this.productCollection = new ProductCollection(allProducts);
    this.productForm = new Form();
    this.productsTable = new ProductsTable(
      this.productCollection.getAll(),
      'Visi produktai',
    );

    this.format();
  }

  private formatCategorySelect = (): void => {
    CategorySelect.onCategoryChange((categoryName) => {
      const categoryProducts = this.productCollection.getByCategoryName(categoryName);

      if (categoryName in categoryNameToTitleDictionary) {
        const tableTitle = categoryNameToTitleDictionary[categoryName];
        this.productsTable.setTitle(tableTitle);
      }

      this.productsTable.setData(categoryProducts);
      this.productsTable.update();
    });
  };

  private formatContainerHtmlElement = () => {
    this.containerHtmlElement.className = 'd-flex gap-4 my-4 align-items-start';
    this.containerHtmlElement.append(
      this.productsTable.htmlElement,
      this.productForm.htmlElement,
    );
  };

  private format = (): void => {
    this.formatCategorySelect();
    this.formatContainerHtmlElement();

    this.htmlElement.append(
      CategorySelect.render(),
      this.containerHtmlElement,
    );
  };
}

export default App;
