import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
} from '@mui/material';
import Programmer from '../../types/programmer';
import ProgrammerCardProperty from './programmer-card-property';
import Img from '../img';

type ProgrammerCardProps = Omit<Programmer, 'id'>;

const ProgrammerCard: React.FC<ProgrammerCardProps> = ({
  name, surname, languages, technologies, img, yearsOfExperience,
}) => (
  <Paper elevation={3}>
    <Img src={img} sx={{ height: 270 }} alt="" />
    <Box sx={{ p: 3, pt: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography
          variant="h5"
          sx={{ textAlign: 'center' }}
        >
          {`${name} ${surname}`}
        </Typography>
        <ProgrammerCardProperty name="Languages" value={languages.join(', ')} />
        <ProgrammerCardProperty name="Technologies" value={technologies.join(', ')} />
        <ProgrammerCardProperty name="Experience" value={`${yearsOfExperience} years`} />
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          <Button variant="contained" color="primary">Info</Button>
          <Button variant="contained" color="info">Call</Button>
        </Box>
      </Box>
    </Box>
  </Paper>
);

export default ProgrammerCard;
