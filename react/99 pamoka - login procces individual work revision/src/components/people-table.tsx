import React from 'react';
import Person from '../types/person';

type PeopleTableProps = {
  data: Person[] // Array<Person>
};

const PeopleTable: React.FC<PeopleTableProps> = ({ data }) => (
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

export default PeopleTable;
