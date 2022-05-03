import React, { useState } from 'react';
import { Container } from '@mui/material';
import people from './data/people';
import SortingSelect from './components/sorting-select';
import PeopleTable from './components/people-table';

const App: React.FC = () => {
  const [data, setData] = useState(people);

  const handleSortingChange = (orderBy: string): void => {
    let newData = [...data];
    switch (orderBy) {
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
        newData = people;
    }
    setData(newData);
  };

  return (
    <Container sx={{ mt: 3 }}>
      <SortingSelect onChange={handleSortingChange} />
      <PeopleTable data={data} />
    </Container>
  );
};

export default App;
