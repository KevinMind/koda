import React from 'react';
import { Toolbar, IconButton, Fab, AppBar, styled } from '@material-ui/core';

export const Container = styled(AppBar)(() => ({
  top: 'auto',
  bottom: 0,
  position: 'fixed',
  backgroundColor: 'inherit',
}));

export const Inner = Toolbar;

export const MenuItem = IconButton;

export const FabItem = styled(Fab)(() => ({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
}));

export const Spacer = styled('div')(() => ({
  flexGrow: 1,
}));
