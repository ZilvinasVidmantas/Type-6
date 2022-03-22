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
