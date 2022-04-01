import TextField from './text-field';
import CheckboxGroupField from './checkbox-group-field';
import categoriesData from '../data/categories';

export type FormValues = {
  title: string,
  price: string,
  categories: string[],
  description?: string
};

type Fields = {
  title: TextField,
  price: TextField,
  categories: CheckboxGroupField,
  description: TextField
};

type Values = {
  title: string,
  price: string,
  categories: string[],
  description?: string
};

type ProductFormProps = {
  title: string,
  submitBtnText: string,
  isEdited: boolean,
  onSubmit: (values: FormValues) => void,
  values?: Values
};

class ProductForm {
  private fields: Fields;

  private htmlHeadingElement: HTMLHeadingElement;

  private htmlSubmitBtnElement: HTMLButtonElement;

  public htmlElement: HTMLFormElement;

  public constructor(private props: ProductFormProps) {
    this.htmlElement = document.createElement('form');
    this.htmlHeadingElement = document.createElement('h2');
    this.htmlSubmitBtnElement = document.createElement('button');
    this.fields = {
      title: new TextField({
        labelText: 'Pavadinimas',
        name: 'title',
      }),
      price: new TextField({
        labelText: 'Kaina',
        name: 'price',
      }),
      categories: new CheckboxGroupField({
        labelText: 'Kategorijos',
        name: 'categories',
        options: categoriesData.map(({ id, title }) => ({ label: title, value: id })),
      }),
      description: new TextField({
        labelText: 'Aprašymas',
        name: 'description',
      }),
    };

    this.initialize();
    this.renderView();
  }

  private handleSubmit = (e: SubmitEvent): void => {
    e.preventDefault();

    const { onSubmit } = this.props;

    const formData = new FormData(this.htmlElement);
    const title = formData.get('title') as string | null;
    const price = formData.get('price') as string | null;
    const categories = formData.getAll('categories') as string[];
    const description = formData.get('description') as string | null;
    if (title === null || price === null || categories.length === 0) {
      alert('Formoje neįvesti visi laukai');
      return;
    }

    const formValues: FormValues = {
      title,
      price,
      categories,
    };

    if (description) {
      formValues.description = description;
    }
    onSubmit(formValues);
  };

  private initialize = (): void => {
    this.htmlHeadingElement.className = 'text-center h3';
    this.htmlHeadingElement.innerHTML = 'Sukurti naują produktą';

    this.htmlSubmitBtnElement.type = 'submit';

    const fieldsContainer = document.createElement('div');
    fieldsContainer.className = 'd-flex flex-column gap-3';
    const htmlFieldElements = Object.values(this.fields).map((field) => field.htmlElement);
    fieldsContainer.append(...htmlFieldElements);

    this.htmlElement.addEventListener('submit', this.handleSubmit);
    this.htmlElement.style.width = '300px';
    this.htmlElement.className = 'card d-flex flex-column gap-3 p-3';
    this.htmlElement.append(
      this.htmlHeadingElement,
      fieldsContainer,
      this.htmlSubmitBtnElement,
    );
  };

  private renderView = (): void => {
    const {
      title, submitBtnText, isEdited, values,
    } = this.props;

    this.htmlHeadingElement.innerHTML = title;
    this.htmlSubmitBtnElement.innerHTML = submitBtnText;

    if (isEdited) {
      this.htmlElement.classList.add('border');
      this.htmlElement.classList.add('border-warning');
      this.htmlSubmitBtnElement.className = 'btn btn-warning';
    } else {
      this.htmlElement.classList.remove('border');
      this.htmlElement.classList.remove('border-warning');
      this.htmlSubmitBtnElement.className = 'btn btn-success';
    }

    if (values) {
      // this.fields.title.updateProps({
      //   value: values.title,
      // });
      // this.fields.price.updateProps({
      //   value: values.price,
      // });
      // this.fields.categories.updateProps({
      //   selectedValues: values.categories,
      // });

      // if (values.description !== undefined) {
      //   this.fields.description.updateProps({
      //     value: values.description,
      //   });
      // }

      const fieldsArr = Object
        .entries(this.fields) as [keyof Values, TextField | CheckboxGroupField][];
      fieldsArr.forEach(([name, field]) => {
        if (field instanceof TextField) {
          field.updateProps({ value: values[name] as string });
        } else {
          field.updateProps({ selectedValues: values[name] as string[] });
        }
      });
    }
  };

  public updateProps = (newProps: Partial<ProductFormProps>): void => {
    this.props = {
      ...this.props,
      ...newProps,
    };

    this.renderView();
  };
}

export default ProductForm;
