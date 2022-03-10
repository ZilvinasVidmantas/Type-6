type Student = {
  name: string,
  surname: string,
  course: number,
  hasTakenGapYear: boolean,
};

type Module = {
  id: string,
  title: string,
  marks: number[],
};

type Semester = {
  id: string,
  title: string,
  modules: Module[],
};

const students: Student[] = [
  {
    name: 'Serbentautas',
    surname: 'Bordiūras',
    course: 2,
    hasTakenGapYear: false,
  },
  {
    name: 'Valorija',
    surname: 'Gutpėda',
    course: 3,
    hasTakenGapYear: true,
  },
  {
    name: 'Fanalas',
    surname: 'Bamblys',
    course: 1,
    hasTakenGapYear: false,
  },
];
