import React from 'react';

import { BottomNavigation, BottomNavigationAction, styled } from '@material-ui/core';
import { useLocation, navigate } from '@reach/router';

import { mainRoutes } from '../../config/routes';

const Item = styled(BottomNavigationAction)({
  maxWidth: '50%',
});

const Nav = styled(BottomNavigation)({
  height: '10vh',
});

export default () => {
  const location = useLocation();
  const handleNavigate = (path) => () => navigate(path);

  return (
    <Nav
      showLabels
      value={location.pathname}
    >
      {mainRoutes.map(({ name, pathname, icon: Icon }) => (
        <Item
          key={name}
          label={name}
          value={pathname}
          icon={<Icon />}
          onClick={handleNavigate(pathname)}
        />
      ))}
    </Nav>
  );
};
