import React, { useState, useEffect } from 'react';
import { format, getHours, getMinutes } from 'date-fns';
import Layout from '../components/Layout';
import withPrivateRoute from '../components/Routes/PrivateRoute';
import { listLogs } from '../services/log';
import {UserNav} from '../components/Nav';
import {Add, CalendarToday, List as ListIcon, MoreVert} from '@material-ui/icons';
import {navigate} from '@reach/router';

const processEvents = data => {
  return data.map(item => {
    const date = new Date(item.start);
    return {
      date,
      hours: getHours(date),
      minutes: getMinutes(date),
      string: format(date, 'dd/MM/yyyy HH:mm'),
      item
    };
  })
};

const DashboardPage = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState(1);
  const [list, setList] = useState([]);

  useEffect(() => {
    listLogs().then((data) => setList(processEvents(data)));
  }, []);

  const handleViewChange = changed => () => setView(changed);
  return (
      <Layout Footer={
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
            Icon={CalendarToday}
            edge="start"
            onClick={() => navigate('/dashboard')}
          />
          <UserNav.Item
            Icon={MoreVert}
            edge="end"
            onClick={() => navigate('/')}
          />
        </UserNav>
      }>
        <Layout.Content>
          Hi There
        </Layout.Content>
        <Layout.Content>
          Hi There
        </Layout.Content>
        <Layout.Content>
          Hi There
        </Layout.Content>
      </Layout>
  );
};

export default withPrivateRoute(DashboardPage);
