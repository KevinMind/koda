import React, { useState } from 'react';
import {
  Box, FormControl, FormGroup, FormLabel, Grid,
  InputLabel, OutlinedInput, Switch,
} from '@material-ui/core';

import { DateTimePicker } from '../Pickers/DatePicker';

const EventEditForm = ({ values, onChange }) => {
  const [end, setEnd] = useState(false);
  return (
    <React.Fragment>
      <FormGroup>
        <Box marginBottom={5}>
          <FormControl fullWidth>
            <FormLabel>Start Time</FormLabel>
            <DateTimePicker
              onChange={value => {
                onChange('start')(value);
                if (!end) {
                  onChange('end')(value);
                }
              }}
              value={values.start}
            />
          </FormControl>
        </Box>
        <Box marginBottom={5}>
          <FormControl fullWidth>
            <FormLabel>End Different than Start?</FormLabel>
            <Switch
              checked={end}
              onChange={({ target: { checked }}) => setEnd(checked)}
            />
          </FormControl>
        </Box>
        {end && (
          <Box marginBottom={5}>
            <FormControl fullWidth>
              <FormLabel>End Time</FormLabel>
              <DateTimePicker
                onChange={onChange('end')}
                value={values.end}
              />
            </FormControl>
          </Box>
        )}
        <Box marginBottom={5}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={6}>
              <FormControl fullWidth>
                <FormLabel>Successful?</FormLabel>
                <Switch
                  checked={values.success}
                  onChange={({ target: { checked }}) => onChange('success')(checked)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <FormLabel>Outside?</FormLabel>
                <Switch
                  checked={values.outside}
                  onChange={({ target: { checked }}) => onChange('outside')(checked)}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Box marginBottom={5}>
          <FormControl fullWidth  variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Note</InputLabel>
            <OutlinedInput
              onChange={({ target: { value }}) => onChange('note')(value)}
              value={values.note}
              labelWidth={60}
              multiline
              row={4}
            />
          </FormControl>
        </Box>
      </FormGroup>
    </React.Fragment>
  );
};

export default EventEditForm;
