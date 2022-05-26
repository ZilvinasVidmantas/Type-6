import React from 'react';
import {
  Container,
  Button,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';
import ProductCatalog from '../../../../components/product-catalog';
import routes from '../../../../routing/routes';

const ProductPanelPage = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl" sx={{ mr: 'auto', ml: 'initial' }}>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{ mb: 4, fontSize: 22 }}
        onClick={() => navigate(routes.ProductFormPage)}
      >
        Kurti naują produktą
        <AddCircleIcon sx={{ fontSize: 32, ml: 2 }} />
      </Button>
      <ProductCatalog />
    </Container>
  );
};

export default ProductPanelPage;
