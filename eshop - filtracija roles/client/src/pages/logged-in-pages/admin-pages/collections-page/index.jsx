import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Box, Grid } from '@mui/material';
import { collectionsSelector, fetchCollections } from '../../../../store/collections';
import CollectionsPageCollection from './collections-page-collection';

const CollectionsPage = () => {
  const dispatch = useDispatch();
  const collections = useSelector(collectionsSelector);

  useEffect(() => {
    dispatch(fetchCollections());
  }, []);

  return (
    <Box>
      <Typography component="h1" variant="h2">Collections</Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {
          collections.map((props) => (
            <Grid
              key={props.id}
              item
              xs={12}
              md={6}
              xl={4}
            >
              <CollectionsPageCollection {...props} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
};

export default CollectionsPage;
