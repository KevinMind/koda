import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, TextField } from '@material-ui/core';

const AddTodo = ({ name, description, onChangeName, onChangeDesc, onSubmit }) => {
  return (
    <Grid
      item
      container
      spacing={3}
      direction="column"
      justify="space-around"
      component="form"
    >
      <Grid item>
        <TextField
          variant="outlined"
          name="name"
          label="name"
          value={name}
          fullWidth
          onChange={onChangeName}
        />
      </Grid>
      <Grid item>
        <TextField
          variant="outlined"
          name="description"
          label="description"
          value={description}
          fullWidth
          onChange={onChangeDesc}
        />
      </Grid>
      <Grid item>
        <Button onClick={onSubmit} variant="contained" color="primary" fullWidth>
          {'Add Todo +'}
        </Button>
      </Grid>
    </Grid>
  );
};

AddTodo.defaultProps = {
  name: '',
  description: '',
};

AddTodo.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  onChangeDesc: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default AddTodo;
