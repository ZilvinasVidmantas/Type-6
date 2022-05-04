import React, { createContext, useState, useMemo } from 'react';
import Person from '../types/person';
import usePeopleManager from '../hooks/usePeopleManager';

type PeopleContextType = {
  people: Person[],
  sortingTypes: string[],
  sorting: string,
  changeSorting: (newSorting: string) => void,
};

const PeopleContext = createContext<PeopleContextType>({} as PeopleContextType);

export const PeopleProvider: React.FC = ({ children }) => {
  const [sorting, setSorting] = useState('-1');
  const { people, sortingTypes } = usePeopleManager(sorting);

  const changeSorting = (newSorting: string): void => setSorting(newSorting);

  const providerValue = useMemo(() => ({
    people,
    sortingTypes,
    sorting,
    changeSorting,
  }), [people]);

  return (
    <PeopleContext.Provider value={providerValue}>
      {children}
    </PeopleContext.Provider>
  );
};

export default PeopleContext;
