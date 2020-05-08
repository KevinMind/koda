import React, { useState } from 'react';
import { navigate } from '@reach/router';
import {Add, List as ListIcon, MoreVert} from '@material-ui/icons';
import { Button, ButtonGroup, Grid, Paper } from '@material-ui/core';
import Layout from '../components/Layout';
import withPrivateRoute from '../components/Routes/PrivateRoute';
import { UserNav } from '../components/Nav';

/*

rows 1hr
columns: 1 day

 */

const ControlPanel = ({ onClick }) => (
  <Grid
    container
    justify="center"
    alignItems="center"
    style={{ height: '100%' }}
  >
    <Grid item component={ButtonGroup} xs={12} fullWidth>
      <Button onClick={onClick('day')}>Day</Button>
      <Button onClick={onClick('3day')}>3 Day</Button>
      <Button onClick={onClick('week')}>Week</Button>
    </Grid>
  </Grid>
);

const WeekContainer = ({ children }) => (
  <Grid container wrap="no-wrap" style={{
    height: '100%',
    borderTop: '1px solid',
    borderBottom: '1px solid',
  }}>
    {children}
  </Grid>
);

const DayContainer = ({ children }) => (
  <Grid
    container
    item
    direction="column"
    xs
  >
    {children}
  </Grid>
);

const HourContainer = ({ children }) => (
  <Grid item style={{ border: '1px solid' }} xs>
    {children}
  </Grid>
);

const DayContent = () => (
  <React.Fragment>
    {new Array(24).fill(null).map((_, idx) => (
      <HourContainer style={{ height: 120 }}>
        Hour: {idx}
      </HourContainer>
    ))}
  </React.Fragment>
);

const DashboardPage = () => {
  const [view, setView] = useState('day');

  const handleViewChange = changed => () => setView(changed);
  return (
    <Layout>
      <Layout.Content height={10} style={{ border: '1px solid' }}>
        <ControlPanel onClick={handleViewChange} />
      </Layout.Content>
      <Layout.Content>
        <WeekContainer>
          <DayContainer>
            <DayContent />
          </DayContainer>
          <DayContainer>
            <DayContent />
          </DayContainer>
          <DayContainer>
            <DayContent />
          </DayContainer>
        </WeekContainer>
      </Layout.Content>
      <Layout.Content height={10}>
        <UserNav>
          <UserNav.Item
            Icon={ListIcon}
            edge="start"
            onClick={() => navigate('/events')}
          />
          <UserNav.Fab
            Icon={Add}
            onClick={() => navigate('/events/add')}
          />
          <UserNav.Item
            Icon={MoreVert}
            edge="end"
            onClick={() => navigate('/')}
          />
        </UserNav>
      </Layout.Content>
    </Layout>
  );
};

export default withPrivateRoute(DashboardPage);
