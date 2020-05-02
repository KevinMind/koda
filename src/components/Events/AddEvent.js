import React, {useContext} from 'react';
import {
  FormGroup, Checkbox,
  FormControl, FormControlLabel,
} from '@material-ui/core';
import EventContext from './context';

const AddEvent = ({ options }) => {
  const { onChange, getValues, section, category } = useContext(EventContext);
  const values = getValues({ section, category });
  const handleChange = ({ target: { checked, value }}) => {
    onChange(value, checked);
  };
  return (
    <FormControl component="fieldset">
      <FormGroup>
        {options.map(option => (
          <FormControlLabel
            key={option.label}
            control={
              <Checkbox
                checked={values.includes(option.value)}
                onChange={handleChange}
                name={option.label}
              />
            }
            {...option}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default AddEvent;
