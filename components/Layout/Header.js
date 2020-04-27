import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, navigate } from '@reach/router';
import {
  AppBar, Toolbar, IconButton, Button,
  Menu, MenuItem, styled, ListItemIcon, Typography,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import { adminRoutes } from '../../config/routes';

const Wrapper = styled(AppBar)({
  height: '10vh',
  position: 'fixed',
  top: 0,
});

const Header = styled(Toolbar)({
  justifyContent: 'space-between',
  height: '100%',
});

const HeaderMenu = ({ onClick, pathname }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (val) => () => {
    setAnchorEl(null);
    if (val) {
      onClick(val);
    }
  };

  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose()}
      >
        {adminRoutes.map(({ pathname: elPathname, name, icon: Icon }) => (
          <MenuItem
            selected={elPathname === pathname}
            onClick={handleClose(elPathname)}
          >
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <Typography>
              {name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

HeaderMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default () => {
  const location = useLocation();
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Wrapper>
      <Header>
        <IconButton onClick={() => handleNavigate('/')}>
          Home
        </IconButton>
        {false
          ? <Button color="inherit">Login</Button>
          : <HeaderMenu onClick={handleNavigate} pathname={location.pathname} />}
      </Header>
    </Wrapper>
  );
};
