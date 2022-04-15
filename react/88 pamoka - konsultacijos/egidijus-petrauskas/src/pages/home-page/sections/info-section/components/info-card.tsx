import React from 'react';
import { Paper, PaperProps, useTheme } from '@mui/material';

type InfoCardProps = {
  sx: PaperProps['sx'],
};

const InfoCard: React.FC<InfoCardProps> = ({ children, sx }) => {
  const theme = useTheme();

  const sxStyles = typeof sx === 'function' ? sx(theme) : sx;
  const allStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#A7C4BC',
    borderRadius: 3,
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.short,
    }),

    ':hover': {
      zIndex: 641651,
      transform: 'scale(1.1)',
    },
    ...sxStyles,
  };

  return (
    <Paper elevation={24} sx={allStyles}>
      {children}
    </Paper>
  );
};

export default InfoCard;
