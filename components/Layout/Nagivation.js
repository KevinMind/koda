import React from 'react';

import { BottomNavigation, BottomNavigationAction, styled } from '@material-ui/core';
import { useRouter } from 'next/router';

import { mainRoutes } from '../../src/routes';

const Item = styled(BottomNavigationAction)({
  maxWidth: '50%',
});

const Nav = styled(BottomNavigation)({
  height: '10vh',
});

export default () => {
  const router = useRouter();
  const handleNavigate = (path) => () => router.push(path);

  return (
    <Nav
      showLabels
      value={router.pathname}
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
