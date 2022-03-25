/* eslint-disable no-inner-declarations */
/* eslint-disable no-empty */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */

console.group('1. Destrukturizacija');
{
  /*
    Destrūkturizacija - tai struktūros skaidymas. JavsScript kalboje, destrūkturizuojami yra
    objektai ir masyvai.
  */

  console.group('1.1 Objektų destrūkturizacija');
  {
    /*
    Objekto destrūkturizacija.
    Aprašius objektą, galime destrūkturizuoti jo savybes ir iškarto pagal savybių pavadinimus
    sukurti kintamuosius toje aplinkoje, kurioje buvo atlikta destrūkturizacija.

    naudodami person objektą, kuriame kintamuosius destrūkturizuojamoje aplinkoje
    const { name, surname } = person;
  */

    type Person = {
      name: string,
      surname: string,
      personalityType: string,
      hairColor: string,
      age: number,
      height: number,
      weight: number,
    };

    const person1: Person = {
      name: 'Vezurijus',
      surname: 'Picauskas',
      personalityType: 'Cancer',
      hairColor: 'Blond',
      age: 17,
      height: 180,
      weight: 80,
    };

    const person2: Person = {
      name: 'Alyvuogė',
      surname: 'Juodoji',
      personalityType: 'Good',
      hairColor: 'Blond',
      age: 30,
      height: 170,
      weight: 75,
    };

    console.group('1.1.1 Objekto savybių destrūkturizacija ');
    {
      // Destruktūrizuojamas pirmasis funkcijos 'greetPerson', sukuriant kintamuosius name ir
      // surname funkcijos vykdymo aplinkoje(scope)
      function greetPerson({ name, surname }: Person, greeting = 'Labas'): void {
        console.log(`${greeting} ${name} ${surname}`);
      }

      greetPerson(person1);
      greetPerson(person2);
    }
    console.groupEnd();

    console.group('1.1.2 Objekto ...rest operatorius ');
    {
      //                                             ...likusių savybių objektas
      function printAnonymousPerson({ name, surname, ...anonymousProps }: Person): void {
        console.log(anonymousProps);
      }

      printAnonymousPerson(person1);
      printAnonymousPerson(person2);
    }
    console.groupEnd();

    console.group('1.1.3 Objekto shallow kopija ');
    {
      // SEKLI KOPIJA (shallow copy)
      // sukuriamas naujas objektas person1Twin, kuriame išrašomos visos person1 savybės
      const person1Twin: Person = { ...person1 };
      // const person1Twin: Person = {
      //   name: person1.name,
      //   surname: person1.surname,
      //   personalityType: person1.personalityType,
      //   hairColor: person1.hairColor,
      //   age: person1.age,
      //   height: person1.height,
      //   weight: person1.weight,
      // };

      // person1.name = 'PAKEISTA';
      console.log(person1Twin);
    }
    console.groupEnd();

    console.group('1.1.4 savybių pervadinimas destrūkturizuojant');
    {
      const { name: firstName, surname: lastName } = person1;
      // const firstName = person1.name;
      // const lastName = person1.surname;

      console.log({ person1, firstName, lastName });
    }
    console.groupEnd();

    console.group('1.1.5 Kompleksinė destrūkturizacija (nested destructurization)');
    {
      const auth = {
        user: {
          email: 'adminas@gmail.com',
          privileges: {
            canEdit: true,
            canDelete: true,
            canRead: true,
            canCreate: true,
          },
        },
        loggedIn: true,
        loogedInTime: '2022-03-02:16:14:22',
      };

      /*
        Jums reikia:
          * email
          * loggedIn
          * canRead
          * canCreate
      */

      // Primityvus būdas
      // const email = auth.user.email;
      // const loggedIn = auth.loggedIn;
      // const canRead = auth.user.privileges.canRead;
      // const canCreate = auth.user.privileges.canCreate;

      // 1 lygio destrūkturizacija
      // const { email } = auth.user;
      // const { loggedIn } = auth;
      // const { canRead, canCreate } = auth.user.privileges;

      // kompleksinė (nested) destrūkturizacija
      const {
        loggedIn,
        user: {
          email,
          privileges: { canRead, canCreate },
        },
      } = auth;

      console.log({
        loggedIn,
        email,
        canRead,
        canCreate,
      });
    }
    console.groupEnd();
  }
  console.groupEnd();

  console.group('1.2 Masyvų destruktūrizacija');
  {
    /*
      Masyvo destrūkturizacija, tai kintamųjų kūrimas destrūkturizavimo aplinkoje pagal masyvo
      elementus iš eilės;
    */

    console.group('1.2.1 Masyvo savybių destrūkturizacija.');
    {
      const numbers = [7, 8, 5, 1, -9, 8, 6, 7, 199];
      // const first = numbers[0];
      // const second = numbers[1];
      // const third = numbers[2];

      //       7      8       5
      const [first, second, third] = numbers;

      console.log({ first, second, third });

      /* Dažnai mes norime paimti kelis elementus pagal kriterių. Taikoma tokia praktika */
      const sortedNumbersASC = [...numbers].sort((a, b) => a - b);
      const sortedNumbersDESC = [...numbers].sort((a, b) => b - a);

      // sortedNumbersASC[0] sortedNumbersASC[1]
      const [min, secondMin] = sortedNumbersASC;
      // sortedNumbersDESC[0] sortedNumbersDESC[1]
      const [max, secondMax] = sortedNumbersDESC;

      console.log({
        min,
        max,
        secondMin,
        secondMax,
      });
    }
    console.groupEnd();

    console.group('1.2.2 Masyvo savybių destrūkturizacija naudojant Object.entries');
    {
      const itemsObj = {
        hat: 15.99,
        boots: 150.99,
        gloves: 25.99,
        pants: 39.99,
        jacket: 89.99,
      };
      /*
       įsivaizduokite kad jums reikia surasti:
         * brangiausios prekės kainą
         * brangiausios prekės pavadinimą
      */
      const itemPropsArr = Object.entries(itemsObj);
      const itemPropsArrSorted = itemPropsArr
        // [string, number] -> [number, string]
        .map<[number, string]>(([key, value]) => [value, key])
        // Kadangi elementai dabar yra [number, string], tai [a] -> number
        .sort(([value1], [value2]) => value2 - value1);

      const [[mostExpensiveItemPrice, mostExpensiveItemName]] = itemPropsArrSorted;
      // const mostExpensiveItemName = itemPropsArrSorted[0][0];
      // const mostExpensiveItemPrice = itemPropsArrSorted[0][1];

      console.log({
        mostExpensiveItemName,
        mostExpensiveItemPrice,
      });

      // užrašymas viena eilute
      const [[name, price]] = [...Object.entries(itemsObj)].sort((x, y) => y[1] - x[1]);
      console.log({ name, price });
    }
    console.groupEnd();

    console.group('1.2.3 Masyvo spread operatorius');
    {
      const numbers = [1, 2, 3, 4, 5];
      // ...[1, 2, 3] => 1, 2, 3
      // console.log(...numbers);
      // console.log(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]);

      const sum = (...args: number[]) => args.reduce((s, x) => s + x);

      console.log('parametrų perdavimas ir priėmimas');
      console.log({
        'sum(1, 2, 3)': sum(1, 2, 3),
        'sum(1, 4)': sum(1, 4),
        'sum(...[1, 2, 3, 4, 5])': sum(...numbers),
      });

      console.log('\n min-max suradimas');
      // ...[1, 2, 3, 4, 5] => 1, 2, 3, 4, 5
      const max = Math.max(...numbers);
      const min = Math.min(...numbers);

      console.log({ max, min });

      // Sekli kopija
      console.log('\n Sekli kopija');
      const numbersCopy = [[1, 2, 3, 4, 5]];
      numbers.push(6);
      console.log({ numbers, numbersCopy });
    }
    console.groupEnd();

    console.group('1.2.4 Tuple destrūkturizavimas kompleksinių aobjektų atveju');
    {
      type Person = {
        name: string,
        surname: string,
      };

      type Car = {
        brand: string,
        model: string,
      };

      type CarAndOwner = [Person, Car];

      type PrintCarAndOwner = (pair: CarAndOwner) => void;

      const printCarAndOwner: PrintCarAndOwner = ([{ name, surname }, { brand, model }]) => {
        console.log(`${name} ${surname} has ${brand} ${model}`);
      };

      const carAndOwnerArr: CarAndOwner[] = [
        // PrintCarAndOwner
        [
          { name: 'Kirplius', surname: 'Dubragolas' }, // Person
          { brand: 'Toyota', model: 'Yaris' }, // Car
        ],
        // PrintCarAndOwner
        [
          { name: 'Suveras', surname: 'Snapas' }, // Person
          { brand: 'Toyota', model: 'Avensis' }, // Car
        ],
        // PrintCarAndOwner
        [
          { name: 'Beličė', surname: 'Baumė' }, // Person
          { brand: 'Toyota', model: 'Auris' }, // Car
        ],
      ];
      carAndOwnerArr.forEach(printCarAndOwner);
    }
    console.groupEnd();
  }
  console.groupEnd();
}
console.groupEnd();
