import React, { useState, useEffect } from 'react';
import ImageIcon from '@material-ui/icons/Image';
import {
  ListItem, ListItemText, ListItemAvatar,
  Avatar, Typography, Grid, Container, List,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import withPrivateRoute from '../../components/Routes/PrivateRoute';
import { listLogs } from '../../services/log';
import ConfirmEvent from '../../components/Events/ConfirmEvent';
import EventEditForm from '../../components/Events/EditEvent';
import { updateLog, deleteLog } from '../../services/log';
import Swipeable from '../../components/Swipeable/Swipeable';
import Layout from '../../components/Layout';
import { UserNav } from '../../components/Nav';
import {navigate} from '@reach/router';
import {MoreVert, Add, List as ListIcon } from '@material-ui/icons';


const formatDate = dateJsonString => {
  const date = new Date(dateJsonString);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${day}/${month}/${year} ${hour}:${minutes}`
};

const LoadingItem = () => (
  <ListItem style={{ width: '100%' }}>
    <ListItemAvatar>
      <Skeleton variant="circle" width={40} height={40} animation="wave" />
    </ListItemAvatar>
    <ListItemText
      primary={<Skeleton variant="rect" animation="wave" style={{ marginBottom: 5 }} />}
      secondary={<Skeleton variant="rect" animation="wave" style={{ marginLeft: 5 }}/>}
    />
  </ListItem>
);

const Loading = () => (
  <List>
    <LoadingItem/>
    <LoadingItem/>
    <LoadingItem/>
    <LoadingItem/>
    <LoadingItem/>
    <LoadingItem/>
  </List>
);

const EventListItem = ({ item, onClick }) => {
  return (
    <ListItem onClick={() => onClick(item)}>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <React.Fragment>
            <Typography>
              {item.category}
            </Typography>
            <Typography>
              {formatDate(item.start)}
            </Typography>
          </React.Fragment>
        }
        secondary={
          <React.Fragment>
            <Typography>
              {item.value}
            </Typography>
          </React.Fragment>
        } />
    </ListItem>
  );
};

const Events = () => {
  const [loaded, setLoaded] = useState(false);
  const [list, setList] = useState([]);

  const [category, setCategory] = useState();
  const [value, setValue] = useState();
  const [curr, setCurr] = useState();
  const [open, setOpen] = useState(false);

  const handleEditChange = name => value => setCurr({
    ...curr,
    [name]: value,
  });

  const updateList = () => {
    setLoaded(false);
    listLogs()
      .then(setList)
      .finally(() => setLoaded(true));
  };

  useEffect(() => {
    updateList();
  }, []);

  if (!loaded) {
    return <Loading />
  }

  const handleOpen = (item) => {
    setOpen(true);
    setCategory(item.category);
    setValue(item.value);
    setCurr(item);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = (id = curr.id) => {
    deleteLog(id).then(() => {
      handleClose();
      updateList();
    });
  };
  const handleSave = () => {
    const payload = {
      start: curr.start,
      end: curr.end,
      category: curr.category,
      value: curr.value,
      outside: curr.outside,
      success: curr.success,
      note: curr.note,
    };
    updateLog(curr.id, payload).then(() => {
      handleClose();
      updateList();
    });
  };

  const handleSwipeLeft = (idx) => {
    const item = list[idx];
    if (item && item.id) {
      handleDelete(item.id)
    }
  };

  const handleSwipeRight = (idx) => {
    const item = list[idx];
    if (item) {
      console.log(item);
      handleOpen(item)
    }
  };

  return (
    <Layout>
      <ConfirmEvent
        isDeletable
        category={category}
        value={value}
        open={open}
        onCancel={handleClose}
        onDelete={handleDelete}
        onSubmit={handleSave}
      >
        {value && (
          <EventEditForm
            onChange={handleEditChange}
            values={curr}
          />
        )}
      </ConfirmEvent>
      <Layout.Content height={90}>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Swipeable
              onSwipeLeft={handleSwipeLeft}
              onSwipeRight={handleSwipeRight}
              leftContent={<div>left</div>}
              rightContent={<div>right</div>}
            >
              {list.map((item) => (
                <EventListItem
                  onDelete={handleDelete}
                  onClick={handleOpen}
                  item={item}
                />
              ))}
            </Swipeable>
          </Grid>
        </Grid>
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

export default withPrivateRoute(Events);
