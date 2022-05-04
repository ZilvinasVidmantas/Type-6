import { useMemo } from 'react';
import initPeople from '../../data/people';
import Person from '../../types/person';

type PersonSortProps = 'name' | 'surname' | 'height' | 'weight';
type SortingDirections = 'asc' | 'desc';
type SortingType = `${PersonSortProps}-${SortingDirections}`;

type SortingFunctions = {
  [Key in SortingType]: (a: Person, b: Person) => number;
};

const sortingFunctions: SortingFunctions = {
  'name-asc': (a, b) => a.name.localeCompare(b.name),
  'name-desc': (a, b) => b.name.localeCompare(a.name),
  'surname-asc': (a, b) => a.surname.localeCompare(b.surname),
  'surname-desc': (a, b) => b.surname.localeCompare(a.surname),
  'height-asc': (a, b) => a.height - b.height,
  'height-desc': (a, b) => b.height - a.height,
  'weight-asc': (a, b) => a.weight - b.weight,
  'weight-desc': (a, b) => b.weight - a.weight,
};

const sortingTypes = Object.keys(sortingFunctions);

const isSortingType = (sortingType: string):
  sortingType is SortingType => sortingType in sortingFunctions;

const usePeopleManager = (sortingType: string) => {
  const people = useMemo(() => {
    const peopleCopy = [...initPeople];
    const sortingTypeExists = isSortingType(sortingType);

    if (sortingTypeExists) {
      const sortBy = sortingFunctions[sortingType];
      peopleCopy.sort(sortBy);
    }

    return peopleCopy;
  }, [sortingType]);

  return {
    people,
    sortingTypes,
  };
};

export default usePeopleManager;
