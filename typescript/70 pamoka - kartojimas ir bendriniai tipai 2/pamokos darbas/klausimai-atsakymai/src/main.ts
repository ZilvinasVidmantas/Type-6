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

console.groupCollapsed('2. Kaip kuriami struktūros naudojančios bendrinius tipus?');
{
  type NumberNode = {
    next?: NumberNode,
    data: number,
  }

  const node1: NumberNode = { data: 1 };
  const node2: NumberNode = { data: 2 };
  const node3: NumberNode = { data: 3 };
  const node4: NumberNode = { data: 4 };
  const node5: NumberNode = { data: 5 };
  const node6: NumberNode = { data: 6 };

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;

  // Paversti sąraša masyvu
  // 1. Atspausdinti kiekvieną sąrašo elementą
  /*
    * pradinis/darbinis kitamasis - iteratorius
    * tęstinumo/baigtinė salyga
    * itaratoriaus keitimas tokius būdu, jog salyga artėtų link baigtinės - žingnis
  */
  const arr: number[] = [];

  for (
    let currentNode: NumberNode | undefined = node1; // pradinis/darbinis kitamasis - iteratorius
    currentNode !== undefined; //tęstinumo/baigtinė salyga
    currentNode = currentNode.next // itaratoriaus keitimas tokius būdu, jog salyga artėtų ling baigtinės - žingnis
  ) {
    arr.push(currentNode.data);
  }
  console.log(arr);

  /*
    Parašykite logiką iteruoti per masyvą naudojant ciklus:
      * while [10]
      * do while [10]
  */

}
console.groupEnd(); 