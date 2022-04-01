/* eslint-disable no-param-reassign */
import createId from '../helpers/create-id';

type CheckboxOption = {
  value: string,
  label: string
};

type CheckboxGroupFieldProps = {
  labelText: string,
  name: string,
  options: CheckboxOption[],
  selectedValues?: string[],
};

class CheckboxGroupField {
  public htmlElement: HTMLDivElement;

  private htmlLabelElement: HTMLLabelElement;

  private htmlCheckboxContainer: HTMLDivElement;

  public constructor(private props: CheckboxGroupFieldProps) {
    this.htmlElement = document.createElement('div');
    this.htmlLabelElement = document.createElement('label');
    this.htmlCheckboxContainer = document.createElement('div');

    this.initialize();
    this.renderView();
  }

  private renderOptionsView = (): void => {
    const { name, options, selectedValues } = this.props;

    const inputGroups = options.map(({ value, label }) => {
      const inputId = createId();

      const inputGroup = document.createElement('div');
      inputGroup.className = 'form-check';

      const inputLabel = document.createElement('label');
      inputLabel.className = 'form-check-label';
      inputLabel.setAttribute('for', inputId);
      inputLabel.innerHTML = label;

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'form-check-input';
      input.id = inputId;
      input.value = value;
      input.name = name;
      if (selectedValues && selectedValues.includes(value)) {
        input.checked = true;
      }

      inputGroup.append(
        input,
        inputLabel,
      );

      return inputGroup;
    });

    this.htmlCheckboxContainer.innerHTML = '';
    this.htmlCheckboxContainer.append(...inputGroups);
  };

  private initialize = (): void => {
    this.htmlCheckboxContainer.className = 'd-flex flex-column';

    this.htmlElement.append(
      this.htmlLabelElement,
      this.htmlCheckboxContainer,
    );
  };

  private renderView = (): void => {
    const { labelText } = this.props;

    this.htmlLabelElement.innerHTML = labelText;
    this.renderOptionsView();
  };

  public updateProps = (newProps: Partial<CheckboxGroupFieldProps>): void => {
    this.props = {
      ...this.props,
      ...newProps,
    };

    this.renderView();
  };
}

export default CheckboxGroupField;
