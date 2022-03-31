class ProductForm {
  public htmlElement: HTMLFormElement;

  private htmlHeadingElement: HTMLHeadingElement;

  private htmlSubmitBtnElement: HTMLButtonElement;

  constructor() {
    this.htmlElement = document.createElement('form');
    this.htmlHeadingElement = document.createElement('h2');
    this.htmlSubmitBtnElement = document.createElement('button');

    this.initialize();
  }

  private initialize = (): void => {
    this.htmlHeadingElement.className = 'text-center h3';
    this.htmlHeadingElement.innerHTML = 'Sukurti naują produktą';

    this.htmlSubmitBtnElement.type = 'submit';
    this.htmlSubmitBtnElement.className = 'btn btn-success';
    this.htmlSubmitBtnElement.innerHTML = 'Sukurti';

    this.htmlElement.className = 'card d-flex flex-column gap-3 p-3';
    this.htmlElement.append(
      this.htmlHeadingElement,
      this.htmlSubmitBtnElement,
    );
  };
}

export default ProductForm;
