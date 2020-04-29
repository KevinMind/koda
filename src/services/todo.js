import API, {graphqlOperation} from '@aws-amplify/api';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

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
