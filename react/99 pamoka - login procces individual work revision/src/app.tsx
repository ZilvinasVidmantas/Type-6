import React, { useState } from 'react';
import './styles.css';

const people = [
  {
    id: '1',
    name: 'Argolija',
    surname: 'Zuikutė',
    weight: 80,
    height: 170,
  },
  {
    id: '2',
    name: 'Brolys',
    surname: 'Sesauskas',
    weight: 98,
    height: 180,
  },
  {
    id: '3',
    name: 'Kengija',
    surname: 'Krimavičienė',
    weight: 65,
    height: 165,
  },
  {
    id: '4',
    name: 'Zonkus',
    surname: 'Varagauskas',
    weight: 100,
    height: 190,
  },
];

const App: React.FC = () => {
  const [data, setData] = useState(people);

  const handleSortingChange = (orderBy) => {
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
    <div className="App">
      <SortingSelect onChange={handleSortingChange} />
      <Table data={data} />
    </div>
  );
};

const SortingSelect: React.FC = ({ onChange }) => (
  <div>
    <strong>Select sorting: </strong>
    <select onChange={(e) => onChange(e.target.value)}>
      <option value="-1">---</option>
      <option value="name-asc">Name ASC</option>
      <option value="surname-asc">Surname ASC</option>
      <option value="height-asc">Height ASC</option>
      <option value="weight-asc">Weight ASC</option>
      <option value="name-desc">Name DESC</option>
      <option value="surname-desc">Surname DESC</option>
      <option value="height-desc">Height DESC</option>
      <option value="weight-desc">Weight DESC</option>
    </select>
  </div>
);

const Table: React.FC = ({ data }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Vardas</th>
        <th>Pavarde</th>
        <th>Svoris</th>
        <th>Ūgis</th>
      </tr>
    </thead>
    <tbody>
      {data.map(({
        id, name, surname, weight, height,
      }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{surname}</td>
          <td>
            {weight}
            {' '}
            kg
          </td>
          <td>
            {height}
            {' '}
            cm
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default App;
