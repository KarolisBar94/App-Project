import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layouts/navbar-layout/navbar-layout';
import TypographyPage from 'pages/typography-page';
import HomePage from 'pages/home-page';
import TextFieldPage from 'pages/text-field-page';
import CheckboxPage from 'pages/checkbox';
import SwitchPage from 'pages/switch';
import RatingPage from 'pages/rating';
import AutoCompletePage from 'pages/autocomplete';
import BoxPage from 'pages/layout';
import CardPage from 'pages/card';
import AccordionPage from 'pages/acordion';
import ImageListPage from 'pages/image-list';
import NavbarPage from 'pages/mui-navbar';
import LinkPage from 'pages/link';
import BreadcrumbsPage from 'pages/bread-crumbs';
import DrawerPage from 'pages/drawer';
import SpeedDialPage from 'pages/speed-dial';
import AvatarPage from 'pages/avatar';
import RadioButtonPage from '../pages/radio-button-page';
import routes from './routes';
import ButtonPage from '../pages/button-page';
import SelectPage from '../pages/select-page';
import BottomNavigationPage from '../pages/bottom-navigation';
import BadgePage from 'pages/badge';
import ListPage from 'pages/list';
import ChipPage from 'pages/chip';
import ToolTipPage from 'pages/tool-tip';
import TablePage from 'pages/table';
import AlertPage from 'pages/alert';
import SnackBarPage from 'pages/snackbar';
import DialogPage from 'pages/dialog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.TypographyPage,
        element: <TypographyPage />,
      },
      {
        path: routes.ButtonPage,
        element: <ButtonPage />,
      },
      {
        path: routes.TextFieldPage,
        element: <TextFieldPage />,
      },
      {
        path: routes.SelectPage,
        element: <SelectPage />,
      },
      {
        path: routes.RadioButtonPage,
        element: <RadioButtonPage />,
      },
      {
        path: routes.CheckboxPage,
        element: <CheckboxPage />,
      },
      {
        path: routes.SwitchPage,
        element: <SwitchPage />,
      },
      {
        path: routes.AvatarPage,
        element: <AvatarPage />,
      },
      {
        path: routes.RatingPage,
        element: <RatingPage />,
      },
      {
        path: routes.AutoCompletePage,
        element: <AutoCompletePage />,
      },
      {
        path: routes.BoxPage,
        element: <BoxPage />,
      },
      {
        path: routes.CardPage,
        element: <CardPage />,
      },
      {
        path: routes.AccordionPage,
        element: <AccordionPage />,
      },
      {
        path: routes.ImageListPage,
        element: <ImageListPage />,
      },
      {
        path: routes.NavbarPage,
        element: <NavbarPage />,
      },
      {
        path: routes.LinkPage,
        element: <LinkPage />,
      },
      {
        path: routes.BreadcrumbsPage,
        element: <BreadcrumbsPage />,
      },
      {
        path: routes.DrawerPage,
        element: <DrawerPage />,
      },
      {
        path: routes.SpeedDialPage,
        element: <SpeedDialPage />,
      },
      {
        path: routes.BottomNavigationPage,
        element: <BottomNavigationPage />,
      },
      {
        path: routes.BadgePage,
        element: <BadgePage />,
      },
      {
        path: routes.ListPage,
        element: <ListPage />,
      },
      {
        path: routes.ChipPage,
        element: <ChipPage />,
      },
      {
        path: routes.ToolTipPage,
        element: <ToolTipPage />,
      },
      {
        path: routes.TablePage,
        element: <TablePage />,
      },
      {
        path: routes.AlertPage,
        element: <AlertPage />,
      },
      {
        path: routes.SnackBarPage,
        element: <SnackBarPage />,
      },
      {
        path: routes.DialogPage,
        element: <DialogPage />,
      },
    ],
  },

]);

export default router;