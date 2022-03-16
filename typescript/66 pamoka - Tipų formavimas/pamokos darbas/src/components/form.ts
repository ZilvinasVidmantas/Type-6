class Form {
  public htmlElement: HTMLFormElement;

  constructor() {
    this.htmlElement = document.createElement('form');

    this.format();
  }

  private format = (): void => {
    this.htmlElement.className = 'card p-3';
    this.htmlElement.style.width = '400px';
    this.htmlElement.innerHTML = `
      <h2 class="h3">Sukurti Produktą</h2>
      <div class="d-flex flex-column gap-2">
        <div>
          <label for="title" class="form-label">Title</label>
          <input type="title" class="form-control" id="title">
        </div>
        <div>
          <label for="description" class="form-label">Description</label>
          <input type="description" class="form-control" id="description">
        </div>
        <div>
          <label for="price" class="form-label">Price</label>
          <input type="price" class="form-control" id="price">
        </div>
        <div>
          <label for="category" class="form-label">Katerogija</label>
          <select class="form-select" id="category">
            <option selected>Nepasirinkta</option>
            <option value="1">Motininės plokštės</option>
            <option value="2">Operatyvi atmintis</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary mt-3 mb-2">Kurti</button>
      </div>`;
  };
}

export default Form;
