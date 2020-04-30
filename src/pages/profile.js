import React, { useState } from 'react';
import {
 Container, Typography,
} from '@material-ui/core';
import { Link } from 'gatsby';

import withPrivateRoute from '../components/Routes/PrivateRoute';
import { getCurrentUser } from '../components/Auth/AppUser';
import { AppContent } from '../components/Layout';
import { createTodo } from '../services/todo';
import AddTodo from '../components/Todo/AddTodo';
import TodoList from '../components/Todo/TodoList';

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
  const user = getCurrentUser();
  return (
    <Container>
      <AppContent>
        <Typography variant="h3" coomponent="h1">Here is the Profile Page</Typography>
        <Typography>
          Email:
          {user.email}
        </Typography>
        <Typography>
          Phone:
          {user.phone_number}
        </Typography>
        <Link to="/home">Home</Link>
        <AddTodo
          name={name}
          description={description}
          onChangeName={handleChange(setName)}
          onChangeDesc={handleChange(setDescription)}
          onSubmit={handleSubmit}
        />
        <TodoList />
      </AppContent>
    </Container>
  );
};

export default withPrivateRoute(Profile);
