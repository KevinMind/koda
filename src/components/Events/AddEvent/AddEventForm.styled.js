import React from 'react';
import {
  styled,
  Card, CardContent, CardActions, Box, Button,
} from '@material-ui/core';

export const Container = styled(Card)(({ color }) => ({
  border: `5px solid ${color}`,
  height: '100%',
  position: 'relative',
}));

export const Pagination = styled('div')(({ theme }) => ({
  display: 'flex',
  height: theme.spacing(1),
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: theme.spacing(3),
}));

export const Tile = styled('div')(({ selected, theme }) => ({
  height: theme.spacing(1),
  width: theme.spacing(1),
  borderRadius: '100%',
  background: selected ? theme.palette.grey.A200 : 'white',
  border: '1px solid',
  borderColor: theme.palette.grey.A200,
  margin: '0 5px',
}));

export const Page = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  height: '100%',
  display: 'grid',
  gridRow: '1fr',
  gridColumn: '1fr',
}));

export const Content = styled(CardContent)(() => ({}));

export const Submit = styled(Button)(({ color }) => ({
  color: 'white',
  background: color,
}));

export const Actions = styled(CardActions)(() => ({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: 'auto',
}));
