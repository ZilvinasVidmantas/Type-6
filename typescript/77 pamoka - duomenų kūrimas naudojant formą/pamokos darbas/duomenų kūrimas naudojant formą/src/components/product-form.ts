import TextField from './text-field';
import CheckboxGroupField from './checkbox-group-field';

type Fields = {
  title: TextField,
  price: TextField,
  categories: CheckboxGroupField,
  description: TextField
};

class ProductForm {
  public htmlElement: HTMLFormElement;

  private htmlHeadingElement: HTMLHeadingElement;

  private htmlSubmitBtnElement: HTMLButtonElement;

  private fields: Fields;

  public constructor() {
    this.htmlElement = document.createElement('form');
    this.htmlHeadingElement = document.createElement('h2');
    this.htmlSubmitBtnElement = document.createElement('button');
    this.fields = {
      title: new TextField(),
      price: new TextField(),
      categories: new CheckboxGroupField(),
      description: new TextField(),
    };

    this.initialize();
  }

  private initialize = (): void => {
    this.htmlHeadingElement.className = 'text-center h3';
    this.htmlHeadingElement.innerHTML = 'Sukurti naują produktą';

    this.htmlSubmitBtnElement.type = 'submit';
    this.htmlSubmitBtnElement.className = 'btn btn-success';
    this.htmlSubmitBtnElement.innerHTML = 'Sukurti';

    const fieldsContainer = document.createElement('div');
    fieldsContainer.className = 'd-flex flex-column gap-3';
    const htmlFieldElements = Object.values(this.fields).map((field) => field.htmlElement);
    fieldsContainer.append(...htmlFieldElements);

    this.htmlElement.className = 'card d-flex flex-column gap-3 p-3';
    this.htmlElement.append(
      this.htmlHeadingElement,
      fieldsContainer,
      this.htmlSubmitBtnElement,
    );
  };
}

export default ProductForm;
