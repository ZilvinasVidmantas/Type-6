import Product from './types/product.js';
import allProducts from './data/products.js';
import ProductsTable from './components/products-table.js';
import CategorySelect from './components/category-select.js';

const rootElementSelector = '#root';
const rootElement = document.querySelector<HTMLElement>(rootElementSelector);
if (!rootElement) {
  throw new Error(`Nėra elemento su id: '${rootElementSelector}'`);
}

let productCategory: string = 'RAM';

const selectMotherBoardProducts = (products: Product[]): Product[] => products.filter((x) => x.type.name === 'MotherBoard');
const selectRamProducts = (products: Product[]): Product[] => products.filter((x) => x.type.name === 'RAM');

let currentProducts: Product[];
switch (productCategory) {
  case 'MotherBoard':
    currentProducts = selectMotherBoardProducts(allProducts);
    break;
  case 'RAM':
    currentProducts = selectRamProducts(allProducts);
    break;

  default:
    currentProducts = allProducts;
    break;
}

const productsTable = new ProductsTable(currentProducts, 'Visi produktai');

CategorySelect.onCategoryChange((newCategory) => {
  productCategory = newCategory;
  let newCurrentProducts: Product[];
  switch (productCategory) {
    case 'MotherBoard':
      newCurrentProducts = selectMotherBoardProducts(allProducts);
      break;
    case 'RAM':
      newCurrentProducts = selectRamProducts(allProducts);
      break;

    default:
      newCurrentProducts = allProducts;
      break;
  }
  productsTable.setData(newCurrentProducts);
  productsTable.render();
  rootElement.appendChild(productsTable.render());
});

rootElement.appendChild(CategorySelect.render());
rootElement.appendChild(productsTable.render());

/*
 Atliktas darbinis variantas, kuomet pasikeitus kategorijos select'o reikšmėj kuriamos naujos
 lentelės. Jeigu turite laiko ir noro, pabandykite:
  * perdaryti funkcijas selectMotherBoardProducts, selectRamProducts, jog jos filtruotų pagal
    dinamiškai perduotą categorijos pavadinimą
  * įgalinti, jog būtų atnaujinami lentelės duomenys, nekuriant naujos lentelės:
    * komponente ProductsTable įgalinkite pradinį lentelės sukūrimą, jog metodas render
      tik atnaujintų duomenis, nekurdamas naujos lentelės
 */
