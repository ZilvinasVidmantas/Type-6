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

console.groupCollapsed('2. Anoniminės funkcijos');
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
