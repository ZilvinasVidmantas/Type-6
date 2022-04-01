import Table from './table';
import products from '../data/products';
import categories from '../data/categories';
import productsCategories from '../data/products-categories';
import ProductsCollection from '../helpers/products-collection';
import stringifyProps, { StringifiedProps } from '../helpers/stringify-props';
import SelectField from './select-field';
import ProductJoined from '../types/product-joined';
import ProductForm, { FormValues } from './product-form';

type ProductTableRow = StringifiedProps<
  Omit<ProductJoined, 'categoriesIds'> & {
    categories: string
  }
>;

const defaultFormProps = {
  title: 'Kurti naują produktą',
  submitBtnText: 'Kurti!',
  isEdited: false,
  values: {
    title: '',
    price: '',
    categories: [],
  },
};

const defaultTableProps = {
  title: 'Visos prekės',
};

const formatProductTableRow = ({
  categoriesIds,
  ...categoryProps
}: ProductJoined): ProductTableRow => {
  const formattedProduct = {
    ...categoryProps,
    categories: categoriesIds.map((id) => categories.find((c) => c.id === id)?.title ?? '--').join(', '),
  };

  return stringifyProps(formattedProduct);
};

class App {
  private htmlElement: HTMLElement;

  private productsCollection: ProductsCollection;

  private productsTable: Table<ProductTableRow>;

  private selectedCategoryId: string | null;

  private categorySelect: SelectField;

  private productForm: ProductForm;

  private editedProductId: string | null;

  public constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);
    if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

    this.editedProductId = null;
    this.selectedCategoryId = null;
    this.htmlElement = foundElement;
    this.productsCollection = new ProductsCollection({ products, categories, productsCategories });
    this.productsTable = new Table({
      ...defaultTableProps,
      columns: {
        id: 'Id',
        title: 'Pavadinimas',
        price: 'Kaina',
        categories: 'Kategorijos',
        description: 'Aprašymas',
      },
      editedRowId: this.editedProductId,
      rowsData: this.productsCollection.all.map(formatProductTableRow),
      onDelete: this.handleProductDelete,
      onEdit: this.handleEditProduct,
    });
    const categoryOptions = [
      { value: '-1', title: 'Visos kategorijos' },
      ...categories.map(({ id, title }) => ({ title, value: id })),
    ];
    this.categorySelect = new SelectField({
      options: categoryOptions,
      onChange: this.handleChangeCategory,
    });
    this.productForm = new ProductForm({
      ...defaultFormProps,
      onSubmit: this.handleCreateProduct,
    });
  }

  private handleChangeCategory = (categoryId: string): void => {
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

  private handleEditProduct = (productId: string): void => {
    this.editedProductId = this.editedProductId === productId ? null : productId;

    this.renderView();
  };

  private handleUpdateProduct = ({ price, ...values }: FormValues) => {
    if (this.editedProductId) {
      this.productsCollection.update(this.editedProductId, {
        price: Number(price),
        ...values,
      });

      this.editedProductId = null;

      this.renderView();
    }
  };

  private handleProductDelete = (productId: string): void => {
    this.productsCollection.deleteProduct(productId);

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
    const { selectedCategoryId, editedProductId, productForm } = this;
    const category = categories.find((c) => c.id === selectedCategoryId);

    if (selectedCategoryId && category) {
      this.productsTable.updateProps({
        title: category.title,
        rowsData: this.productsCollection.getByCategoryId(selectedCategoryId)
          .map(formatProductTableRow),
        editedRowId: editedProductId,
      });
    } else {
      this.productsTable.updateProps({
        ...defaultTableProps,
        rowsData: this.productsCollection.all.map(formatProductTableRow),
        editedRowId: editedProductId,
      });
    }

    if (editedProductId) {
      const editedProduct = this.productsCollection.all.find((p) => p.id === editedProductId);
      if (!editedProduct) {
        alert('Nerastas produktas pagal redaguojamo produkto id');
        return;
      }

      const {
        id, categoriesIds, price, ...productProps
      } = editedProduct;

      productForm.updateProps({
        title: 'Atnaujinti produktą',
        submitBtnText: 'Atnaujinti!',
        isEdited: true,
        values: {
          ...productProps,
          price: String(price),
          categories: categoriesIds,
        },
        onSubmit: this.handleUpdateProduct,
      });
    } else {
      productForm.updateProps({
        ...defaultFormProps,
        onSubmit: this.handleCreateProduct,
      });
    }
  };
}

export default App;
