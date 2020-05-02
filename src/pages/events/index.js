import React, { useState, useEffect } from 'react';
import ImageIcon from '@material-ui/icons/Image';
import {
  ListItem, ListItemText, ListItemAvatar,
  Avatar, List, Typography, Grid, Tabs, Tab,
  Container,
} from '@material-ui/core';
import withPrivateRoute from '../../components/Routes/PrivateRoute';

import Sections from '../../components/Events/data';
import { listEvents, listActivitys, listMoods } from '../../services/events';

const formatDate = dateJsonString => {
  const date = new Date(dateJsonString);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${day}/${month}/${year} ${hour}:${minutes}`
};

const EventListItem = ({
  category,
  startTime,
  success,
  outside,
  values,
}) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <ImageIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={
        <React.Fragment>
          <Typography>
            {category}: {formatDate(startTime)}
          </Typography>
        </React.Fragment>
      }
      secondary={
      <React.Fragment>
        {Array.isArray(values) && (
          <Typography>
            {values.join(', ')}
          </Typography>
        )}
        {typeof outside !== 'undefined' && (
          <Typography>
            outside: {String(outside)}
          </Typography>
        )}
        {typeof outside !== 'undefined' && (
          <Typography>
            success: {String(success)}
          </Typography>
        )}
      </React.Fragment>
    } />
  </ListItem>
);

const Events = () => {
  const [tab, setTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [list, setList] = useState([]);

  const onFetch = (idx) => {
    let func = Promise.resolve();
    const label = Sections[idx].label;
    switch (label) {
      case 'Events':
        func = listEvents;
        break;
      case 'Activities':
        func = listActivitys;
        break;
      case 'Moods':
        func = listMoods;
    }
    return func()
      .then(result => {
        setList(result);
      })
      .finally(() => {
        setLoaded(true);
      });
  };

  const onChange = (event, newValue) => {
    setLoaded(false);
    setTab(newValue);
    onFetch(newValue)
  };

  useEffect(() => {
    onChange({}, 0);
  }, []);

  if (!loaded) {
    return <div>loading...</div>
  }

  return (
    <Container>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Tabs value={tab} onChange={onChange}>
            {Sections.map(({ label }) => (
              <Tab label={label} key={label} />
            ))}
          </Tabs>
          <List>
            {list.map(item => (
              <EventListItem {...item} />
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withPrivateRoute(Events);
