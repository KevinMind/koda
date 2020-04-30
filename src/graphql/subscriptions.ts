/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($owner: String!) {
    onCreateTodo(owner: $owner) {
      id
      name
      description
      owner
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($owner: String!) {
    onUpdateTodo(owner: $owner) {
      id
      name
      description
      owner
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($owner: String!) {
    onDeleteTodo(owner: $owner) {
      id
      name
      description
      owner
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($owner: String!) {
    onCreateEvent(owner: $owner) {
      id
      outside
      success
      startTime
      category
      subCategory
      owner
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($owner: String!) {
    onUpdateEvent(owner: $owner) {
      id
      outside
      success
      startTime
      category
      subCategory
      owner
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($owner: String!) {
    onDeleteEvent(owner: $owner) {
      id
      outside
      success
      startTime
      category
      subCategory
      owner
    }
  }
`;
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity($owner: String!) {
    onCreateActivity(owner: $owner) {
      id
      outside
      success
      startTime
      endTime
      category
      subCategory
      owner
    }
  }
`;
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity($owner: String!) {
    onUpdateActivity(owner: $owner) {
      id
      outside
      success
      startTime
      endTime
      category
      subCategory
      owner
    }
  }
`;
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity($owner: String!) {
    onDeleteActivity(owner: $owner) {
      id
      outside
      success
      startTime
      endTime
      category
      subCategory
      owner
    }
  }
`;
export const onCreateMood = /* GraphQL */ `
  subscription OnCreateMood($owner: String!) {
    onCreateMood(owner: $owner) {
      id
      outside
      label
      category
      owner
    }
  }
`;
export const onUpdateMood = /* GraphQL */ `
  subscription OnUpdateMood($owner: String!) {
    onUpdateMood(owner: $owner) {
      id
      outside
      label
      category
      owner
    }
  }
`;
export const onDeleteMood = /* GraphQL */ `
  subscription OnDeleteMood($owner: String!) {
    onDeleteMood(owner: $owner) {
      id
      outside
      label
      category
      owner
    }
  }
`;
