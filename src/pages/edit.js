import React, { useState, useEffect } from 'react';
import { useLocation, navigate } from '@reach/router';
import { Button, Container, Typography } from '@material-ui/core';

import withPrivateRoute from '../components/Routes/PrivateRoute';
import { AppContent } from '../components/Layout';
import { updateTodo, getTodo } from '../services/todo';
import AddTodo from '../components/Todo/AddTodo';

const Edit = () => {
  const [isLoaded, setLoaded] = useState(false);
  const { search } = useLocation();
  const [initial, setInitial] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleBack = () => navigate(-1);

  useEffect(() => {
    const id = new URLSearchParams(search).get('id');
    getTodo(id)
      .then((todo) => {
        setInitial(todo);
        setName(todo.name);
        setDescription(todo.description);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  const handleChange = func => ({ target: { value }}) => func(value);

  const handleSubmit = () => {
    return updateTodo(initial.id, { name, description })
      .finally(() => {
        handleBack();
      })
  };

  if (!isLoaded) {
    return (
      <div>
        loading...
      </div>
    );
  }
  return (
    <Container>
      <AppContent>
        <Typography variant="h1">Edit todo</Typography>
        <Typography>ID: {initial.id}</Typography>
        <Button onClick={handleBack}>Back</Button>
        <AddTodo
          name={name}
          description={description}
          onChangeName={handleChange(setName)}
          onChangeDesc={handleChange(setDescription)}
          onSubmit={handleSubmit}
        />
      </AppContent>
    </Container>
  );
};

export default withPrivateRoute(Edit);
