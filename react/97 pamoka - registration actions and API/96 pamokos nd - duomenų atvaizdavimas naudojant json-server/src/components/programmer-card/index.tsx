import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import Programmer from '../../types/programmer';
import ProgrammerCardProperty from './programmer-card-property';
import Img from '../img';

type ProgrammerCardProps = Omit<Programmer, 'id'>;

const ProgrammerCard: React.FC<ProgrammerCardProps> = ({
  name, surname, languages, technologies, img, yearsOfExperience,
}) => (
  <Paper
    elevation={3}
    sx={{
      display: { xs: 'block', sm: 'flex', lg: 'block' },
      height: { sm: 350, lg: 'auto' },
      maxWidth: { sm: 630 },
      mx: { sm: 'auto' },
    }}
  >
    <Box
      sx={{
        background: 'red',
        height: { xs: 270, sm: '100%', lg: 270 },
        width: { xs: '100%', sm: 300, lg: '100%' },
        flexBasis: 300,
        flexShrink: 0,
        alignSelf: 'stretch',
      }}
    >
      <Img src={img} sx={{ height: '100%', width: '100%' }} alt="" />
    </Box>
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexGrow: 1,
      p: 3,
      pt: 2,
    }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography variant="h5">{`${name} ${surname}`}</Typography>
        <Divider sx={{
          display: { xs: 'none', sm: 'block', lg: 'none' },
        }}
        />
        <ProgrammerCardProperty name="Languages" value={languages.join(', ')} />
        <ProgrammerCardProperty name="Technologies" value={technologies.join(', ')} />
        <ProgrammerCardProperty name="Experience" value={`${yearsOfExperience} years`} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
        <Button variant="contained" color="primary">Info</Button>
        <Button variant="contained" color="info">Call</Button>
      </Box>
    </Box>
  </Paper>
);

export default ProgrammerCard;
