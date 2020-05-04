import React, { useContext } from 'react';
import {
  Typography, Chip, Box,
  Container, ButtonBase, Grid,
  styled,
} from '@material-ui/core';
import { Add, Done, OutdoorGrill } from '@material-ui/icons';
import EventContext from './context';

const OptionContainer = styled(ButtonBase)(({
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

const OptionInner = styled(Box)(({
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

const OptionIcon = styled(Box)(({
  theme
}) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }
});

const OptionChip = styled(Chip)(({
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

const OptionContent = styled('div')(({
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


const OptionTitle = styled(Typography)(({
  selected, theme,
}) => {
  return {
    paddingTop: theme.spacing(1),
    color: theme.palette.primary.main,
    fontWeight: selected ? 'bold': 'inherit',
    textAlign: 'center',
  };
});

const Chips = ({ children }) => (
  <OptionContent>
    {React.Children.map(children, (child) => (
      <div style={{ marginRight: 5 }}>
        {child}
      </div>
    ))}
  </OptionContent>
);

const AddEvent = ({ label, onChange }) => {
  const { form, Data } = useContext(EventContext);
  return (
    <Grid
      container
      wrap
      justify="space-between"
      spacing={2}
      style={{ marginTop: 10 }}
      component={Container}
    >
      {Data
        .filter(({ category }) => category === label)
        .map(({ value, label }) => {
        const idx = form.findIndex(item => item.value === value);
        const { state } = form[idx] || { state: {} };
        return (
          <Grid item xs={6}>
            <OptionContainer
              color="red"
              selected={state.selected}
              onClick={() => onChange(value, !state.selected)}
            >
              <OptionInner>
                <OptionIcon>
                  <Add />
                </OptionIcon>
                <Chips>
                  {state.success && (
                    <OptionChip
                      icon={<Done />}
                    />
                  )}
                  {state.outside && (
                    <OptionChip
                      icon={<OutdoorGrill />}
                    />
                  )}
                </Chips>
              </OptionInner>
            </OptionContainer>
            <Grid container alignItems="center" justify="center" spacing={1}>
              <Grid item>
                <OptionTitle selected={state.selected}>
                  {label}
                </OptionTitle>
              </Grid>
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  );
};

export default AddEvent;
