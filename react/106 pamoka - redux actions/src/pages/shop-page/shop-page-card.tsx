import React from 'react';
import {
  Typography,
  Box,
  Paper,
  Button,
  TextField,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Img from '../../components/img';
import { Item } from '../../types';
import ShopPageCardProperties from './shop-page-card-properties';

type ShopPageCardProps = Item & {
  addToCart: (itemId: string) => void,
};

//

const ShopPageCard: React.FC<ShopPageCardProps> = ({
  id,
  images,
  addToCart,
  ...propertyObject
}) => {
  const itemProperties = Object.entries(propertyObject).map(([name, value]) => ({ name, value }));

  return (
    <Paper elevation={2}>
      <Img src={images[0]} alt="" sx={{ height: 300, width: '100%' }} />
      <Box sx={{
        display: 'flex', flexDirection: 'column', p: 2, gap: 2,
      }}
      >
        <ShopPageCardProperties properties={itemProperties} />
        <Box sx={{
          display: 'flex',
          gap: 0.5,
        }}
        >
          <TextField
            size="small"
            sx={{ alignSelf: 'stretch' }}
            InputProps={{ sx: { height: '100%' } }}
            inputProps={{ sx: { height: '100%' } }}
          />
          <Box sx={{
            display: 'flex', flexDirection: 'column', width: 40, gap: 0.5,
          }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{ minWidth: 'initial', p: 1, height: 20 }}
            >
              +
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{ minWidth: 'initial', p: 1, height: 20 }}
            >
              -
            </Button>
          </Box>
          <Button
            variant="contained"
            onClick={() => addToCart(id)}
          >
            <Typography sx={{ pr: 1 }}>Pridėti</Typography>
            <ShoppingCartIcon />
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ShopPageCard;
