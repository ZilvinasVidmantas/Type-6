import React, { useState } from 'react';
import {
  Typography,
  Box,
  Button,
} from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NumberField, { NumberFieldProps } from '../../../components/NumberField';

type ShopPageCardActionsProps = {
  id: string,
  available: boolean,
  max: number,
  selectedAmount?: number
  addToCart: (itemId: string) => void,
};

const ShopPageCardActions: React.FC<ShopPageCardActionsProps> = ({
  id,
  available,
  max,
  selectedAmount = 1,
  addToCart,
}) => {
  const [amount, setAmount] = useState<number | string>(selectedAmount);

  const handleTextFieldChange: NumberFieldProps['onChange'] = (e) => {
    const valueStr = e.target.value;
    const newAmount = valueStr === '' ? '' : Math.floor(Number(valueStr));
    setAmount(newAmount > max ? max : newAmount);
  };

  const handleTextFieldBlur: NumberFieldProps['onBlur'] = (e) => {
    const newAmount = Number(e.target.value);
    if (newAmount < 1) {
      setAmount(1);
      return;
    }
    if (newAmount > max) {
      setAmount(max);
      return;
    }
    setAmount(newAmount);
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
          value={amount}
          onChange={handleTextFieldChange}
          onBlur={handleTextFieldBlur}
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
};

export default ShopPageCardActions;
