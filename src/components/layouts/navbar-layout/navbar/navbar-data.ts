import routes from 'navigation/routes';
import { type Breakpoint } from '@mui/material';
import type LinkData from './link-data';

export const linksData: LinkData[] = [
  { link: routes.HomePage, text: 'Home' },
];

export const linksGroups = [
  {
    title: 'Presentational',
    linksData: [
      { link: routes.TypographyPage, text: 'Typography' },
      { link: routes.LinkPage, text: 'Link' },
      { link: routes.BreadcrumbsPage, text: 'Breadcrumbs' },
      { link: routes.SpeedDialPage, text: 'Speed Dial' },
      { link: routes.AvatarPage, text: 'Avatar' },
      { link: routes.RatingPage, text: 'Rating' },
      { link: routes.SnackBarPage, text: 'Snack Bar' },
      { link: routes.DialogPage, text: 'Dialog' },
      { link: routes.ProgressPage, text: 'Progress' },
      { link: routes.SkeletonPage, text: 'Skeleton' }, 
      { link: routes.LoadingButtonPage, text: 'Loading' },       




    ],
  },
  {
    title: 'Controls',
    linksData: [
      { link: routes.ButtonPage, text: 'Button' },
      { link: routes.TextFieldPage, text: 'Text Field' },
      { link: routes.SelectPage, text: 'Select' },
      { link: routes.RadioButtonPage, text: 'Radios' },
      { link: routes.CheckboxPage, text: 'Checkbox' },
      { link: routes.AutoCompletePage, text: 'AutoComplete' },
      { link: routes.SwitchPage, text: 'Switch' },
    ],
  },
  {
    title: 'Wrappers',
    linksData: [
      { link: routes.BoxPage, text: 'Box' },
      { link: routes.CardPage, text: 'Card' },
      { link: routes.ImageListPage, text: 'Image List' },
      { link: routes.DrawerPage, text: 'Drawer' },
      { link: routes.NavbarPage, text: 'Navbar' },
    ],
  },
  {
    title: 'Statefull',
    linksData: [
      { link: routes.BottomNavigationPage, text: 'Bottom Navigation' },
      { link: routes.AccordionPage, text: 'Accordion' },
      { link: routes.AlertPage, text: 'Alert' },
      { link: routes.TablePage, text: 'Table' },
      { link: routes.ToolTipPage, text: 'Tool' },
      { link: routes.BadgePage, text: 'Badge' },
      { link: routes.ChipPage, text: 'Chip' },
      { link: routes.ListPage, text: 'List' },
      







    ],
  },
];

export const expandBreakpoint: Breakpoint = 'lg';