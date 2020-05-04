import React, { useState, useEffect } from 'react';
import ImageIcon from '@material-ui/icons/Image';
import {
  ListItem, ListItemText, ListItemAvatar,
  Avatar, List, Typography, Grid, Container,
} from '@material-ui/core';
import withPrivateRoute from '../../components/Routes/PrivateRoute';

import { listLogs } from '../../services/log';
import ConfirmEvent from '../../components/Events/ConfirmEvent';
import EventEditForm from '../../components/Events/EditEvent';
import { updateLog, deleteLog } from '../../services/log';

const formatDate = dateJsonString => {
  const date = new Date(dateJsonString);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${day}/${month}/${year} ${hour}:${minutes}`
};

const EventListItem = ({ item, onClick }) => (
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
            {item.category}: {formatDate(item.start)}
          </Typography>
        </React.Fragment>
      }
      secondary={
      <React.Fragment>
        <Typography>
          {item.value}
        </Typography>
        {typeof item.outside !== 'undefined' && (
          <Typography>
            outside: {String(item.outside)}
          </Typography>
        )}
        {typeof item.outside !== 'undefined' && (
          <Typography>
            success: {String(item.success)}
          </Typography>
        )}
      </React.Fragment>
    } />
  </ListItem>
);

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
    return <div>loading...</div>
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
  const handleDelete = () => {
    deleteLog(curr.id).then(() => {
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

  return (
    <Container>
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
          <React.Fragment>
            <pre>
              {JSON.stringify(curr, 0, 2)}
            </pre>
            <EventEditForm
              onChange={handleEditChange}
              values={curr}
            />
          </React.Fragment>
        )}
      </ConfirmEvent>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <List>
            {list.map(item => (
              <EventListItem
                onClick={handleOpen}
                item={item}
              />
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withPrivateRoute(Events);
