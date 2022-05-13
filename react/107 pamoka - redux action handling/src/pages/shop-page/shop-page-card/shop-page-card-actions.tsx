import React from 'react';
import {
  Typography,
  Box,
  Button,
  TextField,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

type ShopPageCardActionsProps = {
  id: string,
  addToCart: (itemId: string) => void,
};

const ShopPageCardActions: React.FC<ShopPageCardActionsProps> = ({
  id,
  addToCart,
}) => (
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
);

export default ShopPageCardActions;
