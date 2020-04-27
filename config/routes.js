import {
  Add, Home, AccountCircle, Settings,
} from '@material-ui/icons';

export const mainRoutes = [
  {
    name: 'home',
    pathname: '/',
    icon: Home,
  },
  {
    name: 'add',
    pathname: '/add',
    icon: Add,
  },
];

export const adminRoutes = [
  {
    name: 'profile',
    pathname: '/profile',
    icon: AccountCircle,
  },
  {
    name: 'account',
    pathname: '/my-account',
    icon: Settings,
  },
];
