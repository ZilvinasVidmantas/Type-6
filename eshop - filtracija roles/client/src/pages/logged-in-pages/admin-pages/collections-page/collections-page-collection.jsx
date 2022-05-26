import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CollectionsPageCollection = ({ id, title, data }) => {
  const navigate = useNavigate();

  const goToCollectionPage = () => {
    navigate(`/dashboard/collections/${title}`, { state: { id } });
  };

  return (
    <Box id={id}>
      <Typography
        element="h2"
        variant="h5"
        sx={{
          mb: 1,
          textTransform: 'capitalize',
        }}
      >
        {title}

      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ width: '100%' }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(0, 5).map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
        <Button variant="contained" onClick={goToCollectionPage}>Tvarkyti duomenis</Button>
      </Box>
    </Box>
  );
};

export default CollectionsPageCollection;
