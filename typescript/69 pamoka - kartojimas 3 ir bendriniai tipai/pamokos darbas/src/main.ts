/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */

console.groupCollapsed('1. Kas yra ir kaip veikia Partial<Type>?');
{
  type Person = {
    id: string,
    name: string,
    surname: string,
    biography?: string
  };

  type PersonPatch = Partial<Omit<Person, 'id'>>;

  const people: Person[] = [
    { id: '1', name: 'Kopčius', surname: 'Prakopimas' },
    {
      id: '2', name: 'Vanda', surname: 'Nežinaitė', biography: 'Esu viską nežinanti',
    },
    {
      id: '3', name: 'Romanas', surname: 'Knygauskas', biography: 'Mėgstu skaityti knygas',
    },
  ];

  const updatePerson = (id: string, data: PersonPatch): Person => {
    const foundPerson = people.find((p) => p.id === id);
    if (foundPerson === undefined) throw new Error(`Neras vartotojas su id: '${id}'`);

    const patchedPerson: Person = {
      ...foundPerson,
      ...data,
    };

    return patchedPerson;
  };

  const personId: string = '1';
  const personPatchData: PersonPatch = { biography: 'Kalnų naikintuvas' };

  console.table(people);
  console.log('updatePerson', {
    id: personId,
    data: personPatchData,
  });

  const updatedPerson = updatePerson(personId, personPatchData);
  console.log(updatedPerson);
}
console.groupEnd();

console.groupCollapsed('2. Kas yra  ir kaip naudojamos noniminės funkcijos?');
{
  // Anonimė funkcija, tai naujo funkcijos deklaravimas kviečiant kitą funkciją;

  // Iš anksto aprašyta funkcija
  const sumNumbersReducer = (currentTotal: number, number: number): number => currentTotal + number;

  const numbers: number[] = [1, 2, 3];

  const numberSum = numbers.reduce(sumNumbersReducer);
  //                                   ↙↙↙↙↙↙↙↙ Anoniminė funkcija ↘↘↘↘↘↘↘↘↘↘↘
  const numberSum2 = numbers.reduce((currentTotal, number) => currentTotal + number);

  console.log({
    numbers,
    numberSum,
    numberSum2,
  });
}
console.groupEnd();

console.groupCollapsed('3. OOP inkapsuliacija. Kaip ir kada naudoti?');
{
  /*
    Inkapsuliacija tai reikšmės/funkcijos pasiekiamumo ribojimas.

    Leidami programuotojams pasiekti reikšmę tiesiogiai (be ribojimų) rizikuojame,
    jog tai bus padaroma nekorektiškai.

    Inkapsuliacija padeda mums užtrikti ir suvaldyti reikšmių naudojimą/priskyrimą
  */

  class Person {
    public name: string;

    public surname: string;

    private age: number;

    public constructor(name: string, surname: string, age: number) {
      this.name = name;
      this.surname = surname;
      this.age = age;
    }

    // Funkcija, kuri inkapsuliuoja reikšmės gavimą
    public getAge = (): number => this.age;

    // Funkcija, kuri inkapsuliuoja reikšmės priskyrimą
    public setAge = (newAge: number): void => {
      if (newAge > 1500) {
        console.error('Eik peklon vampyre!');
        return;
      }
      if (newAge < 1) {
        console.error('Tu dar negimei');
        return;
      }

      this.age = newAge;
    };
  }

  const person1 = new Person('Kibiras', 'Dundauskas', 12);
  const person2 = new Person('Lempa', 'Daužaitė', 15);
  const people: Person[] = [
    person1,
    person2,
  ];

  // Nustatoma amžiaus savybė naudojant set'erius

  person1.setAge(16000);
  person1.setAge(16);
  person2.setAge(-55);
  // person2.setAge(1);

  console.table(people);
}
console.groupEnd();

console.groupCollapsed('4. OOP kompozicija. Kas tai yra?');
{
  /*
    Kompozicija tai viena iš objektiškai orientuoto programavimo (OOP) paradigmų.

    Kompozicija - tai ryžys tarp klasių, kuomet vienas iš klasės objektų priklauso kitam KITOS
    klasės objektui, pvz.:
      * Moduliai sudaro Programas
  */

  class Program {
    private static count = 0;

    private id: string;

    private title: string;

    private modules: Module[];

    public constructor(title: string) {
      Program.count += 1;

      this.id = `program-${Program.count}`;
      this.title = title;
      this.modules = [];
    }

    public addModule = (module: Module): void => {
      this.modules.push(module);
    };
  }

  class Module {
    private static count = 0;

    private id: string;

    private title: string;

    public constructor(title: string) {
      Module.count += 1;

      this.id = `module-${Module.count}`;
      this.title = title;
    }
  }

  // Programos, kurioms glai būti priskirti moduliai
  const tsFullstack = new Program('TypeScript fullstack');
  const feAdvanced = new Program('Front-end advanced');

  const moduleHTML = new Module('HTML');
  const moduleCSS = new Module('CSS');
  const moduleJS = new Module('JS');
  const moduleJSDom = new Module('JSDom');
  const moduleTSBasics = new Module('TSBasics');
  const moduleReact = new Module('React.js');
  const moduleVue = new Module('Vue.js');
  const moduleAngular = new Module('Angular.js');
  const moduleTSReact = new Module('TSReact');
  const moduleExpress = new Module('Express');
  const moduleTSExpress = new Module('TSExpress');

  // Programoms priskiriami moduliai
  tsFullstack.addModule(moduleHTML);
  tsFullstack.addModule(moduleCSS);
  tsFullstack.addModule(moduleJS);
  tsFullstack.addModule(moduleJSDom);
  tsFullstack.addModule(moduleTSBasics);
  tsFullstack.addModule(moduleReact);
  tsFullstack.addModule(moduleTSReact);
  tsFullstack.addModule(moduleExpress);
  tsFullstack.addModule(moduleTSExpress);

  feAdvanced.addModule(moduleHTML);
  feAdvanced.addModule(moduleCSS);
  feAdvanced.addModule(moduleJS);
  feAdvanced.addModule(moduleJSDom);
  feAdvanced.addModule(moduleReact);
  feAdvanced.addModule(moduleVue);
  feAdvanced.addModule(moduleAngular);

  console.log(tsFullstack);
  console.log(feAdvanced);
}
console.groupEnd();

console.groupCollapsed('x. ');
{
  /*

  */
}
console.groupEnd();

console.groupCollapsed('x. ');
{
  /*

  */
}
console.groupEnd();
