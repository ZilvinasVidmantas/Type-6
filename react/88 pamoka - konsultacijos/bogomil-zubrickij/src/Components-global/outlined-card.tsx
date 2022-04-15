import React from 'react';
import { Box, Card } from '@mui/material';

const OutlinedCard: React.FC = ({ children }) => (
  <Box sx={{ minWidth: 275, m: 5 }}>
    <Card variant="outlined" sx={{ bgColor: 'light' }}>{children}</Card>
  </Box>
);

export default OutlinedCard;
