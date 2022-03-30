type SelectOption = {
  title: string,
  value: string,
};

class SelectField {
  public htmlElement: HTMLDivElement;

  private options: SelectOption[];

  public constructor(options: SelectOption[]) {
    this.options = options;
    this.htmlElement = document.createElement('div');

    this.initialize();
  }

  private initialize = () => {
    this.htmlElement.innerHTML = `
    <label for="select" class="form-label">Produktų kategorija</label>
    <select id="select" class="form-select">
      ${this.options
        .map(({ title, value }) => `<option value="${value}">${title}</option>`)
        .join('')}
    </select>`;
  };
}

export default SelectField;
