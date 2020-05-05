import React from 'react';
import { Paper, ButtonBase, Grid, styled } from '@material-ui/core';

export const LeftColumn = styled(Grid)(({ theme }) => {
  return {
    borderColor: theme.palette.grey,
    borderRight: '1px solid',
    width: '33%',
    justifyContent: 'space-around',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  }
});

export const RightColumn = styled(Grid)(() => {
  return {
    width: '66%',
    justifyContent: 'space-around',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  }
});

export const CenterColumn = styled(Grid)(() => {
  return {
    cursor: 'pointer',
  }
});

CenterColumn.defaultProps = {
  container: true,
  justify: 'center',
  alignItems: 'center',
};

export const Container = styled(Grid)(({ theme }) => {
  console.log(theme);
  return {
    padding: theme.spacing(2),
    borderColor: theme.palette.grey['300'],
    borderRadius: 4,
    border: '1px solid',
    '&:hover': {
      borderColor: theme.palette.grey['500'],
    }
  }
});

Container.defaultProps = {
  container: true,
};

export const ToggleButton = styled(ButtonBase)(({
theme, background }) => {
  return {
    background,
    justify: 'flex-end',
    display: 'block',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
  }
});
