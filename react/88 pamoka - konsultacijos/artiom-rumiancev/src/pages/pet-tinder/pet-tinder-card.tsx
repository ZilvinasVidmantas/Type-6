import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CancelIcon from '@mui/icons-material/Cancel';

type PerTinderCardProps = {
  img: string,
  text: string,
}

const PerTinderCard: React.FC<PerTinderCardProps> = ({ img, text }) => {
  return (
    <Box
      sx={(avocadoTheme) => ({
        backgroundColor: avocadoTheme.palette.primary.light,
        height: '450px',
        width: '320px',
        m: 10,
      })}
    >
      <Avatar
        variant="square"
        src={img}
        sx={{
          width: 280,
          height: 280,
          // p: '15px',
          m: 'auto',
        }}
      />
      <Typography sx={{ width: '250px', m: '25px auto' }} >{text}</Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          m: '25px auto',
        }}
      >
        <CancelIcon color="error" sx={{ fontSize: '50px' }} />
        <FavoriteIcon color="success" sx={{ fontSize: '50px' }} />
      </Box>

    </Box>
  )
}

export default PerTinderCard;