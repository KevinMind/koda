import React, {useEffect, useState} from 'react';
import {navigate} from '@reach/router';
import {
  Grid, IconButton, List, ListItem, ListItemIcon,
  ListItemSecondaryAction, ListItemText,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import EditIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteTodo, listTodos, subscribeTodos} from '../../../services/todo';

const TodoList = () => {
  const [isLoaded, toggleLoaded] = useState(false);
  const [todos, setTodos] = useState([]);

  const handleUpdate = async () => setTodos(await listTodos());
  const handleEditTodo = id => navigate(`/todos/edit?id=${id}`);

  useEffect(() => {
    let sub;
    handleUpdate().then(() => toggleLoaded(true));
    subscribeTodos(handleUpdate).then(s => {
      sub = s;
    });
    return () => {
      sub && sub.unsubscribe();
    };
  }, []);

  return (
    <Grid
      item
      container
      spacing={0}
      direction="column"
      justify="space-around"
      component={List}
    >
      {!isLoaded
        ? new Array(3).fill(null).map(() => (
          <Grid item>
            <Skeleton shape="rect" width="100%" height={80} animation="wave" />
          </Grid>
        ))
        : todos.map((todo) => (
          <Grid item component={ListItem} key={todo.id}>
            <ListItemIcon>
              <IconButton edge="end" aria-label="edit" onClick={() => handleEditTodo(todo.id)}>
                <EditIcon />
              </IconButton>
            </ListItemIcon>
            <ListItemText
              primary={`Name: ${todo.name}`}
              secondary={`Desc: ${todo.description}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </Grid>
        ))}
    </Grid>
  );
};

export default TodoList;
