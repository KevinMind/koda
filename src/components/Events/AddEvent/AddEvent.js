import React, { useContext } from 'react';
import { Container, Grid } from '@material-ui/core';
import { Add, Done, OutdoorGrill } from '@material-ui/icons';
import EventContext from '../context';

import * as Styled from './AddEvent.styled';

const Chips = ({ children }) => (
  <Styled.OptionContent>
    {React.Children.map(children, (child) => (
      <div style={{ marginRight: 5 }}>
        {child}
      </div>
    ))}
  </Styled.OptionContent>
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
            <Styled.OptionContainer
              color="red"
              selected={state.selected}
              onClick={() => onChange(value, !state.selected)}
            >
              <Styled.OptionInner>
                <Styled.OptionIcon>
                  <Add />
                </Styled.OptionIcon>
                <Chips>
                  {state.success && (
                    <Styled.OptionChip
                      icon={<Done />}
                    />
                  )}
                  {state.outside && (
                    <Styled.OptionChip
                      icon={<OutdoorGrill />}
                    />
                  )}
                </Chips>
              </Styled.OptionInner>
            </Styled.OptionContainer>
            <Grid container alignItems="center" justify="center" spacing={1}>
              <Grid item>
                <Styled.OptionTitle selected={state.selected}>
                  {label}
                </Styled.OptionTitle>
              </Grid>
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  );
};

export default AddEvent;
