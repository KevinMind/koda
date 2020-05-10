import React from 'react';
import { Grid, Box, ButtonBase, Chip, styled, Typography} from '@material-ui/core';

export const RemoveIcon = styled(ButtonBase)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: 30,
  height: 30,
}));

export const SelectedTitle = styled(Typography)(() => ({
  color: 'white',
}));

export const SelectedLeft = styled('div')(() => ({
  flex: '1 0 33%',
  height: '100%',
}));
export const SelectedRight = styled('div')(() => ({
  flex: '1 0 66%',
  display: 'flex',
  alignItems: 'center',
}));

export const SelectedInner = styled('div')(() => ({
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  height: '100%',
}));

export const SelectedContainer = styled(Grid)(({ theme, color }) => ({
  background: color,
  color: 'white',
  border: '5px solid',
  borderColor: color,
  borderRadius: theme.spacing(2),
  height: '100%',
  position: 'relative',
}));

export const OptionContainer = styled(ButtonBase)(({
  selected, theme, color,
}) => {
  return {
    height: 120,
    border: '5px solid',
    borderRadius: theme.spacing(2),
    borderColor: color,
    background: 'white',
    color: selected ? 'white' : color,
  };
});

export const OptionInner = styled(Box)(() => {
  return {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
});

export const OptionIcon = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }
});

export const OptionChip = styled(Chip)(() => {
  return {
    borderColor: 'white',
    fill: 'white',
    color: 'white',
  }
});

OptionChip.defaultProps = {
  size: 'small',
};

export const OptionContent = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 2,
  }
});

OptionContent.defaultProps = {
  direction: 'row',
  justify: 'flex-start',
  alignItems: 'center'
};


export const OptionTitle = styled(Typography)(({
  color, theme,
}) => {
  return {
    paddingTop: theme.spacing(1),
    color,
    textAlign: 'center',
  };
});
