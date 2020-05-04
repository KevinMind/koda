import 'date-fns';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import RestoreIcon from '@material-ui/icons/Restore';
import { Grid, IconButton } from '@material-ui/core';

export const DatePickerContainer = ({ onChange, children }) => {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (typeof onChange === 'function') {
      onChange(date);
    }
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {children(selectedDate, handleDateChange)}
    </MuiPickersUtilsProvider>
  )
};

export const DateTimePicker = ({ onChange, label, format, value }) => {
  const handleDateChange = (date) => {
    onChange(date);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <React.Fragment>
        <Grid
          container
          spacing={2}
          alignItems="center"
        >
          <Grid item xs={3}>
            <IconButton
              variant="outlined"
              onClick={() => handleDateChange(new Date())}
              size="small"
            >
              <RestoreIcon />
            </IconButton>
          </Grid>
          <Grid item xs={9}>
            <KeyboardDatePicker
              margin="normal"
              id={label}
              label="Date"
              format={format}
              value={value}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time"
              value={value}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    </MuiPickersUtilsProvider>
  );
}

DateTimePicker.defaultProps = {
  format: "dd/MM/yyyy"
};
