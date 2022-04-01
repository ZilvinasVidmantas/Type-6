import Table from './table';
import products from '../data/products';
import categories from '../data/categories';
import productsCategories from '../data/products-categories';
import ProductsCollection from '../helpers/products-collection';
import stringifyProps, { StringifiedProps } from '../helpers/stringify-props';
import SelectField from './select-field';
import ProductJoined from '../types/product-joined';
import ProductForm, { FormValues } from './product-form';

class App {
  private htmlElement: HTMLElement;

  private productsCollection: ProductsCollection;

  private productsTable: Table<StringifiedProps<ProductJoined>>;

  private selectedCategoryId: string | null;

  private categorySelect: SelectField;

  private productForm: ProductForm;

  public constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);
    if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

    this.selectedCategoryId = null;
    this.htmlElement = foundElement;
    this.productsCollection = new ProductsCollection({ products, categories, productsCategories });
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
    const categoryOptions = [
      { value: '-1', title: 'Visos kategorijos' },
      ...categories.map(({ id, title }) => ({ title, value: id })),
    ];
    this.categorySelect = new SelectField({
      options: categoryOptions,
      onChange: this.handleCategoryChange,
    });
    this.productForm = new ProductForm({
      onSubmit: this.handleCreateProduct,
    });
  }

  private handleProductDelete = (productId: string): void => {
    this.productsCollection.deleteProduct(productId);

    this.renderView();
  };

  private handleCategoryChange = (categoryId: string): void => {
    const category = categories.find((c) => c.id === categoryId);

    this.selectedCategoryId = category ? categoryId : null;

    this.renderView();
  };

  private handleCreateProduct = ({ price, ...values }: FormValues) => {
    this.productsCollection.add({
      price: Number(price),
      ...values,
    });

    this.renderView();
  };

  public initialize = (): void => {
    const uxContainer = document.createElement('div');
    uxContainer.className = 'd-flex gap-3 align-items-start';
    uxContainer.append(
      this.productsTable.htmlElement,
      this.productForm.htmlElement,
    );

    const container = document.createElement('div');
    container.className = 'container my-5 d-flex flex-column gap-3';
    container.append(
      this.categorySelect.htmlElement,
      uxContainer,
    );

    this.htmlElement.append(container);
  };

  private renderView = (): void => {
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
