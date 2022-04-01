import countObjectProperties from '../helpers/count-object-properties';

type RowData = {
  id: string,
  [key: string]: string,
};

export type TableProps<Type> = {
  title: string,
  columns: Type,
  rowsData: Type[],
  editedRowId: string | null,
  onDelete: (id: string) => void,
  onEdit: (id: string) => void,
};

class Table<Type extends RowData> {
  public htmlElement: HTMLTableElement;

  private tbody: HTMLTableSectionElement;

  private thead: HTMLTableSectionElement;

  public constructor(private props: TableProps<Type>) {
    this.checkColumnsCompatability();

    this.htmlElement = document.createElement('table');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');

    this.initialize();
    this.renderView();
  }

  private checkColumnsCompatability = (): void => {
    const { rowsData, columns } = this.props;

    if (this.props.rowsData.length === 0) return;
    const columnCount = countObjectProperties(columns);

    const columnsCompatableWithRowsData = rowsData.every((row) => {
      const rowCellsCount = countObjectProperties(row);

      return rowCellsCount <= columnCount;
    });

    if (!columnsCompatableWithRowsData) {
      throw new Error('Nesutampa lentelės stulpelių skaičius su eilučių stulpelių skaičiumi');
    }
  };

  private initialize = (): void => {
    this.htmlElement.className = 'table table-striped order border p-3';
    this.htmlElement.append(
      this.thead,
      this.tbody,
    );
  };

  private renderHeadView = (): void => {
    const { title, columns } = this.props;

    const headersArray = Object.values(columns);
    const headersRowHtmlString = headersArray.map((header) => `<th>${header}</th>`).join('');

    this.thead.innerHTML = `
      <tr>
        <th colspan="${headersArray.length}" class="text-center h3">${title}</th>
      </tr>
      <tr>${headersRowHtmlString}</tr>
    `;
  };

  private appendActionsCell = (tr: HTMLTableRowElement, id: string) => {
    const { editedRowId, onDelete, onEdit } = this.props;

    const td = document.createElement('td');
    td.className = 'd-flex gap-2 justify-content-end';

    const btnEdit = document.createElement('button');
    btnEdit.style.width = '80px';
    btnEdit.className = `btn btn-${editedRowId === id ? 'secondary' : 'warning'}`;
    btnEdit.type = 'button';
    btnEdit.innerHTML = editedRowId === id ? 'Cancel' : 'Update';
    btnEdit.addEventListener('click', () => onEdit(id));

    const btnDelete = document.createElement('button');
    btnDelete.className = 'btn btn-danger';
    btnDelete.type = 'button';
    btnDelete.innerHTML = 'Delete';
    btnDelete.addEventListener('click', () => onDelete(id));

    td.append(btnEdit, btnDelete);
    tr.append(td);
  };

  private renderBodyView = (): void => {
    const { rowsData, columns, editedRowId } = this.props;

    this.tbody.innerHTML = '';
    const rowsHtmlElements = rowsData
      .map((rowData) => {
        const tr = document.createElement('tr');
        if (rowData.id === editedRowId) {
          tr.style.backgroundColor = '#fffcd9';
        }

        const cellsHtmlString = Object.keys(columns)
          .map((key) => `<td>${rowData[key] ?? '---'}</td>`)
          .join(' ');

        tr.innerHTML = cellsHtmlString;

        this.appendActionsCell(tr, rowData.id);

        return tr;
      });

    this.tbody.append(...rowsHtmlElements);
  };

  private renderView = (): void => {
    this.renderHeadView();
    this.renderBodyView();
  };

  public updateProps = (newProps: Partial<TableProps<Type>>): void => {
    this.props = {
      ...this.props,
      ...newProps,
    };

    this.renderView();
  };
}

export default Table;
