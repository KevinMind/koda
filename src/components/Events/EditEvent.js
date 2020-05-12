import React, { useState } from 'react';
import {
  Box, FormControl, FormGroup, FormLabel, Grid,
  InputLabel, OutlinedInput, Switch, Select, styled,
} from '@material-ui/core';

import { DateTimePicker } from '../Pickers/DatePicker';

const Field = styled(FormControl)(() => ({
  width: '100%'
}));

export const SwitchControl = ({ value, label, onChange }) => (
  <Field fullWidth size="small">
    <FormLabel>{label}</FormLabel>
    <Switch
      checked={value}
      onChange={({ target: { checked }}) => onChange(checked)}
    />
  </Field>
);

export const TimeControl = ({ value, onChange, label }) => (
  <FormControl fullWidth size="small">
    <FormLabel>{label}</FormLabel>
    <DateTimePicker
      onChange={onChange}
      value={value}
    />
  </FormControl>
);

export const DurationControl = ({ value, onChange, label }) => (
  <FormControl fullWidth variant="outlined" size="small">
    <FormLabel>{label}</FormLabel>
    <Select
      native
      value={value}
      onChange={({ target: { value }}) => onChange(value)}
    >
      {new Array(4 * 6)
        .fill(null)
        .map((_, idx) => (
          <option value={idx * 15}>{String(idx * 15)}</option>
        ))}
    </Select>
  </FormControl>
);

export const TextAreaControl = ({ value, onChange, label }) => (
  <FormControl fullWidth  variant="outlined">
    <InputLabel htmlFor="outlined-adornment-amount">{label}</InputLabel>
    <OutlinedInput
      onChange={({ target: { value }}) => onChange(value)}
      value={value}
      labelWidth={60}
      multiline
      row={4}
    />
  </FormControl>
);

const EventEditForm = ({ values, onChange }) => {
  const [end, setEnd] = useState(false);
  return (
    <React.Fragment>
      <FormGroup>
        <Box marginBottom={5}>
          <TimeControl
            label="Start Time"
            onChange={onChange('start')}
            value={values.start}
          />
        </Box>
        <Box marginBottom={5}>
          <SwitchControl
            label="End Different than Start?"
            checked={end}
            onChange={setEnd}
          />
        </Box>
        {end && (
          <Box marginBottom={5}>
            <TimeControl
              label="End Time"
              onChange={onChange('end')}
              value={values.end}
            />
          </Box>
        )}
        <Box marginBottom={5}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={6}>
              <SwitchControl
                label="Successful?"
                value={values.success}
                onChange={onChange('success')}
              />
            </Grid>
            <Grid item xs={6}>
              <SwitchControl
                label="Outside?"
                value={values.outside}
                onChange={onChange('outside')}
              />
            </Grid>
          </Grid>
        </Box>
        <Box marginBottom={5}>
          <TextAreaControl
            label="Note"
            value={values.note}
            onChange={onChange('note')}
          />
        </Box>
      </FormGroup>
    </React.Fragment>
  );
};

export default EventEditForm;
