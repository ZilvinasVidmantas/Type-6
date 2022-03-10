type Module = {
  id: string,
  title: string,
  marks: number[],
};

type Semester = {
  id: string,
  title: number,
  modules: Module[],
};

type Student = {
  id: string,
  name: string,
  surname: string,
  course: number,
  hasTakenGapYear: boolean,
  semesters?: Semester[],
};

const allStudents: Student[] = [
  {
    id: '1',
    name: 'Serbentautas',
    surname: 'Bordiūras',
    course: 2,
    hasTakenGapYear: false,
    semesters: [
      {
        id: '1',
        title: 1,
        modules: [
          {
            id: '1',
            title: 'Šonaslydis',
            marks: [9, 10, 9, 8],
          },
          {
            id: '2',
            title: 'Pandagų inspekcijos inžinerija',
            marks: [7, 8, 8, 8, 7],
          },
        ],
      },
      {
        id: '2',
        title: 2,
        modules: [
          {
            id: '3',
            title: 'Matorų čipavimas',
            marks: [6, 6, 5, 5],
          },
        ],
      },
      {
        id: '3',
        title: 3,
        modules: [
          {
            id: '4',
            title: 'Langų valymas',
            marks: [10, 10, 10, 10],
          },
          {
            id: '5',
            title: 'Juodoji buhalterija',
            marks: [9, 8, 10, 7, 7],
          },
        ],
      },
    ],
  },
  {
    id: '9',
    name: 'Fanalas',
    surname: 'Bamblys',
    course: 1,
    hasTakenGapYear: false,
  },
];

const tableBodySelector = '#students-table>tbody';
const tableBody = document.querySelector<HTMLTableElement>(tableBodySelector);

if (!tableBody) {
  throw new Error(`Table with selector '${tableBodySelector}' was not found`);
}

const createStudentRowString = ({
  id,
  name,
  surname,
  course,
  hasTakenGapYear,
}: Student): string => `
  <tr>
    <th scope="row">${id}</th>
    <td>${name}</td>
    <td>${surname}</td>
    <td>${course}</td>
    <td>${hasTakenGapYear ? 'Yes' : 'No'}</td>
  </tr>`;

const displayStudents = (students: Student[]): void => {
  tableBody.innerHTML = '';
  students.forEach((x) => {
    const rowString = createStudentRowString(x);
    tableBody.innerHTML += rowString;
  });
};

displayStudents(allStudents);
