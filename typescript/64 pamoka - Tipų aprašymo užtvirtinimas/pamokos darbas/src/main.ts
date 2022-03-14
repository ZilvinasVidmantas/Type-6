import products from './data/products.js';
import ProductsTable from './components/products-table.js';

const rootElementSelector = '#root';
const rootElement = document.querySelector<HTMLElement>(rootElementSelector);
if (!rootElement) {
  throw new Error(`Nėra elemento su id: '${rootElementSelector}'`);
}

const productsTable = new ProductsTable(products);
rootElement.appendChild(productsTable.render());
