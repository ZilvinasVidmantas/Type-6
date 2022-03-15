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
  productsTable.render();
  rootElement.appendChild(productsTable.render());
});

rootElement.appendChild(CategorySelect.render());
rootElement.appendChild(productsTable.render());

/*
 Atliktas darbinis variantas, kuomet pasikeitus kategorijos select'o reikšmėj kuriamos naujos
 lentelės. Jeigu turite laiko ir noro, pabandykite:
  * įgalinti, jog būtų atnaujinami lentelės duomenys, nekuriant naujos lentelės:
    * komponente ProductsTable įgalinkite pradinį lentelės sukūrimą, jog metodas render
      tik atnaujintų duomenis, nekurdamas naujos lentelės
 */
