import allProducts from './data/products.js';
import ProductsTable from './components/products-table.js';
import CategorySelect from './components/category-select.js';
import ProductCollection from './helpers/product-collection.js';

const rootElementSelector = '#root';
const rootElement = document.querySelector<HTMLElement>(rootElementSelector);
if (!rootElement) {
  throw new Error(`Nėra elemento su id: '${rootElementSelector}'`);
}

const productCollection = new ProductCollection(allProducts);
const productsTable = new ProductsTable(productCollection.getAll(), 'Visi produktai');

CategorySelect.onCategoryChange((newCategory) => {
  const categoryProducts = productCollection.getByCategoryName(newCategory);

  productsTable.setData(categoryProducts);
  productsTable.update();
});

rootElement.appendChild(CategorySelect.render());
rootElement.appendChild(productsTable.htmlElement);

/*
  Klasės savybių išrašymo tvarka:
    * private static properties
    * public static properties
    * private static methods
    * public static methods
    * private properties
    * public properties
    * constructor
    * private methods
    * public methods
*/
