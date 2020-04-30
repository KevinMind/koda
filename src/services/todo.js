import API, {graphqlOperation} from '@aws-amplify/api';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';
import Auth from '@aws-amplify/auth';

export const subscribeTodos = async (next) => {
  // Subscribe to creation of Todo
  const { username: owner } = await Auth.currentAuthenticatedUser();
  const onCreate = API.graphql(
    graphqlOperation(subscriptions.onCreateTodo, { owner })
  ).subscribe({
    next,
  });

  const onDelete = API.graphql(
    graphqlOperation(subscriptions.onDeleteTodo, { owner })
  ).subscribe({
    next,
  });

  return {
    unsubscribe: () => {
      onCreate.unsubscribe();
      onDelete.unsubscribe();
    }
  }
};

export const createTodo = async (todo) => {
  await API.graphql(graphqlOperation(mutations.createTodo, {input: todo }));
};

export const listTodos = async () => {
  try {
    const { data } = await API.graphql(graphqlOperation(queries.listTodos, {limit: 50}));
    return data.listTodos.items;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const deleteTodo = async (id) => {
  await API.graphql(graphqlOperation(mutations.deleteTodo, { input:{ id } }));
};

export const getTodo = async (id) => {
  try {
    const { data } = await API.graphql(graphqlOperation(queries.getTodo, { id }));
    return data.getTodo;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const updateTodo = async (id, input) => {
  await API.graphql(graphqlOperation(mutations.updateTodo, { input: { ...input, id } }));
};
