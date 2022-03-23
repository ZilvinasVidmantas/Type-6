/* eslint-disable no-empty */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */

console.group('1. Kas yra ir kaip naudojami tipų aibės siaurinimai');
{
  /*
    Type-guard - tai funkcija, kuri patikrina ar kintamasis yra TypeScript tipas,
    šalia to, jog grąžinamas boolean kintamasis (pasakantis ar perduotas kintamsis yra norimo tipo)
    yra sumažinama tikrinto kintamojo tipų aibė. Kitaip tariant - tipas susiaurinamas.

    Panagrinėkime atvejį, kuriame siaurinsime primityvius tipus
  */
  console.group('1.1 Primityvių tipų siaurinimas');
  {
    type Id = string | number;

    const printId = (id: Id): void => {
      if (typeof id === 'string') {
        // if-then block'e id tipas yra string'as, nes tai patikrinome if-salygoje
        console.log('id yra string\'as', id);
      } else {
        // if-else block'e id bus number, nes iš tipų aibės <Id> buvo atmestas string
        console.log('id yra number\'is', id);
      }
    };

    printId('stringas');
    printId(77);
  }
  console.groupEnd();

  console.group('1.2 Klasių siaurinimas');
  {
    /*
      Turime tris klases.
      Klasės aprašomos TypeScript'e gali būt naudojamos kaip šablonas objektams kurti,
      bet tuo pačiu gali būti naudojamos kaip tipai.
    */
    class Bird {
      private melody: string;

      constructor(melody: string) {
        this.melody = melody;
      }

      singSong = (): void => console.log('Paukštis dainuoja taip:', this.melody);
    }

    class Cat {
      private meowSound: string;

      constructor(meowSound: string) {
        this.meowSound = meowSound;
      }

      sayMeow = (): void => console.log('Katė miaukia taip:', this.meowSound);
    }

    class Dog {
      private woofSound: string;

      constructor(woofSound: string) {
        this.woofSound = woofSound;
      }

      sayWoof = (): void => console.log('Šuo loja taip:', this.woofSound);
    }

    const makeSound = (animal: Dog | Cat | Bird): void => {
      if (animal instanceof Dog) {
        animal.sayWoof();
        return;
      }

      if (animal instanceof Cat) {
        animal.sayMeow();
        return;
      }

      animal.singSong();
    };

    makeSound(new Cat('Me-ouww'));
    makeSound(new Dog('Woof woof'));
    makeSound(new Bird('Užsidaryk langą jei nori miego'));
  }
  console.groupEnd();

  console.group('1.3 Tipų siaurinimas naudojant type-guard`us');
  {
    /*
      Turime tris tipus.
      Tipų patikrinti su JavaScript mes negalime. Todėl reikia rašyti specialias funkcijas
      vadinamas type-guard susiaurinti tipams.

      type-guard'ai grąžina Predicate(prielaidą):
        <kintamasis> is <Tipas>

      Prielaida (Predicate) "<kintamasis> is <Tipas>" yra boolean reikšmė, tačiau priklausomai
      nuo bollean reikšmės yra susiaurinamas tipas. Funkcijai grąžinus:
        * true - atliekamas tikrinto kintamojo <kintamasis> konvertavimas į tipą <Tipas>
        * false - iš <kintamasis> tipų aibės pašalinamas <Tipas>
    */

    type Bird = {
      singSong: (sound: string) => void
    };
    type Cat = {
      sayMeow: (sound: string) => void
    };
    type Dog = {
      sayWoof: (sound: string) => void
    };

    // Katės type-guard
    const isCat = (animal: Dog | Cat | Bird): animal is Cat => {
      const potentialCat = animal as Cat;
      const hasCatMethod = potentialCat.sayMeow !== undefined;

      return hasCatMethod;
    };

    // Šuns type-guard
    const isDog = (animal: Dog | Cat | Bird): animal is Dog => {
      const potentialDog = animal as Dog;
      const hasDogMethod = potentialDog.sayWoof !== undefined;

      return hasDogMethod;
    };

    const bird1: Bird = {
      singSong: (sound) => console.log('Paukštis dainuoja taip:', sound),
    };

    const cat1: Cat = {
      sayMeow: (sound) => console.log('Katė miaukia taip:', sound),
    };

    const dog1: Dog = {
      sayWoof: (sound) => console.log('Šuo loja taip:', sound),
    };

    const makeSound = (animal: Dog | Cat | Bird): void => {
      if (isCat(animal)) {
        animal.sayMeow('Meow');
        return;
      }

      if (isDog(animal)) {
        animal.sayWoof('Bark Bark');
        return;
      }

      animal.singSong('Kelkis abugeli!');
    };

    makeSound(cat1);
    makeSound(bird1);
    makeSound(dog1);
  }
  console.groupEnd();
}
console.groupEnd();

console.group('2. Array.prototype.concat');
{
  const numbers: (number | string)[] = [1, 2, 3];
  const strings = ['one', 'two', 'three'];

  const mixed = numbers.concat(strings, 7, ['abc']);

  console.log(mixed);
  console.log(numbers);
}
console.groupEnd();
