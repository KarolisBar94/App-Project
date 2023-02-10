import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import NavbarMobileMenu from './nvabar-mobile-menu';
import NavbarDesktopMenu from './navabr-desktop-menu';
import { expandBreakpoint, linksData } from './navbar-data';

const Navbar = () => (
  <AppBar position="sticky">
    <Toolbar sx={{ justifyContent: { xs: 'flex-end', [expandBreakpoint]: 'flex-start' } }}>
      <NavbarDesktopMenu
        expandBreakpoint={expandBreakpoint}
        linksData={linksData}
      />
      <NavbarMobileMenu />
    </Toolbar>
  </AppBar>
);

export default Navbar;