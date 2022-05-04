import React, { createContext, useState, useMemo } from 'react';
import Person from '../types/person';
import usePeopleManager from '../hooks/usePeopleManager';

type PeopleContextType = {
  people: Person[],
  sortingTypes: string[],
  sorting: string,
  setSorting: (newSorting: string) => void,
};

const PeopleContext = createContext<PeopleContextType>({} as PeopleContextType);

export const PeopleProvider: React.FC = ({ children }) => {
  const [sorting, setSorting] = useState('-1');
  const { people, sortingTypes } = usePeopleManager(sorting);

  const providerValue = useMemo(() => ({
    people,
    sortingTypes,
    sorting,
    setSorting,
  }), [people]);

  return (
    <PeopleContext.Provider value={providerValue}>
      {children}
    </PeopleContext.Provider>
  );
};

export default PeopleContext;
