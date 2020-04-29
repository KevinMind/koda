import React, { useState } from 'react';
import {
  Button, Container, Grid, Typography, TextField,
  List, ListItem, ListItemText, ListItemSecondaryAction, IconButton,
  Paper, Divider,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'gatsby';
import withPrivateRoute from '../components/Routes/PrivateRoute';
import { getCurrentUser } from '../components/Auth/AppUser';
import { AppContent } from '../components/Layout';

const Profile = () => {
  const user = getCurrentUser();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = func => ({ target: { value }}) => func(value);
  const handleSubmit = () => {
    let list = [...todos, { name, description }];
    setTodos(list);
    setName('');
    setDescription('');
  };
  const handleRemove = (idx) => {
    let list = [ ...todos ];
    console.log({ idx, list });
    list.splice(idx, 1);
    setTodos(list);
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
              variant="outlined"
              name="description"
              label="description"
              value={description}
              fullWidth
              onChange={handleChange(setDescription)}
            />
          </Grid>
          <Grid item>
            <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth>
              {'Add Todo +'}
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          container
          spacing={3}
          direction="column"
          justify="space-around"
          component={List}
        >
          {todos.map((td, idx) => [
            <Grid item component={ListItem}>
              <ListItemText
                primary={`Name: ${td.name}`}
                secondary={`Desc: ${td.description}`}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => handleRemove(idx)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </Grid>,
            <Divider />
          ])}
        </Grid>
      </AppContent>
    </Container>
  );
};

export default withPrivateRoute(Profile);
