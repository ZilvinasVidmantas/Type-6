import products from './data/products.js';
import ProductsTable from './components/products-table.js';

const rootElementSelector = '#root';
const rootElement = document.querySelector<HTMLElement>(rootElementSelector);
if (!rootElement) {
  throw new Error(`Nėra elemento su id: '${rootElementSelector}'`);
}

const productsTable = new ProductsTable(products);
rootElement.appendChild(productsTable.render());

/*
  įgalinkite logiką, jog būtų galima nurodyti lentelės pavadinimą:
    * ProductsTable komponente, priimkite naują parametrą title
      * Šį parametrą priskirkite ProductsTable objektui(instance'ui)
    * ProductsTable.header statinę savybę perrašykite, jog ji būtų objekto('instance') metodas,
      ir panaudokite konstruktoriuje priskirtą 'title' reikšmę
  10:30
*/
