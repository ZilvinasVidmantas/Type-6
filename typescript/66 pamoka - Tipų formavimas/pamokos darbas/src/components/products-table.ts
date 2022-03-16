import Product from '../types/product.js';

class ProductsTable {
  private static tableColumns: string = ` 
  <tr>
    <th scope="col">#</th>
    <th scope="col">Title</th>
    <th scope="col">Description</th>
    <th scope="col">Price</th>
    <th scope="col">Type</th>
  </tr>`;

  private static createRowString = (product: Product): string => `
  <tr>
    <td>${product.id}</td>
    <td>${product.title}</td>
    <td>${product.description}</td>
    <td>${product.price}</td>
    <td>${product.type.name}</td>
  </tr>`;

  private tbodyHtmlElement: HTMLTableSectionElement;

  private theadHtmlElement: HTMLTableSectionElement;

  private data: Product[];

  private title: string;

  public htmlElement: HTMLTableElement;

  public constructor(data: Product[], title: string) {
    this.data = data;
    this.title = title;
    this.htmlElement = document.createElement('table');
    this.theadHtmlElement = document.createElement('thead');
    this.tbodyHtmlElement = document.createElement('tbody');

    this.format();
    this.update();
  }

  private format = (): void => {
    this.htmlElement.className = 'table border mb-0';
    this.htmlElement.appendChild(this.theadHtmlElement);
    this.htmlElement.appendChild(this.tbodyHtmlElement);
  };

  private updateHead = (): void => {
    this.theadHtmlElement.innerHTML = `
    <tr>
      <th colspan="5" class="text-center">${this.title}</th>
    </tr>
    ${ProductsTable.tableColumns}`;
  };

  private updateBody = (): void => {
    const rowsString: string = this.data.map(ProductsTable.createRowString).join('');

    this.tbodyHtmlElement.innerHTML = rowsString;
  };

  public update = (): void => {
    this.updateHead();
    this.updateBody();
  };

  public setData = (newData: Product[]): void => {
    this.data = newData;
  };

  public setTitle = (newTitle: string): void => {
    this.title = newTitle;
  };
}

export default ProductsTable;
