import React, { useState, useEffect } from 'react';
import {
  Button, Container, Grid, Typography, TextField,
  List, ListItem, ListItemText, ListItemSecondaryAction, IconButton,
  Divider,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'gatsby';

import withPrivateRoute from '../components/Routes/PrivateRoute';
import { getCurrentUser } from '../components/Auth/AppUser';
import { AppContent } from '../components/Layout';
import { createTodo, listTodos, deleteTodo } from '../services/todo';

const GridSkeleton = () => (
  <Grid
    item
    container
    spacing={1}
    direction="column"
    justify="space-around"
    component={List}
  >
    <Grid item component={ListItem}>
      <Skeleton shape="rect" width="100%" height="100px" animation="wave" />
    </Grid>
    <Grid item component={ListItem}>
      <Skeleton shape="rect" width="100%" height="100px" animation="wave" />
    </Grid>
    <Grid item component={ListItem}>
      <Skeleton shape="rect" width="100%" height="100px" animation="wave" />
    </Grid>
  </Grid>
);

const TodoList = ({ todos, onRemove }) => (
  <Grid
    item
    container
    spacing={3}
    direction="column"
    justify="space-around"
    component={List}
  >
    {todos.map(td => [
      <Grid item component={ListItem}>
        <ListItemText
          primary={`Name: ${td.name}`}
          secondary={`Desc: ${td.description}`}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={() => onRemove(td.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </Grid>,
      <Divider />
    ])}
  </Grid>
);

const Profile = () => {
  const user = getCurrentUser();

  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleLoading = (bool) => setTimeout(() => setIsLoading(bool), bool ? 0 : 100);

  const handleRefresh = async () => setTodos(await listTodos());
  useEffect(() => {
    handleLoading(true);
    handleRefresh()
      .finally(() => handleLoading(false));
    return () => {};
  }, []);

  const handleChange = func => ({ target: { value }}) => func(value);
  const handleReset = () => {
    setName('');
    setDescription('');
  };
  const handleSubmit = () => {
    handleLoading(true);
    return createTodo({ name, description })
      .then(async () => {
        await handleRefresh();
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        handleReset();
        handleLoading(false);
      })
  };
  const handleRemove = (id) => {
    handleLoading(true);
    deleteTodo(id)
      .then(() => {
        let list = [ ...todos ];
        const idx = list.findIndex(i => i.id === id);
        if (idx > -1) {
          list.splice(idx, 1);
        }
        setTodos(list);
      })
      .finally(() => {
        handleLoading(false);
      });
  };
  return (
    <Container>
      <AppContent>
        <Typography variant="h1">Here is the Profile Page</Typography>
        <Typography>
          Email:
          {user.email}
        </Typography>
        <Typography>
          Phone:
          {user.phone_number}
        </Typography>
        <Link to="/home">Home</Link>
        <Grid
          item
          container
          spacing={3}
          direction="column"
          justify="space-around"
          component="form"
        >
          <Grid item>
            <Typography>Add a Todo:</Typography>
            <Typography>
              name: {name}
            </Typography>
            <Typography>
              description: {description}
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              disabled={isLoading}
              variant="outlined"
              name="name"
              label="name"
              value={name}
              fullWidth
              onChange={handleChange(setName)}
            />
          </Grid>
          <Grid item>
            <TextField
              disabled={isLoading}
              variant="outlined"
              name="description"
              label="description"
              value={description}
              fullWidth
              onChange={handleChange(setDescription)}
            />
          </Grid>
          <Grid item>
            <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth disabled={isLoading}>
              {'Add Todo +'}
            </Button>
          </Grid>
        </Grid>
        {isLoading
          ? <GridSkeleton />
          : <TodoList todos={todos} onRemove={handleRemove} />
        }
      </AppContent>
    </Container>
  );
};

export default withPrivateRoute(Profile);
