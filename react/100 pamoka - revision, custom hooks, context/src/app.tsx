import React from 'react';
import { Container } from '@mui/material';
import PeopleSortSelect from './components/people-sort-select';
import PeopleTable from './components/people-table';

import { PeopleProvider } from './contexts/people-context';

const App: React.FC = () => (
  <Container sx={{ mt: 3 }}>
    <PeopleProvider>
      <PeopleSortSelect />
      <PeopleTable />
    </PeopleProvider>
  </Container>
);

export default App;
