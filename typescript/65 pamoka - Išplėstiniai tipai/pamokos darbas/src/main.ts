import allProducts from './data/products.js';
import ProductsTable from './components/products-table.js';
import CategorySelect from './components/category-select.js';
import ProductCollection from './helpers/product-collection.js';

const rootElementSelector = '#root';
const rootElement = document.querySelector<HTMLElement>(rootElementSelector);
if (!rootElement) {
  throw new Error(`Nėra elemento su id: '${rootElementSelector}'`);
}

type CategoryNameToTitleDictionary = {
  [key: string]: string,
};

const categoryNameToTitleDictionary: CategoryNameToTitleDictionary = {
  all: 'Visi produktai',
  MotherBoard: 'Motininės plokštės',
  RAM: 'Operatyvi atmintis',
};

const productCollection = new ProductCollection(allProducts);
const productsTable = new ProductsTable(productCollection.getAll(), 'Visi produktai');

CategorySelect.onCategoryChange((categoryName) => {
  const categoryProducts = productCollection.getByCategoryName(categoryName);

  if (categoryName in categoryNameToTitleDictionary) {
    const tableTitle = categoryNameToTitleDictionary[categoryName];
    productsTable.setTitle(tableTitle);
  }

  productsTable.setData(categoryProducts);
  productsTable.update();
});

rootElement.appendChild(CategorySelect.render());
rootElement.appendChild(productsTable.htmlElement);
