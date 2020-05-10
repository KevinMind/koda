import React from 'react';
import { Box, ButtonBase, Chip, styled, Typography} from '@material-ui/core';

export const OptionContainer = styled(ButtonBase)(({
  selected, theme, color,
}) => {
  return {
    height: 120,
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
  color, theme, selected,
}) => {
  return {
    paddingTop: theme.spacing(1),
    color: selected ? 'white': color,
    textAlign: 'center',
  };
});
