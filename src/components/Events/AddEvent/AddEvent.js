import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Data } from '../data';

const AddEvent = ({ label, children }) => {
  return (
    <Grid
      container
      wrap
      justify="space-between"
      spacing={2}
      style={{ marginTop: 10 }}
      component={Container}
    >
      {Data
        .filter(({ category }) => category === label)
        .map((item) => {
          return children(item);
        })
      }
    </Grid>
  );
};

export default AddEvent;
