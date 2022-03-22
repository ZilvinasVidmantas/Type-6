/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */

type Row = {
  [key: string]: string;
};

type Student = {
  name: string,
  surname: string,
  age: string,
  course: string,
};

type Car = {
  brand: string,
  model: string,
  year: string
};

// Type extends Row -> Bendrinis tipas Type [turi būti] Row
class Table<Type extends Row> {
  public htmlElement: HTMLTableElement;

  private data: Type[];

  public constructor(data: Type[]) {
    this.htmlElement = document.createElement('table');
    this.data = data;

    this.initialize();
  }

  private createHeaders = () => {
    const keys = Object.keys(this.data[0]);
    const headerElementsString = keys
      .map((key) => `<th scope="col">${key[0].toUpperCase() + key.slice(1)}</th>`)
      .join('');

    return headerElementsString;
  };

  private createBodyRows = () => {
    const keys = Object.keys(this.data[0]) as (keyof Type)[];

    const rowsString = this.data
      .map((rowData) => {
        const rowString = keys
          .map((key) => {
            const cell = `<td>${rowData[key]}</td>`;

            return cell;
          })
          .join('');

        return `<tr>${rowString}</tr>`;
      })
      .join('');
    return rowsString;
  };

  initialize = () => {
    this.htmlElement.className = 'table table-striped border';
    this.htmlElement.innerHTML = `
    <thead>
      <tr>
        ${this.createHeaders()}
      </tr>
    </thead>
    <tbody>
      ${this.createBodyRows()}
    </tbody>
    `;
  };
}

const students: Student[] = [
  {
    name: 'stud1', surname: 'surname1', age: '19', course: '1',
  },
  {
    name: 'stud2', surname: 'surname2', age: '20', course: '2',
  },
  {
    name: 'stud3', surname: 'surname3', age: '21', course: '3',
  },
  {
    name: 'stud4', surname: 'surname4', age: '28', course: '1',
  },
];

const cars: Car[] = [
  { brand: 'brand1', model: 'model1', year: '2010' },
  { brand: 'brand2', model: 'model2', year: '2010' },
  { brand: 'brand3', model: 'model3', year: '2010' },
  { brand: 'brand4', model: 'model4', year: '2010' },
];

const studentsTable = new Table(students);
const carTable = new Table(cars);

const rootElement = document.querySelector('#root') as HTMLDivElement;

rootElement.append(
  studentsTable.htmlElement,
  carTable.htmlElement,
);
