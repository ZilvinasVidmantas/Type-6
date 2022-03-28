/* eslint-disable no-inner-declarations */
/* eslint-disable no-empty */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */

console.group('1. Kaip veikia String.prototype.repeat');
{
  type Person = {
    name: string,
    surname: string,
    age: string,
    height: string,
  }


  /*
  +---------------------------------------+
  | Name       | Surname   | Age | Height |
  +---------------------------------------+
  | Mauricijus | Markvicas | 20  | 174    |
  | Mauricijus | Markvicas | 20  | 174    |
  | Mauricijus | Markvicas | 20  | 174    |
  | Mauricijus | Markvicas | 20  | 174    |
  +---------------------------------------+
  */

  // !!! Užduotis tiems, kas nori: Išskaidyti funkciją atskiromis funkcijomis, arba sukurti klasę StringifiedTable !!!
  const printTable = <Type extends { [key: string]: string }>(rows: Type[]): void => {
    type TypeColWidths = {
      [Key in keyof Type]: number
    }

    console.table(rows);

    type PartialTypeColWidths = Partial<TypeColWidths>;

    const colWidths: TypeColWidths = [
      ...rows.map(row => {
        const rowColWidths = Object.entries(row)
          .reduce<PartialTypeColWidths>((result, [key, value]) => ({
            ...result,
            [key]: value.length
          }), {}) as TypeColWidths;
        return rowColWidths
      }),
      Object.keys(rows[0])
        .reduce<PartialTypeColWidths>((result, key) => ({
          ...result,
          [key]: key.length,
        }), {}) as TypeColWidths
    ].reduce((prevColWidths, rowColWidths) => {

      Object.entries(rowColWidths).forEach(([colName, colWidth]) => {
        if (colWidth > prevColWidths[colName]) {
          prevColWidths[colName as keyof TypeColWidths] = colWidth;
        }
      });

      return prevColWidths;
    });

    const colWidthsArr = Object.values(colWidths);
    const columnCount = colWidthsArr.length;
    const tableWidth = 3 * columnCount + 1 + colWidthsArr.reduce((colsWidth, colWidth) => colsWidth + colWidth);
    const line = `+${'-'.repeat(tableWidth - 2)}+`;

    let headerRow = '|'

    Object.keys(rows[0]).forEach(columnName => {
      const columnWidth = colWidths[columnName];
      const additionalSpace = ' '.repeat(columnWidth - columnName.length);

      headerRow += ` ${columnName[0].toUpperCase() + columnName.slice(1)}${additionalSpace} |`;
    });

    console.log(line);
    console.log(headerRow);
    console.log(line);

    rows.forEach(row => {
      let rowStr = '|';
      Object.keys(row).forEach(key => {
        const colValue = row[key];
        const columnWidth = colWidths[key];
        const additionalSpace = ' '.repeat(columnWidth - colValue.length);

        rowStr += ` ${colValue[0].toUpperCase() + colValue.slice(1)}${additionalSpace} |`;
      });

      console.log(rowStr);
    });

    console.log(line);
  }

  const people: Person[] = [{
    name: 'Mauricijus',
    surname: 'Markvicas',
    age: '20',
    height: '174',
  }, {
    name: 'Bokalas',
    surname: 'Baundulu',
    age: '18',
    height: '185',
  }, {
    name: 'Fanalas',
    surname: 'Figaras',
    age: '21',
    height: '192',
  }, {
    name: 'Stalažas',
    surname: 'Danas',
    age: '49',
    height: '168',
  }];

  printTable(people);

}
console.groupEnd();
