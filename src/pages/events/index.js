import React, { useState, useEffect } from 'react';
import { ListItem, ListItemText, ListItemAvatar, List,
  AppBar, Toolbar, IconButton, Button,
} from '@material-ui/core';
import { format as formatDate, isSameDay } from 'date-fns';
import { Skeleton } from '@material-ui/lab';
import {navigate} from '@reach/router';
import { MoreVert, Add, List as ListIcon, CalendarToday, Edit, Close, Delete } from '@material-ui/icons';

import withPrivateRoute from '../../components/Routes/PrivateRoute';
import { listLogs } from '../../services/log';
import ConfirmEvent from '../../components/Events/ConfirmEvent';
import EventEditForm from '../../components/Events/EditEvent';
import { updateLog, deleteLog } from '../../services/log';
import Layout from '../../components/Layout';
import { UserNav } from '../../components/Nav';
import { EventList, EventListItem } from '../../components/Events/EventList';
import { Categories } from '../../components/Events/data';
import Dialog from '../../components/Dialog';
import { DatePicker } from '../../components/Pickers/DatePicker';

const Header = ({ onDone, value }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  const handleDone = ()=> {
    setOpen(false);
    onDone(date);
  };

  return (
    <React.Fragment>
      <Dialog animation="fade" open={open}>
        <Dialog.Title>
          <IconButton onClick={toggle}>
            <Close />
          </IconButton>
        </Dialog.Title>
        <Dialog.Content style={{ padding: 30 }}>
          <DatePicker value={date} onChange={setDate} />
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            fullWidth
            onClick={handleDone}
            variant="contained"
            color="primary"
          >
            Done
          </Button>
        </Dialog.Actions>
      </Dialog>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggle}>
            <Edit />
          </IconButton>
          {value && [
            <div>
              Date: {formatDate(new Date(value), 'dd/MM/yyyy')}
            </div>,
            <IconButton onClick={() => onDone()}>
              <Delete />
            </IconButton>
          ]}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

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

const processList = (events) => events.map(({ start, end, ...rest }) => ({
  start: new Date(start),
  end: new Date(end),
  ...rest,
})).sort((a, b) => b.start - a.start);

const Events = () => {
  const [date, setDate] = useState();
  const [loaded, setLoaded] = useState(false);
  const [list, setList] = useState([]);
  const [curr, setCurr] = useState();

  const updateList = () => {
    setLoaded(false);
    listLogs()
      .then(data => setList(processList(data)))
      .catch(() => alert('tell kevin something is wrong'))
      .finally(() => setLoaded(true));
  };

  useEffect(() => {
    updateList();
  }, []);

  const handleEditChange = name => value => {
    setCurr({
      ...curr,
      [name]: value,
    });
  };

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
      handleOpen(item)
    }
  };

  return (
    <React.Fragment>
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
      <Layout
        Header={
          <Header
            onDone={setDate}
            value={date}
          />
        }
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
      >
        <Layout.Content>
          {loaded
            ? (
              <EventList
                onSwipeLeft={handleSwipeLeft}
                onSwipeRight={handleSwipeRight}
              >
                {list
                  .filter(({ start }) => {
                    console.log({ date, start });
                    return date ? isSameDay(start, date) : true;

                  })
                  .map((item) => {
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
      </Layout>
    </React.Fragment>
  );
};

export default withPrivateRoute(Events);
