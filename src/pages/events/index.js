import React, { useState, useEffect } from 'react';
import { ListItem, ListItemText, ListItemAvatar, List } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import {navigate} from '@reach/router';
import { MoreVert, Add, List as ListIcon, CalendarToday } from '@material-ui/icons';

import withPrivateRoute from '../../components/Routes/PrivateRoute';
import { listLogs } from '../../services/log';
import ConfirmEvent from '../../components/Events/ConfirmEvent';
import EventEditForm from '../../components/Events/EditEvent';
import { updateLog, deleteLog } from '../../services/log';
import Layout from '../../components/Layout';
import { UserNav } from '../../components/Nav';
import { EventList, EventListItem } from '../../components/Events/EventList';
import { Categories } from '../../components/Events/data';

const LoadingItem = () => (
  <ListItem style={{ width: '100%' }}>
    <ListItemAvatar>
      <Skeleton variant="circle" width={40} height={40} animation="wave" />
    </ListItemAvatar>
    <ListItemText
      primary={
        <React.Fragment>
          <Skeleton variant="rect" animation="wave" style={{ marginBottom: 5 }} />
          <Skeleton variant="rect" animation="wave" style={{ marginBottom: 5 }} />
        </React.Fragment>
      }
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

const Events = () => {
  const [loaded, setLoaded] = useState(false);
  const [list, setList] = useState([]);
  const [curr, setCurr] = useState();

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

  const handleOpen = (item) => setCurr(item);
  const handleClose = () => setCurr();

  const handleDelete = (id = curr.id) => {
    deleteLog(id).then(() => {
      const idx = list.findIndex(item => item.id === id);
      const newList = [...list];
      newList.splice(idx, 1);
      setList(newList);
      handleClose();
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
    if (item?.id) {
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
      {curr && (
        <ConfirmEvent
          isDeletable
          category={curr.category}
          value={curr.value}
          open={!!curr}
          onCancel={handleClose}
          onDelete={() => handleDelete(curr.id)}
          onSubmit={handleSave}
        >
          <EventEditForm
            onChange={handleEditChange}
            values={curr}
          />
        </ConfirmEvent>
      )}
      <Layout.Content height={90}>
        {loaded
        ? (
            <EventList
              onSwipeLeft={handleSwipeLeft}
              onSwipeRight={handleSwipeRight}
            >
              {list.map((item) => {
                const { color } = Categories.find(cat => cat.label === item.category);
                return (
                  <EventListItem
                    color={color}
                    onDelete={handleDelete}
                    onClick={handleOpen}
                    item={item}
                  />
                )
              })}
            </EventList>
          )
        : <Loading />
        }
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

export default withPrivateRoute(Events);
