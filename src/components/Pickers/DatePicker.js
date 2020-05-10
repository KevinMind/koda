import 'date-fns';
import React from 'react';
import { format as formatDate, set } from 'date-fns';
import { TextField, Grid } from '@material-ui/core';

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
      <Grid item xs>
        <TextField
          label={label}
          variant="outlined"
          fullWidth
          type="time"
          value={formatDate(new Date(value), 'HH:mm')}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => {
            const [h, m] = e.target.value.split(':');
            onChange(set(new Date(value), {
              hours: Number(h),
              minutes: Number(m),
            }));
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </Grid>
    </Grid>
  );
};

DateTimePicker.defaultProps = {
  format: "dd/MM/yyyy"
};
