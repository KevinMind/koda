/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      owner
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      owner
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      owner
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      outside
      success
      startTime
      category
      values
      owner
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      outside
      success
      startTime
      category
      values
      owner
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      outside
      success
      startTime
      category
      values
      owner
    }
  }
`;
export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
      id
      outside
      success
      startTime
      endTime
      category
      values
      owner
    }
  }
`;
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
      id
      outside
      success
      startTime
      endTime
      category
      values
      owner
    }
  }
`;
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
      id
      outside
      success
      startTime
      endTime
      category
      values
      owner
    }
  }
`;
export const createMood = /* GraphQL */ `
  mutation CreateMood(
    $input: CreateMoodInput!
    $condition: ModelMoodConditionInput
  ) {
    createMood(input: $input, condition: $condition) {
      id
      outside
      success
      startTime
      category
      values
      owner
    }
  }
`;
export const updateMood = /* GraphQL */ `
  mutation UpdateMood(
    $input: UpdateMoodInput!
    $condition: ModelMoodConditionInput
  ) {
    updateMood(input: $input, condition: $condition) {
      id
      outside
      success
      startTime
      category
      values
      owner
    }
  }
`;
export const deleteMood = /* GraphQL */ `
  mutation DeleteMood(
    $input: DeleteMoodInput!
    $condition: ModelMoodConditionInput
  ) {
    deleteMood(input: $input, condition: $condition) {
      id
      outside
      success
      startTime
      category
      values
      owner
    }
  }
`;
