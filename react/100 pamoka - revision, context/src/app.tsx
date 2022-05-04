import React, { useState, useMemo } from 'react';
import { Container } from '@mui/material';
import initPeople from './data/people';
import PeopleOrderSelect from './components/people-order-select';
import PeopleTable from './components/people-table';

const App: React.FC = () => {
  const [people, setPeople] = useState(initPeople);
  const [order, setOrder] = useState('-1');

  const handleSortingChange = (newOrder: string): void => setOrder(newOrder);

  const formattedPeople = useMemo(() => {
    let newData = [...people];

    switch (order) {
      case 'name-asc':
        newData.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'surname-asc':
        newData.sort((a, b) => a.surname.localeCompare(b.surname));
        break;
      case 'height-asc':
        newData.sort((a, b) => a.height - b.height);
        break;
      case 'weight-asc':
        newData.sort((a, b) => a.weight - b.weight);
        break;
      case 'name-desc':
        newData.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'surname-desc':
        newData.sort((a, b) => b.surname.localeCompare(a.surname));
        break;
      case 'height-desc':
        newData.sort((a, b) => b.height - a.height);
        break;
      case 'weight-desc':
        newData.sort((a, b) => b.weight - a.weight);
        break;
      default:
        newData = initPeople;
    }

    return newData;
  }, [order, people]);

  return (
    <Container sx={{ mt: 3 }}>
      <PeopleOrderSelect
        onChange={handleSortingChange}
        value={order}
      />
      <PeopleTable data={formattedPeople} />
    </Container>
  );
};

export default App;
