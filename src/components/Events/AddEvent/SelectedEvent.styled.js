import React from 'react';
import { Grid, Box, Chip, styled, Typography} from '@material-ui/core';

export const Container = styled(Grid)(({ theme, color }) => ({
  display: 'grid',
  gridTemplateRows: '80% 20%',
  gridColumn: '100%',
  height: 140,
}));

export const OptionContainer = styled(Box)(({
  selected, theme, color, layout,
}) => {
  return {
    height: '100%',
    border: '5px solid',
    borderRadius: theme.spacing(2),
    borderColor: color,
    background: selected ? color : 'white',
    color: selected ? 'white' : color,
    display: 'grid',
    gridTemplateRows: layout,
    gridColumn: '1fr',
  };
});

export const OptionIcon = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export const DateText = styled(Typography)(({ theme }) => {
  return {
    fontSize: 12,
  };
});

export const Chips = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const OptionInner = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    flexWrap: 'wrap',
    fontSize: 12,
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
    marginTop: theme.spacing(1),
    color: selected ? 'white' : color,
    textAlign: 'center',
  };
});
