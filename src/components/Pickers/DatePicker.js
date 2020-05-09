import 'date-fns';
import React from 'react';
import { format as formatDate, getMinutes, setMinutes, getHours, setHours } from 'date-fns';
import { Box, TextField, Select, Grid, FormControl, InputLabel } from '@material-ui/core';

export const DateTimePicker = ({ onChange, label, value, format }) => {
  return (
    <Grid container direction="column" style={{ width: '100%', height: '100%', minHeight: 130 }}>
      <Grid item xs>
        <TextField
          label={label}
          variant="outlined"
          fullWidth
          type="date"
          onChange={({ target: { value }}) => onChange(new Date(value))}
          value={formatDate(new Date(value), 'yyyy-MM-dd')}
        />
      </Grid>
      <Grid item container alignItems="center" spacing={2} style={{ width: '100%' }}>
        <Grid item component={FormControl} variant="outlined">
          <InputLabel htmlFor="hours">Hours</InputLabel>
          <Select
            inputProps={{
              name: 'hours',
              id: 'hours',
            }}
            native
            value={getHours(new Date(value))}
            onChange={(e) => {
              console.log({
                value,
                new: setHours(new Date(value), e.target.value),
              });
              onChange(setHours(new Date(value), e.target.value));
            }}
          >
            <option aria-label="None" value="" />
            {new Array(24).fill(null).map((_, idx) => (
              <option value={idx}>{idx}</option>
            ))}
          </Select>
        </Grid>
        <Grid item component={FormControl} variant="outlined">
          <InputLabel htmlFor="minutes">Minutes</InputLabel>
          <Select
            inputProps={{
              name: 'minutes',
              id: 'minutes',
            }}
            native
            value={getMinutes(new Date(value))}
            onChange={(e) => onChange(setMinutes(new Date(value), e.target.value))}
          >
            <option aria-label="None" value="" />
            {new Array(60).fill(null).map((_, idx) => (
              <option value={idx}>{idx}</option>
            ))}
          </Select>
        </Grid>
      </Grid>
    </Grid>
  );
};

DateTimePicker.defaultProps = {
  format: "dd/MM/yyyy"
};
