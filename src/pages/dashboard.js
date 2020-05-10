import React, { useState, useEffect } from 'react';
import { format, getHours, getMinutes, addDays, isSameDay } from 'date-fns';
import {Add, CalendarToday, List as ListIcon, MoreVert, Remove, ZoomIn, ZoomOut } from '@material-ui/icons';
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

const Cell = ({ children, height }) => (
  <div style={{
    height,
    borderBottom: '1px solid #e0e0e0',
    transition: 'height 0.3s',
    width: '100%',
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
    style={{
      borderRight: '1px solid #e0e0e0',
      padding: 0,
      height: '100%',
      width: '100%',
      borderBottom: 'none',
    }}
    xs
    {...props}
  >
    {children}
  </Grid>
);

const DashboardPage = () => {
  const [zoom, setZoom] = useState(false);
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

  const toggleZoom = () => setZoom(!zoom);

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
  const cellHeight = zoom ? 100 : 50;

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
          <Toolbar variant="dense">
            <Grid container alignItems="center">
              <Grid item xs>
                <Box style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'black',
                  fontSize: 16,
                  marginRight: 20,
                }}>
                  {dateString}
                </Box>
              </Grid>
              <Grid item>
                <ButtonGroup fullWidth>
                  <IconButton onClick={toggleZoom}>{zoom ? <ZoomOut /> : <ZoomIn />}</IconButton>
                  <IconButton onClick={decrement}><Remove /></IconButton>
                  <Box style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'black',
                    fontSize: 16,
                  }}>{view}</Box>
                  <IconButton onClick={increment}><Add /></IconButton>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Toolbar>
        }
      >
        {(Content, props) => (
          <VirtualizeSwipeableViews
            slideRenderer={({ index, key }) => {
              return (
                <Content key={key}>
                  <Grid container>
                    <Column xs={1}>
                      {new Array(24).fill(null).map((_, hourIdx) => (
                        <Cell height={cellHeight}>
                          {hourIdx}
                        </Cell>
                      ))}
                    </Column>
                    {new Array(view).fill(null).map((_, idx) => {
                      const current = addDays(date, index + idx);
                      const items = list.filter(item => isSameDay(item.date, current));
                      return (
                        <Column>
                          {new Array(24).fill(null).map((_, hourIdx) => {
                            const entries = items
                              .filter(({ hours }) => hours === hourIdx)
                              .sort((a, b) => {
                                return a.minutes - b.minutes;
                              });

                            const cats = entries.map(({ item }) => item.category);
                            const uniqueCats = Array.from(new Set(cats));
                            let data = {};
                            if (uniqueCats.length) {
                              uniqueCats.reduce((acm, cat) => {
                                acm[cat] = [...cats].filter(c => c === cat).length;
                                return acm;
                              }, data);
                            }
                            return (
                              <Cell height={cellHeight}>
                                {entries.length
                                  ? Object.keys(data).map((cat) => {
                                    return (
                                      <div style={{
                                        textOverflow: 'elipsis',
                                        color: 'white',
                                        flexDirection: 'column',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '100%',
                                        flexGrow: 1,
                                        background: Categories.find(({ label }) => label === cat)?.color[500],
                                      }}>
                                        <div>{cat}</div>
                                        <div>{data[cat]}</div>
                                      </div>
                                    )
                                  })
                                  : ' '
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
