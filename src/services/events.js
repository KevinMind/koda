import API, {graphqlOperation} from '@aws-amplify/api';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

export const createEvent = async (event) => {
  await API.graphql(graphqlOperation(mutations.createEvent, {input: event }));
};

export const createActivity = async (event) => {
  await API.graphql(graphqlOperation(mutations.createActivity, {input: event }));
};

export const createMood = async (event) => {
  await API.graphql(graphqlOperation(mutations.createMood, {input: event }));
};

export const listEvents = async () => {
  try {
    const { data } = await API.graphql(graphqlOperation(queries.listEvents, {limit: 50}));
    return data.listEvents.items;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const listActivitys = async () => {
  try {
    const { data } = await API.graphql(graphqlOperation(queries.listActivitys, {limit: 50}));
    return data.listActivitys.items;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const listMoods = async () => {
  try {
    const { data } = await API.graphql(graphqlOperation(queries.listMoods, {limit: 50}));
    return data.listMoods.items;
  } catch (e) {
    console.log(e);
    return [];
  }
};
