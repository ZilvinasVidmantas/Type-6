import {
  Box,
  Container,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';

const HomePage: React.FC = () => (
  <Container sx={{ my: 5 }}>
    <Paper sx={{ p: 5 }}>
      <Typography component="h1" variant="h3">React CodeAcademy page</Typography>
      <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos vitae illum, placeat perferendis impedit dolor eos eveniet ipsum corrupti, nihil adipisci molestias officiis animi explicabo molestiae alias nobis cupiditate? Est.</div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis inventore ducimus blanditiis culpa. Error reprehenderit corporis rem, totam accusamus, unde eveniet obcaecati voluptates sapiente cupiditate eius? Modi, perspiciatis id.</p>
      <Box>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus rem eos culpa eaque dolores exercitationem tempore. Ea vitae possimus laudantium voluptatem magni itaque sunt. Magni eos delectus repellendus optio dolor.</Box>
    </Paper>
  </Container>
);

export default HomePage;
