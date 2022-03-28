/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-empty */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */

console.groupCollapsed('1. Kaip veikia String.prototype.repeat');
{
  type Person = {
    name: string,
    surname: string,
    age: string,
    height: string,
  };

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

  // !!! Papildomai: Išskaidyti funkciją atskiromis funkcijomis arba sukurti atskirą klasę !!!
  const printTable = <Type extends { [key: string]: string }>(rows: Type[]): void => {
    type TypeColWidths = {
      [Key in keyof Type]: number
    };

    console.table(rows);

    type PartialTypeColWidths = Partial<TypeColWidths>;

    const colWidths: TypeColWidths = [
      ...rows.map((row) => {
        const rowColWidths = Object.entries(row)
          .reduce<PartialTypeColWidths>((result, [key, value]) => ({
            ...result,
            [key]: value.length,
          }), {}) as TypeColWidths;

        return rowColWidths;
      }),
      Object.keys(rows[0])
        .reduce<PartialTypeColWidths>((result, key) => ({
          ...result,
          [key]: key.length,
        }), {}) as TypeColWidths,
    ].reduce((prevColWidths, rowColWidths) => {
      const newColWidths = { ...prevColWidths };
      Object.entries(rowColWidths).forEach(([colName, colWidth]) => {
        if (colWidth > prevColWidths[colName]) {
          newColWidths[colName as keyof TypeColWidths] = colWidth;
        }
      });

      return newColWidths;
    });

    const colWidthsArr = Object.values(colWidths);
    const columnCount = colWidthsArr.length;
    const tableWidth = 3 * columnCount + 1 + colWidthsArr
      .reduce((colsWidth, colWidth) => colsWidth + colWidth);
    const line = `+${'-'.repeat(tableWidth - 2)}+`;

    let headerRow = '|';

    Object.keys(rows[0]).forEach((columnName) => {
      const columnWidth = colWidths[columnName];
      const additionalSpace = ' '.repeat(columnWidth - columnName.length);

      headerRow += ` ${columnName[0].toUpperCase() + columnName.slice(1)}${additionalSpace} |`;
    });

    console.log(line);
    console.log(headerRow);
    console.log(line);

    rows.forEach((row) => {
      let rowStr = '|';
      Object.keys(row).forEach((key) => {
        const colValue = row[key];
        const columnWidth = colWidths[key];
        const additionalSpace = ' '.repeat(columnWidth - colValue.length);

        rowStr += ` ${colValue[0].toUpperCase() + colValue.slice(1)}${additionalSpace} |`;
      });

      console.log(rowStr);
    });

    console.log(line);
  };

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

console.groupCollapsed('2 - Uždavinio sprendimas. "recursion-tasks.js"\n\t 3. Atspausdinti failu struktūrą naudojant rekursiją');
{
  type FileStructure = File | Folder;

  type File = {
    type: 'file',
    name: string,
  };

  type Folder = {
    type: 'folder',
    name: string,
    files: (FileStructure)[]
  };

  const myFolder: Folder = {
    type: 'folder',
    name: 'Javascript kursai',
    files: [
      {
        type: 'file',
        name: 'komandos.txt',
      },
      {
        type: 'folder',
        name: '1 savaitė',
        files: [
          {
            type: 'folder',
            name: '1 pamoka',
            files: [
              {
                type: 'file',
                name: 'index.html',
              },
              {
                type: 'file',
                name: 'main.css',
              },
            ],
          },
          {
            type: 'folder',
            name: '2 pamoka',
            files: [
              {
                type: 'file',
                name: 'index.html',
              },
            ],
          },
        ],
      },
    ],
  };
  function printFiles(fileStructure: FileStructure, prefix = '') {
    // Baigtinė rekursijos salyga
    if (fileStructure.type === 'file') {
      console.log(prefix + fileStructure.name);
      return;
    }
    console.log(`${prefix + fileStructure.name} /`);
    fileStructure.files.forEach((child) => {
      // Kviečiama ta pati funkcija su visais vaikais
      printFiles(child, `${prefix}  `);
    });
  }
  printFiles(myFolder);
  // Javascript kursai
  // --file
  // --folder /
  // ----1 pamoka /
  // ------index.html
  // ------main.css
  // ----2 pamoka /
  // ------index.html
  //
}
console.groupEnd();

console.group('3 - Uždavinio sprendimas. "recursion-tasks.js"\n\t 4. Parašyti funkciją, kuri surastų objektuose arba masyvuose visas skaitines reikšmes, ir jas sudėtų');
{
  type NumericType = number | NumericType[] | {
    [key: string]: NumericType
  };

  const data1 = [
    1,
    5,
    [
      4,
      5,
      9,
      {
        q: 7,
        z: [4, 8, 9],
      },
    ],
    8,
    {
      a: 7,
      b: 9,
      h: [
        4,
        5,
        {
          j: 7,
          p: 8,
          z: [7, 7, 7],
        },
      ],
    },
  ];

  function sumNumbers(...data: NumericType[]): number {
    return data.reduce<number>((sum, el) => {
      if (el instanceof Array) {
        return sum + sumNumbers(...el);
      }

      if (typeof el === 'object') {
        return sum + sumNumbers(...Object.values(el));
      }

      return sum + el;
    }, 0);
  }

  console.log(sumNumbers(7));
  console.log(sumNumbers(7, 7));
  console.log(sumNumbers([1, 2], 3));
  console.log(sumNumbers([1, [2, 3]], [4, 5]));
  console.log(sumNumbers({ a: 7, b: { c: 4, d: 8, e: [1, 2] } }));
  console.log(sumNumbers(data1));
}
console.groupEnd();
