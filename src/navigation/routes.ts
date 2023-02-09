const routes = {
  HomePage: '/',
  TypographyPage: '/typography',
  ButtonPage: '/button',
  TextFieldPage: '/textfield',
  SelectPage: '/select',
  CheckMarkPage:'/checkmark',
  RadioButtonPage: '/radios',
  CheckboxPage: '/checkbox',
  SwitchPage: '/switch',
  RatingPage: '/rating',
  AutoCompletePage: '/autocomplete',
  BoxPage: '/box',
  CardPage: '/card',
  AccordionPage: '/accordion',
  ImageListPage: '/imagelist',
  NavbarPage: '/navbar',
  LinkPage: '/link',
  BreadcrumbsPage: '/breadcrumbs',
  DrawerPage: '/drawer',
  SpeedDialPage: '/speedDial',
  BottomNavigationPage: '/bottomNavigation',
  AvatarPage: '/avatar',
  BadgePage: '/badge',
  ListPage: '/list',
  ChipPage: '/chip',
  ToolTipPage: '/tooltip',
  TablePage: '/table',
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;