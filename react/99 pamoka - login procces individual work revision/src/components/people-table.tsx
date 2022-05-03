import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
} from '@mui/material';
import Person from '../types/person';

type PeopleTableProps = {
  data: Person[] // Array<Person>
};

const HeaderCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: theme.typography.fontWeightBold,
}));

const PeopleTable: React.FC<PeopleTableProps> = ({ data }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead sx={{ bgcolor: 'common.black' }}>
        <TableRow>
          <HeaderCell align="right">Vardas</HeaderCell>
          <HeaderCell align="right">Pavardė</HeaderCell>
          <HeaderCell align="right">Svoris</HeaderCell>
          <HeaderCell align="right">Ūgis</HeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({
          id, name, surname, weight, height,
        }) => (
          <TableRow
            key={id}
            sx={{
              '&:nth-of-type(2n - 1)': {
                bgcolor: 'grey.50',
              },
            }}
          >
            <TableCell align="right">{name}</TableCell>
            <TableCell align="right">{surname}</TableCell>
            <TableCell align="right">{weight}</TableCell>
            <TableCell align="right">{height}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default PeopleTable;
