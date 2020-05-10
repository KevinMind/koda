import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Data } from '../data';

const AddEvent = ({ label, color, children }) => {
  return (
    <Grid
      container
      wrap="wrap"
      justify="space-between"
      style={{ marginTop: 10, padding: 0 }}
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
