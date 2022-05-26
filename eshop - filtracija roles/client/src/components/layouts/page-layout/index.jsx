import React from 'react';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import PageLayoutNavbar from './page-layout-navbar';

const PageLayout = () => (
  <>
    <PageLayoutNavbar />
    <Container element="main" sx={{ py: 3 }}>
      <Outlet />
    </Container>
  </>
);

export default PageLayout;
