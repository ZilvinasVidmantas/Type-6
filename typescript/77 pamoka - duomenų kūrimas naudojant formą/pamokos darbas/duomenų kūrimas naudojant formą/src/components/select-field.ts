type SelectOption = {
  title: string,
  value: string,
};

type SelectFieldProps = {
  options: SelectOption[],
  onChange: (value: string) => void
};

class SelectField {
  public htmlElement: HTMLDivElement;

  private htmlSelect: HTMLSelectElement;

  public constructor(private props: SelectFieldProps) {
    this.htmlElement = document.createElement('div');
    this.htmlSelect = document.createElement('select');

    this.initialize();
    this.renderView();
  }

  private initialize = (): void => {
    this.htmlSelect.id = 'select';
    this.htmlSelect.className = 'form-select';

    this.htmlElement.innerHTML = '<label for="select" class="form-label">Produktų kategorija</label>';

    this.htmlElement.append(this.htmlSelect);
  };

  private renderView = (): void => {
    const { options, onChange } = this.props;

    this.htmlSelect.innerHTML = options
      .map(({ title, value }) => `<option value="${value}">${title}</option>`)
      .join('');

    this.htmlSelect.addEventListener('change', () => onChange(this.htmlSelect.value));
  };
}

export default SelectField;
