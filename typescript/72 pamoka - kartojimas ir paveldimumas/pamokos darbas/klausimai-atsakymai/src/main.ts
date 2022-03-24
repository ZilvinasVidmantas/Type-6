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

  /*
    Objekto destrūkturizacija.
    Aprašiu objektą, galime destrūkturizuoti jo savybes ir iškarto pagal pasvybių pavadinimus
    sukurti kintamuosius toje aplinkoje, kurioje buvo atlikta destrūkturizacija.
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

  function printPersonFullname({ name, surname }: Person, greeting = 'Labas'): void {
    console.log(`${greeting} ${name} ${surname}`);
  }

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

  // naudodami person objektą, kuriame kintamuosiu destrūkturizuojamoje aplinkoje
  // const { name, surname } = person;

  printPersonFullname(person1);
  printPersonFullname(person2);
}
console.groupEnd();
