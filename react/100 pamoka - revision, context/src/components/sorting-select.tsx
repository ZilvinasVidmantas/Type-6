import React from 'react';

type SortingSelectProps = {
  onChange: (a: string) => void,
};

const SortingSelect: React.FC<SortingSelectProps> = ({ onChange }) => (
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

export default SortingSelect;
