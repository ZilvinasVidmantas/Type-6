import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import NumberField from '../../../components/number-field';
import { useRootDispatch, useRootSelector } from '../../../store/hooks';
import { createModifyCartItemAction } from '../../../store/action-creators';
import { selectCartItemAmountByShopItemId } from '../../../store/selectors';

type ShopPageCardActionsProps = {
  id: string,
};

const ShopPageCardActions: React.FC<ShopPageCardActionsProps> = ({
  id,
}) => {
  const dispatch = useRootDispatch();
  const cartItemAmount = useRootSelector(selectCartItemAmountByShopItemId(id));
  const [amount, setAmount] = useState<number>(cartItemAmount);

  const addToCart = (): void => {
    const addToCartAction = createModifyCartItemAction(id, amount);
    dispatch(addToCartAction);
  };

  useEffect(() => {
    if (cartItemAmount !== amount) {
      addToCart();
    }
  }, [amount]);

  return (
    <Box>
      <Box sx={{
        display: 'flex',
        gap: 0.5,
      }}
      >
        <NumberField
          size="small"
          sx={{ alignSelf: 'stretch' }}
          InputProps={{ sx: { height: '100%' } }}
          min={0}
          value={amount}
          onChange={(_, newValue) => setAmount(newValue)}
          onBlur={(_, newValue) => setAmount(newValue)}
          fullWidth
        />
      </Box>
    </Box>
  );
};

export default ShopPageCardActions;
