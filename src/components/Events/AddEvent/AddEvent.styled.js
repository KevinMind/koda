import React from 'react';
import { Box, ButtonBase, Chip, styled, Typography} from '@material-ui/core';

export const OptionContainer = styled(ButtonBase)(({
  selected, theme,
}) => {
  return {
    height: 100,
    width: '100%',
    border: '2px solid',
    borderRadius: theme.spacing(1),
    borderColor: theme.palette.primary.dark,
    background: selected ? theme.palette.primary.main : 'white',
    color: selected ? 'white' : theme.palette.primary.main,
    marginBottom: 5,

  };
});

export const OptionInner = styled(Box)(({
 theme,
}) => {
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

export const OptionIcon = styled(Box)(({
  theme
}) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }
});

export const OptionChip = styled(Chip)(({
                                   theme
                                 }) => {
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
                                          selected, theme,
                                        }) => {
  return {
    paddingTop: theme.spacing(1),
    color: theme.palette.primary.main,
    fontWeight: selected ? 'bold': 'inherit',
    textAlign: 'center',
  };
});
