import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Button,
  Divider,
} from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import {
  categorySelector,
  fetchCategory,
  updateCategory,
  updateCategoryProperties,
} from '../../../../store/categories';
import {
  collectionTitlesSelector,
  fetchCollections,
} from '../../../../store/collections';
import CategoryPanelPageMainForm from './category-panel-page-main-form';
import CategoryPanelPagePropertyForm from './category-panel-page-property-form';

const CategoryPanelPage = () => {
  const { state: { id } } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const category = useSelector(categorySelector(id));
  const collections = useSelector(collectionTitlesSelector);

  const updateMainInfo = (data) => {
    dispatch(updateCategory({ id, data }));
  };

  const updateProperties = (properties) => {
    dispatch(updateCategoryProperties({ id, properties }));
  };

  useEffect(() => {
    dispatch(fetchCollections());
    dispatch(fetchCategory(id));
  }, []);

  return (
    <Box>
      <Button onClick={() => navigate(-1)}>
        <ArrowCircleLeftIcon />
        <Typography sx={{ ml: 2 }}>Back</Typography>
      </Button>
      <Divider sx={{ mt: 2, mb: 1 }} />
      {category && (
        <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
          <CategoryPanelPageMainForm
            category={category}
            onSubmit={updateMainInfo}
          />
          <CategoryPanelPagePropertyForm
            properties={category.properties}
            onSubmit={updateProperties}
            collections={collections}
          />
        </Box>
      )}
    </Box>
  );
};

export default CategoryPanelPage;
