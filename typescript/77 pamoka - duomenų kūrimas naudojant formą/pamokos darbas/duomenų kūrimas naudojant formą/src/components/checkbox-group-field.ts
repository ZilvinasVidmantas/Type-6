/* eslint-disable no-param-reassign */
const createId = () => String(Math.floor(Math.random() * 10 ** 16));

class CheckboxGroupField {
  public htmlElement: HTMLDivElement;

  private htmlLabelElement: HTMLLabelElement;

  private htmlCheckboxElements: HTMLInputElement[];

  private htmlCheckboxContainer: HTMLDivElement;

  public constructor() {
    this.htmlElement = document.createElement('div');
    this.htmlLabelElement = document.createElement('label');
    this.htmlCheckboxContainer = document.createElement('div');
    this.htmlCheckboxElements = [
      document.createElement('input'),
      document.createElement('input'),
      document.createElement('input'),
      document.createElement('input'),
      document.createElement('input'),
    ];

    this.initialize();
  }

  private initializeHtmlCheckboxContainer = (): void => {
    this.htmlCheckboxContainer.className = 'd-flex flex-column';
    const inputGroups = this.htmlCheckboxElements.map((input, i) => {
      const inputId = createId();

      const inputGroup = document.createElement('div');
      inputGroup.className = 'form-check';

      const inputLabel = document.createElement('label');
      inputLabel.className = 'form-check-label';
      inputLabel.setAttribute('for', inputId);
      inputLabel.innerHTML = `Pasirinkimas ${i + 1}`;

      input.type = 'checkbox';
      input.className = 'form-check-input';
      input.id = inputId;

      inputGroup.append(
        input,
        inputLabel,
      );

      return inputGroup;
    });
    this.htmlCheckboxContainer.append(...inputGroups);
  };

  private initialize = (): void => {
    this.initializeHtmlCheckboxContainer();
    this.htmlLabelElement.innerHTML = 'Lauko pavadinimas';

    this.htmlElement.append(
      this.htmlLabelElement,
      this.htmlCheckboxContainer,
    );
  };
}

export default CheckboxGroupField;
