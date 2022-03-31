class TextField {
  public htmlElement: HTMLDivElement;

  private htmlLabelElement: HTMLLabelElement;

  private htmlInputElement: HTMLInputElement;

  public constructor() {
    this.htmlElement = document.createElement('div');
    this.htmlLabelElement = document.createElement('label');
    this.htmlInputElement = document.createElement('input');

    this.initialize();
  }

  public initialize = (): void => {
    this.htmlLabelElement.innerHTML = 'Lauko pavadinimas';

    this.htmlInputElement.type = 'text';
    this.htmlInputElement.className = 'form-control';

    this.htmlElement.append(
      this.htmlLabelElement,
      this.htmlInputElement,
    );
  };
}

export default TextField;
