import React, { useState } from 'react';
import { Container } from '@mui/material';
import PeopleSortSelect from './components/people-sort-select';
import PeopleTable from './components/people-table';
import usePeopleManager from './hooks/usePeopleManager';

const App: React.FC = () => {
  const [order, setOrder] = useState('-1');
  const { people, sortingTypes } = usePeopleManager(order);

  const handleSortingChange = (newOrder: string): void => setOrder(newOrder);

  return (
    <Container sx={{ mt: 3 }}>
      <PeopleSortSelect
        onChange={handleSortingChange}
        value={order}
        options={sortingTypes}
      />
      <PeopleTable data={people} />
    </Container>
  );
};

export default App;
