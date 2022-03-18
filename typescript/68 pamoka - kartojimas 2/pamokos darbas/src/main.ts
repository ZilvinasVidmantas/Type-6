/* eslint-disable no-empty */
/* eslint-disable no-lone-blocks */

const numbers1 = [1, 5, 8, 9, 4, 5, 7, 8, 9, 4, 5, 8];
const numbers2 = [9, 4, 5, 8];
const numbers3 = [1, 1, 0, 1, 0, 1, 1, 0, 1, 1];

const numbersSamples: number[][] = [numbers1, numbers2, numbers3];

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  const solution = (arr: any[]): number => arr.length - 1;

  numbersSamples.forEach((numbers) => {
    console.log({
      arr: numbers,
      result: solution(numbers),
    });
  });
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  const solution = (arr: any[]): string => arr
    .map((el, i) => `[${i}]=>${el}`)
    .join(', ');

  numbersSamples.forEach((numbers) => {
    console.log({
      arr: numbers,
      result: solution(numbers),
    });
  });
}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
  // tipai
  type Drink = {
    name: string,
    price: number,
  };

  // funkcijos
  const solution = (drinks: Drink[]): Drink[] => {
    // Sekli kopija - masyvas naujas, bet masyvo indeksai rodo į tuos pačius elementus
    const drinksCopy = [...drinks];

    drinksCopy.sort((drink1, drink2) => drink1.price - drink2.price);

    return drinksCopy;
  };

  // Sutrumpintas užrašymas
  // const solution = (drinks: Drink[]): Drink[] => [...drinks].sort((x, y) => x.price - y.price)}

  // kinamieji
  const drinks: Drink[] = [
    { name: 'lemonade', price: 50 },
    { name: 'lime', price: 10 },
    { name: 'cola', price: 30 },
  ];

  // sprendimas
  const sortedDrinks = solution(drinks);

  // spausdinimas
  console.log('%cPradiniai duomenys', 'font-size: 1.5rem;');
  console.table(drinks);

  console.log('%cIšrikiuoti duomenys', 'font-size: 1.5rem;');
  console.table(sortedDrinks);
}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
  // tipai:

  // funkcijos:

  // duomenys:

  // sprendimas:

  // rezultatas
}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/48EJWLhF224na8po3');
{
  // tipai:

  // funkcijos:

  // duomenys:

  // sprendimas:

  // rezultatas

}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
  // tipai:

  // funkcijos:

  // duomenys:

  // sprendimas:

  // rezultatas

}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
  // tipai:

  // funkcijos:

  // duomenys:

  // sprendimas:

  // rezultatas

}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
  // tipai:

  // funkcijos:

  // duomenys:

  // sprendimas:

  // rezultatas

}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
  // tipai:

  // funkcijos:

  // duomenys:

  // sprendimas:

  // rezultatas

}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
  // tipai:

  // funkcijos:

  // duomenys:

  // sprendimas:

  // rezultatas

}
console.groupEnd();
