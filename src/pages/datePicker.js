import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { DateTimePicker } from '../components/Pickers/DatePicker';
import Swipeable from '../components/Swipeable/Swipeable';
import withPrivateRoute from '../components/Routes/PrivateRoute';

const IndexPage = () => {
  const [date, setDate] = useState(new Date());
  return (
    <Grid container justify="center" alignItems="center" style={{ height: '100%'}}>
      <Grid item xs={12} style={{ border: '1px solid' }}>
        <Grid
          container
          component={Swipeable}
          onSwipeLeft={alert}
          onSwipeRight={alert}
          leftContent={<div>left</div>}
          rightContent={<div>right</div>}
        >
          <Grid item banana>
            Hello
          </Grid>
          <Grid item banana={false}>
            World
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <Typography>
            Date Picker: {date.toLocaleTimeString()}
          </Typography>
        </Box>
        <Box>
          <DateTimePicker onChange={setDate} value={date} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default withPrivateRoute(IndexPage);
