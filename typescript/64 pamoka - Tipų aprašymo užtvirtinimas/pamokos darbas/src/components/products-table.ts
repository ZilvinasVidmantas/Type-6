import Product from '../types/product.js';

class ProductsTable {
  static tableColumns: string = ` 
  <tr>
    <th scope="col">#</th>
    <th scope="col">Title</th>
    <th scope="col">Description</th>
    <th scope="col">Price</th>
    <th scope="col">Type</th>
  </tr>`;

  static createRowString = (product: Product): string => `
  <tr>
    <td>${product.id}</td>
    <td>${product.title}</td>
    <td>${product.description}</td>
    <td>${product.price}</td>
    <td>${product.type.name}</td>
  </tr>`;

  private data: Product[];

  private title: string;

  constructor(data: Product[], title: string) {
    this.data = data;
    this.title = title;
  }

  renderHead = (): string => `
  <thead>
    <tr>
      <th colspan="5" class="text-center">${this.title}</th>
    </tr>
    ${ProductsTable.tableColumns}
  </thead>`;

  renderBody = (): string => {
    const rows: string = this.data.map(ProductsTable.createRowString).join('');
    return `<tbody>${rows}</tbody>`;
  };

  render = (): HTMLTableElement => {
    const htmlTable = document.createElement('table');
    htmlTable.className = 'table';

    htmlTable.innerHTML = `
      ${this.renderHead()}
      ${this.renderBody()}
    `;
    return htmlTable;
  };
}

export default ProductsTable;
