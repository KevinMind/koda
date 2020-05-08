import React from 'react';
import { Box, ButtonBase, Chip, styled, Typography} from '@material-ui/core';

export const OptionContainer = styled(ButtonBase)(({
  selected, theme, color,
}) => {
  return {
    height: 100,
    width: 100,
    border: '5px solid',
    borderRadius: theme.spacing(2),
    borderColor: color,
    background: selected ? color : 'white',
    color: selected ? 'white' : color,
    marginBottom: 5,

  };
});

export const OptionInner = styled(Box)(() => {
  return {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
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

export const OptionContent = styled('div')(({
                                       theme
                                     }) => {
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
