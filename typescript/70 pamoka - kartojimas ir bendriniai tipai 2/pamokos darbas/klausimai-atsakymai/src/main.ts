/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */

console.groupCollapsed('1. Kaip sukonkretinti tipą kuomet naudojama tipų sajungą');
{
  type UserId = number | string;

  const idsArrayMix: UserId[] = [1, 5, 'user-1', 5, 7, 'user-2'];
  const idsArrayStrings: string[] = ['user-1', 'user-2'];
  const idsArrayNumbers: number[] = [1, 5, 5, 7,];

  const userIdsArrCopy = <Type extends UserId>(ids: Type[]): Type[] => [...ids];

  const idsArrayMixCopy = userIdsArrCopy(idsArrayMix);

  const idsArrayStringsCopy = userIdsArrCopy(idsArrayStrings);

  const idsArrayNumbersCopy = userIdsArrCopy(idsArrayNumbers);

  console.log({
    idsArrayMix: [idsArrayMix, idsArrayMixCopy],
    idsArrayStrings: [idsArrayStrings, idsArrayStringsCopy],
    idsArrayNumbers: [idsArrayNumbers, idsArrayNumbersCopy],
  });
}
console.groupEnd();

console.groupCollapsed('2. Kaip kuriamos struktūros naudojančios bendrinius tipus?');
{
  type Person = {
    name: string,
    surname: string,
  }

  //          ↙↙↙↙↙ - Node tipui perduodamas parametras, kurį pavadiname DataType
  type Node<DataType> = {
    //            ↙↙↙↙↙ - Gauto tipo DataType panaudojimas 
    next?: Node<DataType>,
    //      ↙↙↙↙↙ - Gauto tipo DataType panaudojimas 
    data: DataType,
  }

  class List<DataType> {
    private head?: Node<DataType>;

    public push = (data: DataType) => {
      const newNode: Node<DataType> = { data };

      // Sąraše nėra elementų
      if (this.head === undefined) {
        this.head = newNode;
        return;
      }

      // Sąraše jau yra elementų
      let lastNode = this.head;
      while (lastNode.next !== undefined) lastNode = lastNode.next;
      lastNode.next = newNode;
    }
  }

  const numbersList: List<number> = new List();
  numbersList.push(1);
  numbersList.push(2);
  numbersList.push(3);
  numbersList.push(4);
  numbersList.push(5);

  const stringsList: List<string> = new List();
  stringsList.push('Labas');
  stringsList.push('vakaras');
  stringsList.push('ponai');
  stringsList.push('ir');
  stringsList.push('ponios');

  const peopleList: List<Person> = new List();
  peopleList.push({ name: 'vardenis1', surname: 'pavardenis1' });
  peopleList.push({ name: 'vardenis2', surname: 'pavardenis2' });
  peopleList.push({ name: 'vardenis3', surname: 'pavardenis3' });
  peopleList.push({ name: 'vardenis4', surname: 'pavardenis4' });
  peopleList.push({ name: 'vardenis5', surname: 'pavardenis5' });

  console.log(numbersList);
  console.log(stringsList);
  console.log(peopleList);
}
console.groupEnd();


console.groupCollapsed('3. Ką reiškia implements, extends?');
{
  /*
    implements - ką gali daryti? / funkcionalumo įgalinimas
      Naudojama kuriant bendrą funkcionalumą skirtingiems objektams, naudojant interface'us

    extends - kas tai yra? / apibūdinimas
      Naudojama klasių hierarchijoje - paveldimume
  */
  interface IMovable {
    coordinates: [number, number],
    setCoordinates: (newCoordinates: [number, number]) => void;
  }

  class Person implements IMovable {
    private name: string;
    private surname: string;

    public coordinates: [number, number];

    public constructor(name: string, surname: string) {
      this.name = name;
      this.surname = surname;
      this.coordinates = [0, 0];
    }

    public printFullname = (): void => {
      const { name, surname } = this;
      console.log(name, surname);
    }

    public setCoordinates = (newCoordinates: [number, number]) => {
      this.coordinates = newCoordinates;
    }
  }

  class Worker extends Person {
    private hourPay: number;

    constructor(name: string, surname: string, hourPay: number) {
      super(name, surname);

      this.hourPay = hourPay;
    }
  }

  class Student extends Person {
    private university: string;

    constructor(name: string, surname: string, university: string) {
      super(name, surname);

      this.university = university;
    }
  }

  const worker = new Worker('Darbuolis', 'Greituolis', 20);
  const student = new Student('Kalikas', 'Skalikas', 'VU');
  const person = new Person('Turėjas', 'SocialiniGyvenima');

  worker.printFullname();
  student.printFullname();
  person.printFullname();
}
console.groupEnd();

console.groupCollapsed('4. Kas yra ir kaip veikia <fetch>');
{
  /*
    fetch - tai funkcija kuri grąžina Promise
      Ši funkcija skirta tam, kad siųsti užklausas į kitus kompiuterius HTTP(s) protokolu 
  */

  const printTable = (data: any[]) => console.table(data);
  const handleError = (err: string | Error) => console.error(err);

  fetch('https://jsonplaceholder.typicode.com/todos', {
    
  })
    .then(res => res.json())
    .then(printTable)
    .catch(handleError);

  (async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await res.json();
      printTable(data);
    } catch (error) {
      handleError(error as Error);
    }
  })();

}
console.groupEnd();
