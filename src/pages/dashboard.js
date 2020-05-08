import React, { useState, useEffect } from 'react';
import { format, addDays, getHours, getMinutes, isSameDay } from 'date-fns';
import { navigate } from '@reach/router';
import {Add, CalendarToday, List as ListIcon, MoreVert} from '@material-ui/icons';
import Layout from '../components/Layout';
import withPrivateRoute from '../components/Routes/PrivateRoute';
import { UserNav } from '../components/Nav';
import { listLogs } from '../services/log';

import {
  DayContainer,
  WeekContainer,
  DashboardControl,
  TimeContainer,
  DashboardInfo,
} from '../components/Dashboard';

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

const Cell = ({ items }) => (
  <div style={{
    textAlign: 'center',
    width: '100%',
    height: '100%',
    background: items.length > 0 ? 'green' : 'white',
    color: items.length === 0 ? 'green' : 'white',
  }}>
    {items.length}
  </div>
);

const DashboardPage = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState(1);
  const [list, setList] = useState([]);

  useEffect(() => {
    listLogs().then((data) => setList(processEvents(data)));
  }, []);

  const handleViewChange = changed => () => setView(changed);
  return (
      <Layout>
        <Layout.Content height={10}>
          <DashboardControl onClick={handleViewChange} />
        </Layout.Content>
        <Layout.Content height={5} position="sticky" top={0}>
          <DashboardInfo value={date} />
        </Layout.Content>
        <Layout.Content style={{ paddingBottom: 50 }}>
          <WeekContainer>
            <TimeContainer />
            {new Array(view).fill(null).map((_, idx) => {
              const today = addDays(date, idx);
              const entries = list.filter(item => isSameDay(item.date, today));
              console.log({ entries, list, today });
              return (
                <DayContainer key={`date-${idx}`} date={today}>
                  {new Array(24).fill(null).map((_, hourIdx) => {
                    entries.forEach(item => {
                      console.log({
                        hour: item.hours,
                        hourIdx,
                        match: item.hours === hourIdx,
                      });
                    });
                    return (
                      <Cell items={entries.filter(item => item.hours === hourIdx)} />
                    )
                  })}
                </DayContainer>
              )
            })}
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
        </Layout.Content>
      </Layout>
  );
};

export default withPrivateRoute(DashboardPage);
