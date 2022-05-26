import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  IconButton,
  alpha,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CachedIcon from '@mui/icons-material/Cached';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';

const CollectionPanelPageGrid = ({ data, deleteItem, editItem }) => (
  <Paper sx={{ width: '100%' }}>
    <Grid
      container
      sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', height: 40 }}
    >
      <Grid item xs={5} sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ ml: 1 }}>ID</Typography>
      </Grid>
      <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography>Title</Typography>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: 'flex', justifyContent: 'flex-end', alignItems: 'center', pr: 2,
        }}
      >
        <Typography>Actions</Typography>
      </Grid>
    </Grid>
    {
      data.map(({ id, title, edited }) => (
        <Grid
          key={id}
          container
          sx={(theme) => ({
            '&:nth-of-type(2n)': {
              bgcolor: 'grey.100',
            },
            bgcolor: edited && `${alpha(theme.palette.secondary.main, 0.2)} !important`,
          })}
        >
          <Grid item xs={5} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ ml: 1 }}>{id}</Typography>
          </Grid>
          <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>{title}</Typography>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: 'flex', justifyContent: 'flex-end', alignItems: 'center', pr: 1,
            }}
          >
            <IconButton color="secondary" onClick={() => editItem(id)}>
              {edited ? <DoNotDisturbAltIcon /> : <CachedIcon />}
            </IconButton>
            <IconButton color="error" onClick={() => deleteItem(id)}>
              <DeleteForeverIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))
    }
  </Paper>
);

export default CollectionPanelPageGrid;
