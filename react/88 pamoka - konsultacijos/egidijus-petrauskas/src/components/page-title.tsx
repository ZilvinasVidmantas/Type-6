import { Typography, styled } from '@mui/material';
import React from 'react';

const StyledTempContent = styled(Typography)(({
  textAlign: 'center',
  fontSize: 70,
  fontWeight: 500,
}));

type TempContentProps = {
  pageTitle: string,
  colorProp?: string,
};

const TempContent: React.FC<TempContentProps> = ({ pageTitle, colorProp }) => (
  <StyledTempContent sx={{ color: colorProp }} variant="h2">
    {pageTitle}
  </StyledTempContent>
);

export default TempContent;
