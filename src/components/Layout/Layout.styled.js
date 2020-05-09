import React from 'react';
import { Grid, styled, AppBar } from '@material-ui/core';

export const Container = styled('div')(({ height }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    minHeight: height,
  }
});

export const Content = styled('div')(({
  justifyContent,
  alignItems,
}) => {
  const styles = {
    height: '100%',
    flex: 1,
  };

  if (justifyContent || alignItems) {
    styles.display = 'flex';
  }

  return styles;
});

export const Header = styled(AppBar)(({ color, theme }) => {
  return {
    background: color || theme.palette.background.default,
    position: 'sticky',
    top: 0,
    bottom: 'auto',
    left: 0,
    width: '100%',
  }
});

export const Footer = styled(AppBar)(({ color, theme }) => ({
  background: color || theme.palette.background.default,
  position: 'fixed',
  bottom: 0,
  top: 'auto',
  left: 0,
  width: '100%',
}));

