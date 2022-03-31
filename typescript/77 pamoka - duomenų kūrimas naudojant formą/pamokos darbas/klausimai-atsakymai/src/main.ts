/* eslint-disable no-inner-declarations */
/* eslint-disable no-empty */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
console.group('1. object VS Object VS {}');
{
  // const a = new Object({
  //   name: 'Kirpartas',
  //   surname: 'Vandalas',
  // });

  // const a = Object.create({
  //   name: 'Kirpartas',
  //   surname: 'Vandalas',
  // });
  const a = {
    name: 'Kirpartas',
    surname: 'Vandalas',
  };
  console.log(a);
  /*
    Iš tiesų primityvios reikšmės yra objektai, tačiau jų elgena yra kaip primityvių reikšmių:
      * priskiriant kuriamos kopijos, o ne nuorodos

    Todėl užrašymas yra validus:
      const a: Object = 7;

    Taip yra todėl, kad iš tiesų, '...= 7' yra '...= Number(7)' trumpinys įgalinantis Number
    prototipo metodus.

    JavaScript sintaksėje sukūriu primityvią reikšmę iš tiesų kuriami objektai, leidžiantys naudoti
    tų objektų Prototipus: Boolean, String, Number. Tačiau jų 'objektiška' elgsena yra dirbtinai
    pakeičiama elgsena būdinga primityviems kintamiesiems.
    Toks principas yra vadinas: Duck Typing: https://en.wikipedia.org/wiki/Duck_typing

    TypeScript sprendžia šią problemą sukūrdama specialų tipą: 'object'

    'object' TIPAS yra skirtas nurodyti, kad kintamojo tipas negali būti, 'Duck typing' būdu
    realizuota, primityvi reikšmė.

    Tuomet toks užrašymas NĖRA validus:
      const a: object = 7; ERROR
  */
}

console.groupEnd();
