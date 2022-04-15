import { Container, styled } from '@mui/material';
import customCursor from '../../images/custom-cursor.png';

const CardsContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',

  ':hover': {
    cursor: `url(${customCursor}), auto`,
  },
});

export default CardsContainer;
