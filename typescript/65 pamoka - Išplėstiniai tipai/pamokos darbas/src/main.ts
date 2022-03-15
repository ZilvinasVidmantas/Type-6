import allProducts from './data/products.js';
import ProductsTable from './components/products-table.js';
import CategorySelect from './components/category-select.js';
import ProductCollection from './helpers/product-collection.js';

const rootElementSelector = '#root';
const rootElement = document.querySelector<HTMLElement>(rootElementSelector);
if (!rootElement) {
  throw new Error(`Nėra elemento su id: '${rootElementSelector}'`);
}

const categoryNameProductTableTitleDictionary = {
  all: 'Visi produktai',
  MotherBoard: 'Motininės plokštės',
  RAM: 'Operatyvi atmintis',
};

const productCollection = new ProductCollection(allProducts);
const productsTable = new ProductsTable(productCollection.getAll(), 'Visi produktai');

CategorySelect.onCategoryChange((newCategory) => {
  const categoryProducts = productCollection.getByCategoryName(newCategory);

  /*
    Sukurti funkcionalumą, jog pasikeitus kategorijai atsinaujintų produktų lentelės pavadinimas
    * sukurti metodą products-table.ts, kuris pakeistų pavadinimą
    * panaudoti kintamajį 'categoryNameProductTableTitleDictionary', kad nustati lentelės pavadinimą
    * iki 10:35
  */

  productsTable.setData(categoryProducts);
  productsTable.update();
});

rootElement.appendChild(CategorySelect.render());
rootElement.appendChild(productsTable.htmlElement);
