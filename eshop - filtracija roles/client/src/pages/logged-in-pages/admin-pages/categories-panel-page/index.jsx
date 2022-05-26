import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Typography,
  Box,
} from '@mui/material';
import {
  categoriesSelector,
  fetchCategories,
} from '../../../../store/categories';
import CategoryPanelPageTable from './category-panel-page-table';

const CategoryPanelPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelector);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <Box>
      <Typography element="h1" variant="h2" sx={{ mb: 3 }}>Category panel</Typography>
      <CategoryPanelPageTable data={categories} />
    </Box>
  );
};
export default CategoryPanelPage;
