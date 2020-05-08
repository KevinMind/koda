import React from 'react';
import { Typography, Button } from '@material-ui/core';
import Tabs  from '../Tabs/Tabs';

const CalendarDateSelect = () => (
  <Tabs>
    {({ tab, selectTab}) => (
        <React.Fragment>
          <Typography>idx: {tab}</Typography>
          <Button onClick={(e) => selectTab(e, tab-1)}>
            Dec
          </Button>
          <Button onClick={(e) => selectTab(e, tab+1)}>
            Inc
          </Button>
        </React.Fragment>
    )}

  </Tabs>
);

export default CalendarDateSelect;
