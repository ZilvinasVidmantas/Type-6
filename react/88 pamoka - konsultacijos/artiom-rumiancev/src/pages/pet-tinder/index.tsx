import React from 'react';
import { Container } from '@mui/material';
import DogPic from './photos/dog.jpg';
import HumanPic from './photos/human.jpg';
import PerTinderCard from './pet-tinder-card';

// Iš serverio gauti duomenys
const cardData = [
  {
    id: 'd-1',
    img: DogPic,
    text: 'A certified good boy. Love long walks on the beach.'
  },
  {
    id: 'p-1',
    img: HumanPic,
    text: 'Childless millennial looking to fill a hole in his heart.'
  }
];

const PetTinder: React.FC = () => (
  <Container sx={{
    display: 'flex',
    justifyContent: 'space-around',
  }}
  >
    {cardData.map(({ id, ...props }) => <PerTinderCard
      key={id}
      {...props}
    />)}
  </Container>
);

export default PetTinder;
