import React, { useState } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import withPrivateRoute from '../../components/Routes/PrivateRoute';
import { AppContent } from '../../components/Layout';
import { createTodo } from '../../services/todo';
import AddTodo from '../../components/Todo/AddTodo';
import TodoList from '../../components/Todo/TodoList';

const Profile = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = func => ({ target: { value }}) => func(value);
  const handleReset = () => {
    setName('');
    setDescription('');
  };
  const handleSubmit = () => {
    return createTodo({ name, description })
      .finally(() => {
        handleReset();
      })
  };
  return (
    <Container>
      <AppContent>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <Typography variant="h3" component="h1">
              Todos
            </Typography>
          </Grid>
          <Grid item>
            <AddTodo
              name={name}
              description={description}
              onChangeName={handleChange(setName)}
              onChangeDesc={handleChange(setDescription)}
              onSubmit={handleSubmit}
            />
          </Grid>
          <Grid item>
            <TodoList />
          </Grid>
        </Grid>
      </AppContent>
    </Container>
  );
};

export default withPrivateRoute(Profile);
