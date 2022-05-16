import React, { useState } from 'react';
import {
  Typography,
  Box,
  Button,
} from '@mui/material';
import { useDispatch } from 'react-redux';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NumberField from '../../../components/number-field';

type ShopPageCardActionsProps = {
  id: string,
  available: boolean,
  max: number,
};

const ShopPageCardActions: React.FC<ShopPageCardActionsProps> = ({
  id,
  available,
  max,
}) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number>(1);
  // 9:05

  const addToCart = (): void => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id,
        amount,
      },
    });
  };

  return (
    <Box>
      {!available && (<Typography color="error">Currently not available</Typography>)}
      <Box sx={{
        display: 'flex',
        gap: 0.5,
      }}
      >
        <NumberField
          size="small"
          sx={{ alignSelf: 'stretch' }}
          InputProps={{ sx: { height: '100%' } }}
          disabled={!available}
          min={1}
          max={max}
          value={amount}
          onChange={(_, newValue) => setAmount(newValue)}
          onBlur={(_, newValue) => setAmount(newValue)}
        />
        <Button
          variant="contained"
          onClick={addToCart}
          disabled={!available}
        >
          <Typography sx={{ pr: 1 }}>Pridėti</Typography>
          <ShoppingCartIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default ShopPageCardActions;
