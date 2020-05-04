import API, {graphqlOperation} from '@aws-amplify/api';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

export const createLog = async (event) => {
  await API.graphql(graphqlOperation(mutations.createLog, {input: event }));
};

export const updateLog = async (id, input) => {
  await API.graphql(graphqlOperation(mutations.updateLog, { input: { ...input, id } }));
};

export const deleteLog = async (id) => {
  await API.graphql(graphqlOperation(mutations.deleteLog, { input:{ id } }));
};

export const listLogs = async () => {
  try {
    const { data } = await API.graphql(graphqlOperation(queries.listLogs, {limit: 50}));
    return data.listLogs.items;
  } catch (e) {
    console.log(e);
    return [];
  }
};
