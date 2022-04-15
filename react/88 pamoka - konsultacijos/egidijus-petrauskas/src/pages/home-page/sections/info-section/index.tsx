import React from 'react';
import { Box, Typography } from '@mui/material';
import InfoCard from './components/info-card';
import theme from '../../../../styles/theme';
import CardsContainer from './info-section-styles';

const cardsInfo = [
  {
    title: 'Card One', content: 'This is realy card one!', height: 410, marginLeft: 0,
  },
  {
    title: 'Card Two', content: 'This is realy card two!', height: 405, marginLeft: -8,
  },
  {
    title: 'Card Three', content: 'Yes.. this is card three', height: 405, marginLeft: -8,
  },
  {
    title: 'Card Four', content: 'I.. Think this is card fiv... four!', height: 410, marginLeft: -8,
  },
  {
    title: 'Card Five', content: 'And this is card seven!', height: 410, marginLeft: -8,
  },
];

const InfoSection: React.FC = () => (
  <Box
    component="section"
    sx={{
      height: 750, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5, pb: 8, background: '#2F5D62',
    }}
  >
    <Typography variant="h3" color="homePageColor.main">For Your Information</Typography>

    <CardsContainer>

      {cardsInfo.map((card) => (
        <InfoCard width={300} height={card.height} marginLeft={card.marginLeft} key={card.title}>
          <Typography variant="h4" sx={{ margin: '50px auto', color: theme.palette.homePageColor.main, fontWeight: 500 }}>{card.title}</Typography>
          <Typography sx={{ textAlign: 'center', width: '60%', fontSize: 25 }}>{card.content}</Typography>
        </InfoCard>
      ))}

    </CardsContainer>
  </Box>
);

export default InfoSection;
