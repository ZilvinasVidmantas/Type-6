import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';

const BasicLayout: React.FC = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default BasicLayout;
