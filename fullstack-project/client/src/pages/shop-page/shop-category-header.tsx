import React from 'react';
import { Box, Button } from '@mui/material';
import { useRootDispatch, useRootSelector } from '../../store/hooks';
import { selectShopCategories, selectShopCategoryFilter } from '../../store/features/shop/shop-selectors';
import { createShopChangeCategoryFilterActionThunk } from '../../store/action-creators';

const ShopCategoryHeader = () => {
  const categories = useRootSelector(selectShopCategories);
  const categoryFilter = useRootSelector(selectShopCategoryFilter);
  const dispatch = useRootDispatch();

  const changeCategory = (id: string | null) => {
    const changeCategoryFilterActionThunk = createShopChangeCategoryFilterActionThunk(id);
    dispatch(changeCategoryFilterActionThunk);
  };

  return (
    <Box sx={{ display: 'flex', mb: 3, gap: 0.5 }}>
      <Button
        onClick={() => changeCategory(null)}
        sx={{ flexGrow: 1 }}
        variant={categoryFilter === null ? 'contained' : 'outlined'}
      >
        Visos kategorijos
      </Button>
      {
        categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => changeCategory(category.id)}
            sx={{ flexGrow: 1 }}
            variant={categoryFilter === category.id ? 'contained' : 'outlined'}
          >
            {category.title}
          </Button>
        ))
      }
    </Box>
  );
};

export default ShopCategoryHeader;
