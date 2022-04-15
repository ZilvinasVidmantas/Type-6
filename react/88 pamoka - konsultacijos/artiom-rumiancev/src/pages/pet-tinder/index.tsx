import {
  Avatar, Box, Container, Typography,
} from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CancelIcon from '@mui/icons-material/Cancel';
import DogPic from './photos/dog.jpg';
import HumanPic from './photos/human.jpg';
// import avocadoTheme from '../../styles/theme';

const PetTinder: React.FC = () => (
  <Container sx={{
    display: 'flex',
    justifyContent: 'space-around',
  }}
  >
    <Box sx={(avocadoTheme) => ({
      backgroundColor: avocadoTheme.palette.primary.light,
      height: '450px',
      width: '320px',
      m: 10,
    })}
    >
      <Avatar
        variant="square"
        src={DogPic}
        sx={{
          width: 280,
          height: 280,
          // p: '15px',
          m: 'auto',
        }}
      />
      <Typography sx={{
        width: '250px',
        m: '25px auto',
      }}
      >
        {' '}
        A certified good boy. Love long walks on the beach.
      </Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-around',
        m: '25px auto',
      }}
      >
        <CancelIcon
          color="error"
          sx={{
            fontSize: '50px',
          }}
        />
        <FavoriteIcon
          color="success"
          sx={{
            fontSize: '50px',
          }}
        />
      </Box>

    </Box>

    <Box sx={(avocadoTheme) => ({
      backgroundColor: avocadoTheme.palette.primary.light,
      height: '450px',
      width: '320px',
      m: 10,
    })}
    >
      <Avatar
        variant="square"
        src={HumanPic}
        sx={{
          width: 280,
          height: 280,
          m: 'auto',
        }}
      />
      <Typography sx={{
        width: '250px',
        m: '25px auto',
      }}
      >
        {' '}
        Childless millennial looking to fill a hole in his heart.
      </Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-around',
        m: '25px auto',
      }}
      >
        <CancelIcon
          color="error"
          sx={{
            fontSize: '50px',
          }}
        />
        <FavoriteIcon
          color="success"
          sx={{
            fontSize: '50px',
          }}
        />
      </Box>

    </Box>
  </Container>
);

export default PetTinder;
