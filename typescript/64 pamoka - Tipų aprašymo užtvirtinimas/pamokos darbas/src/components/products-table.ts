import Product from '../types/product.js';

class ProductsTable {
  static header = `
  <thead>
    <tr>
      <th colspan="5" class="text-center">Lentelės pavadinimas</th>
    </tr>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Type</th>
    </tr>
  </thead>`;

  static createRowString = (product: Product) => `
  <tr>
    <td>${product.id}</td>
    <td>${product.title}</td>
    <td>${product.description}</td>
    <td>${product.price}</td>
    <td>${product.type.name}</td>
  </tr>`;

  private data: Product[];

  constructor(data: Product[]) {
    this.data = data;
  }

  renderBody = () => {
    const rows: string = this.data.map(ProductsTable.createRowString).join('');
    return `<tbody>${rows}</tbody>`;
  };

  render = (): HTMLTableElement => {
    const htmlTable = document.createElement('table');
    htmlTable.className = 'table';

    htmlTable.innerHTML = `
      ${ProductsTable.header}
      ${this.renderBody()}
    `;
    return htmlTable;
  };
}

export default ProductsTable;
