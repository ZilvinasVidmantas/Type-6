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
  available: boolean,
};

const ShopPageCardActions: React.FC<ShopPageCardActionsProps> = ({
  id,
  available,
  addToCart,
}) => (
  <Box>
    {!available && (<Typography color="error">Currently not available</Typography>)}
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
        disabled={!available}
      />
      <Box sx={{
        display: 'flex', flexDirection: 'column', width: 40, gap: 0.5,
      }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{ minWidth: 'initial', p: 1, height: 20 }}
          disabled={!available}
        >
          +
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{ minWidth: 'initial', p: 1, height: 20 }}
          disabled={!available}
        >
          -
        </Button>
      </Box>
      <Button
        variant="contained"
        onClick={() => addToCart(id)}
        disabled={!available}
      >
        <Typography sx={{ pr: 1 }}>Pridėti</Typography>
        <ShoppingCartIcon />
      </Button>
    </Box>
  </Box>
);

export default ShopPageCardActions;
