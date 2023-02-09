import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

const NavbarLayout = () => (
  <Box component="div">
    <Navbar />
    <Box sx={{p:3}} component="main">
      <Outlet />
    </Box>
  </Box>
);

export default NavbarLayout;
