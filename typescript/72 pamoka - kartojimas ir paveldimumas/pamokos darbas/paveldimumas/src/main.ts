/* eslint-disable no-lone-blocks */
import Person from './person.js';
import Student from './student.js';
import Employee from './employee.js';

const people: Person[] = [
  new Person({
    name: 'Kibiras',
    surname: 'Kiauraitis',
    year: 1995,
    month: 5,
    day: 17,
  }),
  new Person({
    name: 'Sabanta',
    surname: 'Belinaitė',
    year: 1999,
    month: 1,
    day: 12,
  }),
  new Person({
    name: 'Jovalas',
    surname: 'Jobanas',
    year: 1981,
    month: 4,
    day: 27,
  }),
  new Person({
    name: 'Surikas',
    surname: 'Ackarikas',
    year: 2002,
    month: 9,
    day: 12,
  }),
];

const students: Student[] = [
  new Student({ course: 1, universityTitle: 'VU' }, {
    name: 'Studvardas1',
    surname: 'Pavardis1',
    year: 1985,
    month: 5,
    day: 17,
  }),
  new Student({ course: 2, universityTitle: 'VDU' }, {
    name: 'Studvardas2',
    surname: 'Pavardis2',
    year: 1991,
    month: 1,
    day: 12,
  }),
  new Student({ course: 1, universityTitle: 'KTU' }, {
    name: 'Studvardas3',
    surname: 'Pavardis3',
    year: 1991,
    month: 4,
    day: 27,
    zodiak: 'Fish',
  }),
  new Student({ course: 3, universityTitle: 'ISM' }, {
    name: 'Studvardas4',
    surname: 'Pavardis4',
    year: 2007,
    month: 9,
    day: 12,
  }),
];

const employees: Employee[] = [
  new Employee({ salary: 1000 }, {
    name: 'Dėstytuvas1',
    surname: 'Kalikas1',
    year: 1985,
    month: 5,
    day: 17,
  }),
  new Employee({ salary: 2000 }, {
    name: 'Dėstytuvas2',
    surname: 'Kalikas2',
    year: 1989,
    month: 1,
    day: 12,
  }),
  new Employee({ salary: 1000 }, {
    name: 'Dėstytuvas3',
    surname: 'Kalikas3',
    year: 1971,
    month: 4,
    day: 27,
  }),
  new Employee({ salary: 3000 }, {
    name: 'Dėstytuvas4',
    surname: 'Kalikas4',
    year: 1992,
    month: 9,
    day: 12,
  }),
];

console.group('Paveldimos klasės metodų naudojimas');
{
  console.log('Žmonių amžiai');
  people.forEach((p) => console.log(p.getAge()));
  console.log('Studentų amžiai');
  students.forEach((p) => console.log(p.getAge()));
  console.log('Darbuotojų amžiai');
  employees.forEach((p) => console.log(p.getAge()));
}
console.groupEnd();

console.group('Paveldinčių klasių metodai, kurie naudoja tėvinės klases protected savybes');
{
  console.log('Studentų prisistatymai');
  students.forEach((s) => s.introduce());
  console.log('Darbuotojų prisistatymai');
  employees.forEach((e) => e.introduce());
}
console.groupEnd();
