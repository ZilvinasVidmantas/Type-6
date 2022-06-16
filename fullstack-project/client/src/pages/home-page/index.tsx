import React, { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { useRootDispatch, useRootSelector } from '../../store/hooks';
import { selectShopCategories } from '../../store/features/shop/shop-selectors';
import { shopFetchCategoriesActionThunk } from '../../store/features/shop/shop-action-creators';

const HomePage: React.FC = () => {
  const dispatch = useRootDispatch();
  const categories = useRootSelector(selectShopCategories);

  useEffect(() => {
    dispatch(shopFetchCategoriesActionThunk);
  }, []);

  return (
    <Box>
      <Box sx={({ mixins, palette }) => ({
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        minHeight: 400,
        backgroundImage: `linear-gradient(to right, ${palette.primary.light} , ${palette.primary.dark})`,
      })}
      >
        <Typography
          component="h1"
          variant="h2"
          sx={{ textAlign: 'center', mb: 3, color: 'primary.main' }}
        >
          Verslo ideja
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {categories.map((category) => (
          <Box component="pre">{JSON.stringify(category, null, 4)}</Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
