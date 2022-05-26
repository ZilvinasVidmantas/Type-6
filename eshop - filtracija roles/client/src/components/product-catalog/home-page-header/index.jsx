import React, { useContext } from 'react';
import {
  Typography,
  Paper,
  Button,
  Divider,
} from '@mui/material';
import { ProductContext } from '../contexts/product-context';

const HomePageHeader = () => {
  const { categories, selectedCategory, changeCategory } = useContext(ProductContext);

  return (
    <Paper sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
      { categories.map(({ id, title, Icon }, i) => (
        <React.Fragment key={title}>
          <Button
            variant="text"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              textTransform: 'Capitalize',
            }}
            color={id === selectedCategory ? 'secondary' : 'inherit'}
            onClick={() => changeCategory(id)}
          >
            <Typography>{title}</Typography>
            <Icon />
          </Button>
          { (i !== categories.length - 1) && <Divider orientation="vertical" flexItem />}
        </React.Fragment>
      ))}
    </Paper>
  );
};

export default HomePageHeader;
