import createId from '../helpers/create-id';

type TextFieldProps = {
  labelText: string,
  name: string,
  value?: string,
};

class TextField {
  private htmlLabelElement: HTMLLabelElement;

  private htmlInputElement: HTMLInputElement;

  public htmlElement: HTMLDivElement;

  public constructor(private props: TextFieldProps) {
    this.htmlElement = document.createElement('div');
    this.htmlLabelElement = document.createElement('label');
    this.htmlInputElement = document.createElement('input');

    this.initialize();
    this.renderView();
  }

  private initialize = (): void => {
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

  private renderView = (): void => {
    const { labelText, name, value } = this.props;

    this.htmlLabelElement.innerHTML = labelText;
    this.htmlInputElement.name = name;
    if (value !== undefined) {
      this.htmlInputElement.value = value;
    }
  };

  public updateProps = (newProps: Partial<TextFieldProps>): void => {
    this.props = {
      ...this.props,
      ...newProps,
    };

    this.renderView();
  };
}

export default TextField;
