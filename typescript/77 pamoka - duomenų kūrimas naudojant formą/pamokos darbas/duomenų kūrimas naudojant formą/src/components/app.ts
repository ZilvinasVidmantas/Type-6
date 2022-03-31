import Table from './table';
import products from '../data/products';
import categories from '../data/categories';
import productsCategories from '../data/products-categories';
import ProductsCollection from '../helpers/products-collection';
import stringifyProps, { StringifiedProps } from '../helpers/stringify-props';
import SelectField from './select-field';
import ProductJoined from '../types/product-joined';

class App {
  private htmlElement: HTMLElement;

  private productsCollection: ProductsCollection;

  private productsTable: Table<StringifiedProps<ProductJoined>>;

  private selectedCategoryId: string | null;

  public constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);
    if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

    this.selectedCategoryId = null;
    this.productsCollection = new ProductsCollection(products, categories, productsCategories);
    this.productsTable = new Table({
      title: 'Visos prekės',
      columns: {
        id: 'Id',
        title: 'Pavadinimas',
        price: 'Kaina',
        categories: 'Kategorijos',
        description: 'Aprašymas',
      },
      rowsData: this.productsCollection.all.map(stringifyProps),
      onDelete: this.handleProductDelete,
    });

    this.htmlElement = foundElement;
  }

  private handleProductDelete = (productId: string): void => {
    this.productsCollection.deleteProduct(productId);

    this.updateData();
  };

  private handleCategoryChange = (categoryId: string): void => {
    const category = categories.find((c) => c.id === categoryId);

    this.selectedCategoryId = category ? categoryId : null;

    this.updateData();
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

    const container = document.createElement('div');
    container.className = 'container my-5 d-flex flex-column gap-3';
    container.append(
      categorySelect.htmlElement,
      this.productsTable.htmlElement,
    );

    this.htmlElement.append(container);
  };

  private updateData = (): void => {
    const { selectedCategoryId } = this;
    const category = categories.find((c) => c.id === selectedCategoryId);

    if (selectedCategoryId && category) {
      this.productsTable.updateProps({
        title: category.title,
        rowsData: this.productsCollection.getByCategoryId(selectedCategoryId).map(stringifyProps),
      });
    } else {
      this.productsTable.updateProps({
        title: 'Visos prekės',
        rowsData: this.productsCollection.all.map(stringifyProps),
      });
    }
  };
}

export default App;

/*
  // 1. Gauti pakeistos kategorijos id App komponente
  // 2. Table - įgalinti lentelės duomenų atnaujinimą
  // 3. ProductsCollection įgalinti produktų gavimą pagal kategorijos id
  // 4. Apjungti funkcionalumą:
  //   pasikeitus kategorijai[1.] nuadosime ProductsCollection, kad gauti produktus pagal
  //   pasikeitusią kategoriją[3.] ir tuomet perduosi duomenis lentelei,
  //   kuri atnaujins lentelės duomenis [2.]
*/

/*
  // 1. Kiekvienoj eilutėje turite sukurti ištrynimo mygtuką
  // 2. Paspaudus ištrynimo mygtuką, turi vykdytis funkcija App komponente
  // 3. ProductsCollection klasėje sukurti metodą ištrinti elementui

  PROBLEMA - po ištrynimo reikia per naujo partraukti ProductsCollection duomenis, tačiau
  nėra žinoma, ar reikia partraukti visus? O galbūt pagal kažkokią kategoriją? Vienas iš daugelio
  sprendimo variantų, būtų išsaugoti paskutinį pasirinktą kategorijos id raktą ir pagal tai, po
  ištrynimo atnaujinti App (ir tuo pačiu Table) duomenis.
  Tokiam funkcionalumui pasiekti, reikia retrūkturizuoti App komponentą, jog jo atnaujinimas būtų
  atliekamas atskirame metode nuo pradinių veiksmų.
  Ir tuomet atlikus bet kokius duomenų arba App komponento kintamųjų pakitimus mes galėsim
  atnaujinti vaikinių elementų atvaizdavima PAGAL pakitusius duomenis. Principas toks:
    keičiame bet kokius duomenis -> kviečiame atnaujinimo metodą,
      kuris atnaujina atvaizdavimą pagal komponente išsaugotus duomenis ir perduodant vaikiniams
      elementams naujas/pakitusias savybes ar duomenis

  // 4. Sukurti pasirinktos kategorijos kintamajį
  // 5. Išskaidyti App komponento pradinius veiksmus ir veiksmų atnaujinimą
  // 6. Įgalinti trynimą, ištrinant produktą iš ProductsCollection ir kviečiant App duomenų
  // atnaujinimo metodą
*/
