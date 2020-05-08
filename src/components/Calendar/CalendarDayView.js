import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

import appointments from './data';

const ExternalViewSwitcher = ({
  currentViewName,
  onChange,
}) => (
  <RadioGroup
    aria-label="Views"
    style={{ flexDirection: 'row' }}
    name="views"
    value={currentViewName}
    onChange={onChange}
  >
    <FormControlLabel value="Day" control={<Radio />} label="Day" />
    <FormControlLabel value="3 Day" control={<Radio />} label="3 Day" />
    <FormControlLabel value="Week" control={<Radio />} label="Week" />
  </RadioGroup>
);

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
      currentViewName: 'Day',
    };

    this.currentViewNameChange = (e) => {
      this.setState({ currentViewName: e.target.value });
    };
  }

  render() {
    const { data, currentViewName } = this.state;

    return (
      <React.Fragment>
        <ExternalViewSwitcher
          currentViewName={currentViewName}
          onChange={this.currentViewNameChange}
        />

        <Paper>
          <Scheduler
            data={data}
            height={660}
          >
            <ViewState
              defaultCurrentDate="2018-07-25"
              currentViewName={currentViewName}
            />
            <DayView
              cellDuration={15}
            />
            <WeekView
              name="3 Day"
              excludedDays={[0,1,2,3]}
            />
            <WeekView />
            <Appointments />
          </Scheduler>
        </Paper>
      </React.Fragment>
    );
  }
}
