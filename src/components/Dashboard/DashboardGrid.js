import React from 'react';
import { format } from 'date-fns';
import { Grid } from '@material-ui/core';
import Swipeable from 'react-swipeable-views';

export const HourContainer = ({ children }) => (
  <Grid
    item
    container
    style={{ border: '1px solid' }}
    justify="center"
    alignItems="center"
    xs
  >
    {children}
  </Grid>
);

export const DayContainer = ({ children, date }) => (
  <Grid
    container
    item
    direction="column"
    xs
  >
    <HourContainer>
      {format(date, 'dd/MM')}
    </HourContainer>
    {React.Children.map(children, child => (
      <HourContainer>
        {child}
      </HourContainer>
    ))}
  </Grid>
);

export const TimeContainer = () => (
  <Grid
    container
    item
    direction="column"
    xs={1}
  >
    <HourContainer style={{ height: 120 }}>
      {''}
    </HourContainer>
    {new Array(24).fill(null).map((_, idx) => (
      <HourContainer style={{ height: 120 }} key={`${idx}-key`}>
        {idx}
      </HourContainer>
    ))}
  </Grid>
);

export const WeekContainer = ({ children }) => (
  <Grid container wrap="no-wrap" style={{
    height: '100%',
  }}>
    {children}
  </Grid>
);

export default ({ index, onChangeIndex, children }) => (
  <Swipeable
    containerStyle={{
      position: 'relative',
      height: '100%',
      width: '100%',
    }}
    style={{ height: '100%' }}
    index={index}
    onChangeIndex={onChangeIndex}
  >
    {children}
  </Swipeable>
);
