/* eslint-disable prefer-promise-reject-errors */
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

console.groupCollapsed('5. Kas yra Promise?');
{
  /*
    Promise tai asinchroniniam darbui aprašyti skirtas prototipas.
      * sinchroninis darbas - tai pilnas kompiuterio resursų naudojimas atlikti užduotims
      * asinchronimas darbas - tai darbas, kuriam atlikti reikia sulaukti 'atsakymų
        iš kitų programos sitemos dalių'

    Aprašant Promise'ą reikia perduoti funkcija, kuri atlieka asinchroninio darbo logiką
      * 1 parametras(resolve) - funkcija, kurią reikia iškviesti sėkmės atveju
      * 2 parametras(reject) - funkcija, kurią reikia iškviesti NEsekmės atveju

    Sukūrus naują Promise'ą JavaScript kodas, vykdo po apačia aprašytas komandas nelaukdamas
    Promise'o atsakymų. Todėl aprašant Promise'us turi apdoroti jo grąžinimo rezultatą su
    tokiais specialiais blokais:
      * then - aprodojamas sėkmingo Promiso'o atvejis
      * catch - aprodojamas NEsėkmingo Promiso'o atvejis

    Promise'as turi 3 būsenas:
      * pending - Promise'as laukia atsakymo
      * resolved - Promise'as įsivykdė sėkmingai
      * rejected - Promise'as įsivykdė NEsėkmingai
  */

  type User = {
    name: string,
    money: number,
  };

  type Product = {
    title: string,
    price: number
  };

  const bagotas: User = {
    name: 'Spnceris',
    money: 1000000,
  };

  const allProducts: Product[] = [
    { title: 'Peins', price: 0.89 },
    { title: 'Mersas', price: 90000 },
    { title: 'Paveikslamas', price: 499.99 },
  ];

  const intervalId = setInterval(() => {
    console.log('Laukiamas apmokėjimas');
  }, 100);

  //  Asinchroninio darbo atlikimas standartiniu būdu
  {
    const makePayment = (
      user: User,
      products: Product[],
    ): Promise<string> => new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.money > products.reduce((total, p) => total + p.price, 0)) {
          resolve('Sėkmingai atliktas pirkimas');
        } else {
          reject('NEsėkmingai atliktas pirkimas');
        }
      }, 2000);
    });

    // Fukcija kuri grąžina promise:
    makePayment(bagotas, allProducts)
      .then((successData) => {
        console.log('THEN BLOKAS');
        console.log(successData);
      })
      .catch((failureData) => {
        console.log('CATCH BLOKAS');
        console.error(failureData);
      })
      .finally(() => {
        console.log('FINALLY BLOKAS');
        clearInterval(intervalId);
      });
  }

  // Asinchronio darbo atlikimas su nauja asinchroninių fukcijų sitankse
  {
    const wait = (ms: number) => new Promise((res) => {
      setTimeout(() => res(true), ms);
    });
    // Asinchroninė funkcija yra sintetinis promiso kūrimas
    //                  ↘↘↘
    const makePayment = async (
      user: User,
      products: Product[],
    ): Promise<string> => {
      await wait(2000);
      if (user.money > products.reduce((total, p) => total + p.price, 0)) {
        return 'Sėkmingai atliktas pirkimas';
      }
      throw new Error('NEsėkmingai atliktas pirkimas');
    };
    // Asinchroninė funkcija tai - Fukcija kuri grąžina promise
    // !!!!!!! TIK ASICHRONINĖSE FUNKCIJOSE GALITE RAŠYTI DIREKTYVĄ <await> !!!!!!!!!!!

    // IFFE - Imediatly invoked function expresssion
    /*
      Kodas naršyklės JavaScript faile vykdomas sinchroniškai, tačiau kartais mum reikia jį
      vykdyti asinchroniškai, tam galime sukurti anoniminę asinchroninę fukciją
      kurti iškarto yra iškviečiama. Tokios funkcijos bloke, galime rašyti Promise'ų
      sulaukimo logiką naudojant naują sintaksę
    */
    (async () => {
      try {
        const successData = await makePayment(bagotas, allProducts);
        console.log('THEN BLOKAS');
        console.log(successData);
      } catch (failureData) {
        console.log('CATCH BLOKAS');
        console.error(failureData);
      } finally {
        console.log('FINALLY BLOKAS');
        clearInterval(intervalId);
      }
    })();
  }

  /*
    Asinchroninė funkcija yra užrašyta deklaratyviu kodo rašymo stiliumi,
    kas didina kodo skaitomumą ir padeda lengviau suprasti asinchroninių operacijų logiką
      * https://miro.medium.com/max/1276/0*GLhhuxHI3I0tnvdN
      * https://miro.medium.com/max/721/1*zxx4iQAG4HilOIQqDKpxJw.jpeg
  */
}
console.groupEnd();
