import React from 'react';
import { AppBar, Toolbar, type Breakpoint } from '@mui/material';
import routes from 'navigation/routes';
import NavbarMobileMenu from './nvabar-mobile-menu';
import type LinkData from './link-data';
import NavbarDesktopMenu from './navabr-desktop-menu';

const linksData: LinkData[] = [
  { link: routes.HomePage, text: 'Home' },
];

const presentationalPagesData = [
  { link: routes.TypographyPage, text: 'Typography' },
  { link: routes.LinkPage, text: 'Link' },
  { link: routes.BreadcrumbsPage, text: 'Breadcrumbs' },
  { link: routes.SpeedDialPage, text: 'Speed Dial' },
  { link: routes.AvatarPage, text: 'Avatar' },
  { link: routes.RatingPage, text: 'Rating' },
];

const controlsPagesData = [
  { link: routes.ButtonPage, text: 'Button' },
  { link: routes.TextFieldPage, text: 'Text Field' },
  { link: routes.SelectPage, text: 'Select' },
  { link: routes.RadioButtonPage, text: 'Radios' },
  { link: routes.CheckboxPage, text: 'Checkbox' },
  { link: routes.AutoCompletePage, text: 'AutoComplete' },
  { link: routes.SwitchPage, text: 'Switch' },
];

const wrapperPagesData = [
  { link: routes.BoxPage, text: 'Box' },
  { link: routes.CardPage, text: 'Card' },
  { link: routes.ImageListPage, text: 'Image List' },
  { link: routes.DrawerPage, text: 'Drawer' },
  { link: routes.NavbarPage, text: 'Navbar' },
];

const statefullPagesData = [
  { link: routes.BottomNavigationPage, text: 'Bottom Navigation' },
  { link: routes.AccordionPage, text: 'Accordion' },
  { link: routes.BadgePage, text: 'Badge' },
  { link: routes.ListPage, text: 'List' },
  { link: routes.ChipPage, text: 'Chip' },
  { link: routes.ToolTipPage, text: 'Tool Tip' },
  { link: routes.TablePage, text: 'Table' },
  { link: routes.AlertPage, text: 'Alert' },



];
const expandBreakpoint: Breakpoint = 'lg';

const Navbar = () => (
  <AppBar position="sticky">
    <Toolbar sx={{ justifyContent: { xs: 'flex-end', [expandBreakpoint]: 'flex-start' } }}>
      <NavbarDesktopMenu
        expandBreakpoint={expandBreakpoint}
        linksData={linksData}
      />
      <NavbarMobileMenu
        expandBreakpoint={expandBreakpoint}
        linksData={linksData}
        linksGroups={[
          {
            title: 'Presentational',
            linksData: presentationalPagesData,
          },
          {
            title: 'Controls',
            linksData: controlsPagesData,
          },
          {
            title: 'Wrappers',
            linksData: wrapperPagesData,
          },
          {
            title: 'Statefull',
            linksData: statefullPagesData,
          },
        ]}
      />
    </Toolbar>
  </AppBar>
);

export default Navbar;