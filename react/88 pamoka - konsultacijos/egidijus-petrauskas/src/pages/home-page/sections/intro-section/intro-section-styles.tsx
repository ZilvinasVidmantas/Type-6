import { Box, styled, Typography } from '@mui/material/';
import wallpapper from '../../images/hand-bg.jpg';

export const IntroSectionContainer = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  backgroundImage: `url(${wallpapper})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'fixed',
});

export const IntroSectionContentContainer = styled(Box)({
  width: '55%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: 20,
  padding: 40,
});

export const IntroSectionContentTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.info.dark,
  textAlign: 'center',
}));
