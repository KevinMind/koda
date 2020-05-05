import 'date-fns';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Alarm, Edit } from '@material-ui/icons';
import { Typography, Grid } from '@material-ui/core';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';

import * as Styled from './DatePicker.styled';
import EditDate from './EditDate';

const Left = ({ onChange }) => (
  <Styled.ToggleButton
    onClick={onChange}
    background="blue"
  >
    <Typography>
      Now
    </Typography>
    <Alarm />
  </Styled.ToggleButton>
);

const Right = ({ onStart }) => (
  <Styled.ToggleButton
    onClick={onStart}
    background="green"
  >
    <Typography>
      Edit
    </Typography>
    <Edit />
  </Styled.ToggleButton>
);

export const DateTimePicker = ({ onChange, label, value, format }) => {
  const[active, setActive] = useState(false);
  const startEdit = () => setActive(true);
  const endEdit = () => setActive(false);
  const setTimeNow = () => onChange(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <EditDate
        onEnd={endEdit}
        active={active}
        onChange={onChange}
        value={value}
        label={label}
        format={format}
      />
      <SwipeableList>
        <SwipeableListItem
          swipeLeft={{
            content: <Left onChange={setTimeNow} />,
            action: setTimeNow,
          }}
          swipeRight={{
            content: <Right onStart={startEdit} /> ,
            action: startEdit,
          }}
          onSwipeProgress={console.log}
        >
          <Styled.Container>
            <Styled.CenterColumn onClick={startEdit}>
              <Grid item component={Typography} xs={12}>
                {value.toLocaleString()}
              </Grid>
            </Styled.CenterColumn>
          </Styled.Container>
        </SwipeableListItem>
      </SwipeableList>
    </MuiPickersUtilsProvider>
  );

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <EditDate
        onEnd={endEdit}
        active={active}
        onChange={onChange}
        value={value}
        label={label}
        format={format}
      />
      <Styled.Container active={active}>
        <Styled.LeftColumn>
          <Styled.ToggleButton onClick={() => onChange(new Date())} bordered>
            <Typography>
              Now
            </Typography>
            <Alarm />
          </Styled.ToggleButton>
          <Styled.ToggleButton onClick={startEdit}>
            <Typography>
              Edit
            </Typography>
            <Edit />
          </Styled.ToggleButton>
        </Styled.LeftColumn>
        <Styled.RightColumn>
          <Typography>
            {value.toLocaleString()}
          </Typography>
        </Styled.RightColumn>
      </Styled.Container>
    </MuiPickersUtilsProvider>
  );
};

DateTimePicker.defaultProps = {
  format: "dd/MM/yyyy"
};
