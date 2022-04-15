import React from 'react';
import { Paper } from '@mui/material';
import theme from '../../../../../styles/theme';

type InfoCardProps = {
  width: number,
  height: number,
  marginLeft?: number,
};

const InfoCard: React.FC<InfoCardProps> = ({
  children, width, height, marginLeft,
}) => (
  <Paper
    elevation={24}
    sx={{
      width,
      height,
      marginLeft,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#A7C4BC',
      borderRadius: 3,
      transition: theme.transitions.duration.short,

      ':hover': {
        transform: 'scale(1.1)',

      },
    }}
  >
    {children}
  </Paper>
);

export default InfoCard;
