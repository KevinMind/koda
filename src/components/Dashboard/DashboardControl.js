import React from 'react';
import {Button, ButtonGroup, Grid} from '@material-ui/core';

const ControlPanel = ({ onClick }) => (
  <Grid
    container
    justify="center"
    alignItems="center"
    style={{ height: '100%' }}
  >
    <Grid item component={ButtonGroup} xs={12} fullWidth>
      <Button onClick={onClick(1)}>Day</Button>
      <Button onClick={onClick(3)}>3 Day</Button>
      <Button onClick={onClick(5)}>Week</Button>
    </Grid>
  </Grid>
);

export default ControlPanel;
