import React from 'react';
import { Typography } from '@mui/material';
import theme from '../styles/theme';

type TextSectionProps = {
  text: string,
};

const TextSection: React.FC<TextSectionProps> = ({ text }) => (
  <Typography style={theme.mixins.section} variant="body1">
    {text}
  </Typography>
);

export default TextSection;
