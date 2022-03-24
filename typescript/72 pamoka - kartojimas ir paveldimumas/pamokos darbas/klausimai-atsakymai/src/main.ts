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
    Aprašiu objektą, galime destrūkturizuoti jo savybes ir iškarto pagal pasvybių pavadinimus
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
}
console.groupEnd();
