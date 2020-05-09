import React, { useState, useEffect } from 'react';
import { format, getHours, getMinutes, addDays, isSameDay } from 'date-fns';
import {Add, CalendarToday, List as ListIcon, MoreVert, Remove } from '@material-ui/icons';
import {navigate} from '@reach/router';
import { Toolbar, ButtonGroup, IconButton, Box, Grid, Paper } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';

import Layout from '../components/Layout';
import withPrivateRoute from '../components/Routes/PrivateRoute';
import { listLogs } from '../services/log';
import { UserNav } from '../components/Nav';
import { Categories } from '../components/Events/data';

const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));

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

const Cell = ({ children }) => (
  <div style={{
    height: 50,
    borderBottom: '1px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    {children}
  </div>
);

const Column = ({ children, ...props }) => (
  <Grid
    item
    component={Paper}
    style={{
      height: '100%',
      width: '100%',
      border: '1px solid',
      borderBottom: 'none',
    }}
    xs
    {...props}
  >
    {children}
  </Grid>
);

const DashboardPage = () => {
  const [dateIndex, setDateIndex] = useState(0);
  const [view, setView] = useState(1);
  const [list, setList] = useState([]);

  useEffect(() => {
    listLogs().then((data) => setList(processEvents(data)));
  }, []);

  const increment = () => {
    if (view < 3) {
      setView(view + 1);
    }
  };
  const decrement = () => {
    if (view > 1) {
      setView(view - 1);
    }
  };

  const nextDay = () => setDateIndex(dateIndex + view);
  const prevDay = () => setDateIndex(dateIndex - view);

  const handleSwipe = (next, prev) => {
    if (next > prev) {
      nextDay();
    } else {
      prevDay();
    }
  };

  const date = new Date();
  const dateFormat = 'dd/MM/yyyy';
  const dateString = format(addDays(date, dateIndex), dateFormat);

  return (
      <Layout
        Footer={
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
        }
        Header={
          <Toolbar>
            <ButtonGroup fullWidth>
              <IconButton onClick={prevDay}><Remove /></IconButton>
              <Box style={{
                border: '1px solid',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
                fontSize: 20,
              }}>{dateString}</Box>
              <IconButton onClick={nextDay}><Add /></IconButton>
            </ButtonGroup>
            <ButtonGroup fullWidth>
              <IconButton onClick={decrement}><Remove /></IconButton>
              <Box style={{
                border: '1px solid',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
                fontSize: 20,
              }}>{view}</Box>
              <IconButton onClick={increment}><Add /></IconButton>
            </ButtonGroup>
          </Toolbar>
        }
      >
        {(Content, props) => (
          <VirtualizeSwipeableViews
            index={dateIndex}
            slideRenderer={({ index, key }) => {
              return (
                <Content key={key}>
                  <Grid container spacing={2} justify="space-around" style={{ height: '100%', width: '100%' }}>
                    <Column xs={1}>
                      {new Array(23).fill(null).map((_, hourIdx) => (
                        <Cell>
                          {hourIdx}
                        </Cell>
                      ))}
                    </Column>
                    {new Array(view).fill(null).map((_, idx) => {
                      const current = addDays(date, index + idx);
                      const items = list.filter(item => isSameDay(item.date, current));
                      return (
                        <Column>
                          {new Array(23).fill(null).map((_, hourIdx) => {
                            const entries = items
                              .filter(({ hours }) => hours === hourIdx)
                              .sort((a, b) => {
                                console.log({ a, b });
                                return a.minutes - b.minutes;
                              });
                            console.log(entries);
                            return (
                              <Cell>
                                {entries.length
                                  ? entries.map(({ item }) => {
                                    return (
                                      <div style={{
                                        height: '100%',
                                        flexGrow: 1,
                                        background: Categories.find(({ label }) => label === item.category)?.color[500],
                                      }}>
                                        {'i'}
                                      </div>
                                    )
                                  })
                                  : 'none'
                                }
                              </Cell>
                            )
                          })}
                        </Column>
                      )
                    })}
                  </Grid>
                </Content>
              )
            }}
            onChangeIndex={handleSwipe}
            containerStyle={{
              height: '100%',
              minHeight: props.minHeight,
              width: '100%',
            }}
            style={{ height: '100%' }}
          />
        )}

      </Layout>
  );
};

export default withPrivateRoute(DashboardPage);
