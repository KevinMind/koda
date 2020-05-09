import React from 'react';
import { Grid, styled, AppBar } from '@material-ui/core';

export const Container = styled(Grid)(({ hasFooter, hasHeader }) => {
  return {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    overflowY: 'scroll',
  }
});

export const Content = styled(Grid)(({
  justifyContent,
  alignItems,
}) => {
  const styles = {
    border: '1px solid',
    overflowY: 'scroll',
    overflowX: 'hidden',
  };

  if (justifyContent || alignItems) {
    styles.display = 'flex';
  }

  return styles;
});

export const Header = styled(AppBar)(({ color, theme }) => {
  return {
    border: '1px solid',
    background: color || theme.palette.background.default,
    position: 'sticky',
    top: 0,
    bottom: 'auto',
    left: 0,
    width: '100%',
  }
});

export const Footer = styled(AppBar)(({ color, theme }) => ({
  border: '1px solid',
  background: color || theme.palette.background.default,
  position: 'fixed',
  bottom: 0,
  top: 'auto',
  left: 0,
  width: '100%',
}));

