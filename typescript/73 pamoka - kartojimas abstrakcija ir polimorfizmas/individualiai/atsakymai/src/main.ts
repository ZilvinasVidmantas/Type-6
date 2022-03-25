import WorkPerson from './entities/work-person.js';
import SelfEmployedPerson from './entities/self-employed-person.js';
import BuisnessLicencePerson from './entities/business-license-person.js';
import Employee from './entities/employee.js';
import Job from './entities/job.js';

/*
  Šios praktikos tikslas įsisavinti abstrakcijos ir polimorfizmo žinias, naudojat abstrakčias
  klases.

  Turime 3 darbuotojų tipus:
    * self-employed-person - darbuotojas dirbantis pagal individualią veiklą, kuris gauna pinigus už
      išdirbtas valandas ir valandinį užmokestį;
    * work-person - žmogus kuri gauna atlygį vieną kart per mėnesį už kiekvieną darbo dieną
    * business-license-person - žmogus kuris gauna atlygį už atliktus darbus

  Klasių hierarchijos schema:
  +---------------------------------------------------------------------+
  |                                                                     |
  | SelfEmployedPerson    ↘                                             |
  |                         ↘                                           |
  | WorkPerson → → → → → → → → abstract Employee → → → abstract Person  |
  |                         ↗                                           |
  | BusinessLicensePerson ↗                                             |
  |                                                                     |
  +---------------------------------------------------------------------+

  Klasių schemos:
    --- abstract Person ---
      savybės:
        protected id: string;
        protected name: string;
        protected surname: string;

      metodai:
        public getPersonInfo = (): string
        public abstract toString(): string;
    ---

    --- abstract Employee extends Person ---
      metodai:
        public abstract calcPay(): number;
    ---

    --- Job ---
      savybės:
        private id: string;
        private finished: boolean = false;
        private payed: boolean = false;
        private dateFinished?: Date;

      metodai:
        public completeJob = (): void
        public setJobPayed = (): void
        public getPay = (): number
        public isFinished = (): boolean
        public isPayed = (): boolean
        public toString = (): string
    ---

    --- BuisnessLicencePerson extends Employee ---
      savybės:
        private jobs: Job[];

      metodai:
        public calcPay = (): number
        public override toString(): string
    ---

    --- SelfEmployedPerson extends Employee ---
      savybės:
        private hourPay: number;
        private hoursWorked: number;

      metodai:
        public calcPay = (): number
        public override toString(): string
    ---

    --- WorkPerson extends Employee ---
      savybės:
        private hourPay: number;
        private fullTimeEquivalent: number;

      metodai:
        public calcPay = (): number
        public override toString(): string
    ---

  Jūsų praktikos darbo esmė, sukurti abstrakčias klases, kurios įpareigotų vaikes klases
    implementuoti abstrakčius metodus. Kiekviena konkreti klasė (SelfEmployedPerson, WorkPerson ir
    BuisnessLicencePerson) turi savaip apskaičiuoti užmokestį:
      WorkPerson - pagal darbo dienas mėnesyje
      SelfEmployedPerson - pagal išdirbtas valandas
      BuisnessLicencePerson - pagal atliktus darbus (Job)

    Pavaizduokite teisingą klasių sudarymo ir algoritmų aprašymo veikimą:
      1. Atspausdinkite visus darbuotojus naudodami implementuota metodą toString()
      2. Atspausdinkite visų darbuotojų atlyginimus anudodami implementuotą metodą calcPay()
*/

const backendDeveloper = new WorkPerson({
  id: '25169845878',
  name: 'Apsas',
  surname: 'Revestenis',
  hourPay: 25,
  fullTimeEquivalent: 1,
});
const frontendDeveloper = new WorkPerson({
  id: '25167745878',
  name: 'Eventas',
  surname: 'Klikauskas',
  hourPay: 25,
  fullTimeEquivalent: 0.5,
});

const selfEmployed1 = new SelfEmployedPerson({
  id: '25169845878',
  name: 'Beribė',
  surname: 'Jūračka',
  hourPay: 25,
  hoursWorked: 10,
});
const selfEmployed2 = new SelfEmployedPerson({
  id: '25169145878',
  name: 'Fanalijus',
  surname: 'Analijus',
  hourPay: 10,
});

const designer = new BuisnessLicencePerson({
  id: '15169845878',
  name: 'Plunksytė',
  surname: 'Krupštytė',
});

const jobs = [
  new Job('Facebook adds', 200),
  new Job('Google adds', 700),
  new Job('Twitter adds', 400),
];

jobs[0].completeJob();
jobs[2].completeJob();

const marketingSpecialist = new BuisnessLicencePerson({
  id: '15169845878',
  name: 'Protenis',
  surname: 'Knistauskenis',
  jobs,
});

const employees: Employee[] = [
  backendDeveloper,
  frontendDeveloper,
  selfEmployed1,
  selfEmployed2,
  designer,
  marketingSpecialist,
];

console.group('1. Atspausdinkite visus darbuotojus');
employees.forEach((emp) => console.log(emp.toString()));
console.groupEnd();

console.group('2. Atspausdinkite visų darbuotojų atlyginimus');
employees.forEach((emp) => {
  console.log(emp.getPersonInfo());
  console.log(emp.calcPay());
});
console.groupEnd();
