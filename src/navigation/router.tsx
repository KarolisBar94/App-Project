import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from 'pages/home-page';
import TypographyPage from 'pages/typography-page';
import ButtonPage from 'pages/button-page';
import RadioButtonPage from 'pages/radio-button-page';
import TextFieldPage from 'pages/text-field-page';
import SelectPage from 'pages/select-page';
import ImageListPage from 'pages/image-list';
import NavBarPage from 'pages/mui-navbar';
import LinkPages from 'pages/link';
import BreadCrumbsPage from 'pages/bread-crumbs';
import DrawerPage from 'pages/drawer';
import SpeedDialPage from 'pages/speed-dial';
import BottomNavigationPage from 'pages/bottom-navigation';
import AvatarPage from 'pages/avatar';
import CheckmarkPage from 'pages/checkmark-page';
import NavbarLayout from 'components/layouts/navbar-layout';
import routes from './routes';

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
        path: routes.CheckmarksPage,
        element: <CheckmarkPage />,
      },
      {
        path: routes.RadioButtonsPage,
        element: <RadioButtonPage />,
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
        path: routes.ImageListPage,
        element: <ImageListPage />,
      },
      {
        path: routes.NavBarPage,
        element: <NavBarPage />,
      },
      {
        path: routes.LinkPages,
        element: <LinkPages />,
      },
      {
        path: routes.BreadCrumbsPage,
        element: <BreadCrumbsPage />,
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
        path: routes.AvatarPage,
        element: <AvatarPage />,
      },
    ],
  },
]);

export default router;
