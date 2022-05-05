import React from 'react';
import { Box, Typography } from '@mui/material';

type ProgrammerCardPropertyProps = {
  name: string,
  value: string,
};

const ProgrammerCardProperty: React.FC<ProgrammerCardPropertyProps> = ({ name, value }) => (
  <Box>
    <Typography variant="h6">{name}</Typography>
    <Typography sx={{ pl: 2 }}>{value}</Typography>
  </Box>
);

export default ProgrammerCardProperty;
