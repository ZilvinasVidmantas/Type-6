import React from 'react';
import {
  Container, Typography, Box, Button,
} from '@mui/material';

const NamuDarbai = () => (
  <Container>
    <Container sx={{ m: 3 }}>
      <Container sx={(avocadoTheme) => avocadoTheme.mixins.section}>
        Bandau containerio mixina
      </Container>
      <Box sx={(avocadoTheme) => avocadoTheme.mixins.section}>
        Bandau containerio mixina
      </Box>
      <Typography sx={(avocadoTheme) => ({
        backgroundColor: avocadoTheme.palette.brown.main,
      })}
      >
        Pirma sukurta paletes spalva
      </Typography>
      <Typography sx={(avocadoTheme) => ({
        backgroundColor: avocadoTheme.palette.purple.main,
      })}
      >
        Antra sukurta paletes spalva
      </Typography>
      <Typography sx={(avocadoTheme) => ({
        backgroundColor: avocadoTheme.palette.orange.main,
      })}
      >
        Trecia sukurta paletes spalva
      </Typography>
    </Container>

    <Container sx={{ m: 3 }}>
      <Button variant="contained" color="purple">Purple</Button>
      <Button variant="contained" color="brown">brown</Button>
      <Button variant="contained" color="orange">orange</Button>
    </Container>
  </Container>
);

export default NamuDarbai;
