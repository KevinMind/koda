import React from 'react';
import { Badge as MuiBadge, styled, Tabs as MuiTabs, Tab as MuiTab, withStyles } from '@material-ui/core';

export const Badge = withStyles((theme) => ({
  colorPrimary: 'red',
  badge: {
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(MuiBadge);

export const Tab = styled(MuiTab)(({ selected, color, filled, theme }) => ({
  width: 60,
  height: 70,
  borderStyle: 'dotted',
  borderWidth: selected ? 3 : 1,
  borderColor: color[500],
  borderRadius: '100%',
  background: filled ? color[500] : 'inherit',
  color: filled ? 'white' : color[500],
  marginRight: theme.spacing(2),
  transition: 'border-width 0.3s',
}));

export const Tabs = withStyles((theme) => {
  return {
    root: {
      width: '100%',
      paddingTop: theme.spacing(1),
    },
    indicator: {
      marginTop: theme.spacing(1),
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > div': {
        display: 'none',
      },
    },
  }
})((props) => <MuiTabs {...props} TabIndicatorProps={{ children: <div /> }} />);
