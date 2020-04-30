import React  from 'react';
import {
  FormControl, RadioGroup, Radio, FormControlLabel,
} from '@material-ui/core';

const AddEvent = ({ value, onChange }) => {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={onChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
};

export default AddEvent;
