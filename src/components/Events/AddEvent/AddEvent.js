import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Data } from '../data';

const AddEvent = ({ label, color, children }) => {
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
        .map((item, index) => {
          return children(item, { color: color[500]});
        })
      }
    </Grid>
  );
};

export default AddEvent;
