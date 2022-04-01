import createId from '../helpers/create-id';

type TextFieldProps = {
  labelText: string,
  name: string
};

class TextField {
  public htmlElement: HTMLDivElement;

  private htmlLabelElement: HTMLLabelElement;

  private htmlInputElement: HTMLInputElement;

  public constructor(private props: TextFieldProps) {
    this.htmlElement = document.createElement('div');
    this.htmlLabelElement = document.createElement('label');
    this.htmlInputElement = document.createElement('input');

    this.initialize();
    this.renderView();
  }

  public initialize = (): void => {
    const fieldId = createId();
    this.htmlLabelElement.setAttribute('for', fieldId);

    this.htmlInputElement.type = 'text';
    this.htmlInputElement.className = 'form-control';
    this.htmlInputElement.id = fieldId;

    this.htmlElement.append(
      this.htmlLabelElement,
      this.htmlInputElement,
    );
  };

  public renderView = (): void => {
    const { labelText, name } = this.props;

    this.htmlLabelElement.innerHTML = labelText;
    this.htmlInputElement.name = name;
  };
}

export default TextField;
