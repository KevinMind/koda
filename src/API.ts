/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id?: string | null,
};

export type CreateEventInput = {
  id?: string | null,
  outside?: boolean | null,
  success: boolean,
  startTime: string,
  category: string,
  values: Array< string >,
};

export type ModelEventConditionInput = {
  outside?: ModelBooleanInput | null,
  success?: ModelBooleanInput | null,
  startTime?: ModelStringInput | null,
  category?: ModelStringInput | null,
  values?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateEventInput = {
  id: string,
  outside?: boolean | null,
  success?: boolean | null,
  startTime?: string | null,
  category?: string | null,
  values?: Array< string > | null,
};

export type DeleteEventInput = {
  id?: string | null,
};

export type CreateActivityInput = {
  id?: string | null,
  outside?: boolean | null,
  success: boolean,
  startTime: string,
  endTime: string,
  category: string,
  values: Array< string >,
};

export type ModelActivityConditionInput = {
  outside?: ModelBooleanInput | null,
  success?: ModelBooleanInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  category?: ModelStringInput | null,
  values?: ModelStringInput | null,
  and?: Array< ModelActivityConditionInput | null > | null,
  or?: Array< ModelActivityConditionInput | null > | null,
  not?: ModelActivityConditionInput | null,
};

export type UpdateActivityInput = {
  id: string,
  outside?: boolean | null,
  success?: boolean | null,
  startTime?: string | null,
  endTime?: string | null,
  category?: string | null,
  values?: Array< string > | null,
};

export type DeleteActivityInput = {
  id?: string | null,
};

export type CreateMoodInput = {
  id?: string | null,
  outside?: boolean | null,
  success: boolean,
  startTime: string,
  category: string,
  values: Array< string >,
};

export type ModelMoodConditionInput = {
  outside?: ModelBooleanInput | null,
  success?: ModelBooleanInput | null,
  startTime?: ModelStringInput | null,
  category?: ModelStringInput | null,
  values?: ModelStringInput | null,
  and?: Array< ModelMoodConditionInput | null > | null,
  or?: Array< ModelMoodConditionInput | null > | null,
  not?: ModelMoodConditionInput | null,
};

export type UpdateMoodInput = {
  id: string,
  outside?: boolean | null,
  success?: boolean | null,
  startTime?: string | null,
  category?: string | null,
  values?: Array< string > | null,
};

export type DeleteMoodInput = {
  id?: string | null,
};

export type CreateLogInput = {
  id?: string | null,
  category: string,
  value: string,
  start: string,
  end?: string | null,
  success: boolean,
  outside?: boolean | null,
  note?: string | null,
};

export type ModelLogConditionInput = {
  category?: ModelStringInput | null,
  value?: ModelStringInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  success?: ModelBooleanInput | null,
  outside?: ModelBooleanInput | null,
  note?: ModelStringInput | null,
  and?: Array< ModelLogConditionInput | null > | null,
  or?: Array< ModelLogConditionInput | null > | null,
  not?: ModelLogConditionInput | null,
};

export type UpdateLogInput = {
  id: string,
  category?: string | null,
  value?: string | null,
  start?: string | null,
  end?: string | null,
  success?: boolean | null,
  outside?: boolean | null,
  note?: string | null,
};

export type DeleteLogInput = {
  id?: string | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  outside?: ModelBooleanInput | null,
  success?: ModelBooleanInput | null,
  startTime?: ModelStringInput | null,
  category?: ModelStringInput | null,
  values?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null,
  outside?: ModelBooleanInput | null,
  success?: ModelBooleanInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  category?: ModelStringInput | null,
  values?: ModelStringInput | null,
  and?: Array< ModelActivityFilterInput | null > | null,
  or?: Array< ModelActivityFilterInput | null > | null,
  not?: ModelActivityFilterInput | null,
};

export type ModelMoodFilterInput = {
  id?: ModelIDInput | null,
  outside?: ModelBooleanInput | null,
  success?: ModelBooleanInput | null,
  startTime?: ModelStringInput | null,
  category?: ModelStringInput | null,
  values?: ModelStringInput | null,
  and?: Array< ModelMoodFilterInput | null > | null,
  or?: Array< ModelMoodFilterInput | null > | null,
  not?: ModelMoodFilterInput | null,
};

export type ModelLogFilterInput = {
  id?: ModelIDInput | null,
  category?: ModelStringInput | null,
  value?: ModelStringInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  success?: ModelBooleanInput | null,
  outside?: ModelBooleanInput | null,
  note?: ModelStringInput | null,
  and?: Array< ModelLogFilterInput | null > | null,
  or?: Array< ModelLogFilterInput | null > | null,
  not?: ModelLogFilterInput | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    owner: string | null,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    owner: string | null,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    owner: string | null,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent:  {
    __typename: "Event",
    id: string,
    outside: boolean | null,
    success: boolean,
    startTime: string,
    category: string,
    values: Array< string >,
    owner: string | null,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent:  {
    __typename: "Event",
    id: string,
    outside: boolean | null,
    success: boolean,
    startTime: string,
    category: string,
    values: Array< string >,
    owner: string | null,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent:  {
    __typename: "Event",
    id: string,
    outside: boolean | null,
    success: boolean,
    startTime: string,
    category: string,
    values: Array< string >,
    owner: string | null,
  } | null,
};

export type CreateActivityMutationVariables = {
  input: CreateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type CreateActivityMutation = {
  createActivity:  {
    __typename: "Activity",
    id: string,
    outside: boolean | null,
    success: boolean,
    startTime: string,
    endTime: string,
    category: string,
    values: Array< string >,
    owner: string | null,
  } | null,
};

export type UpdateActivityMutationVariables = {
  input: UpdateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type UpdateActivityMutation = {
  updateActivity:  {
    __typename: "Activity",
    id: string,
    outside: boolean | null,
    success: boolean,
    startTime: string,
    endTime: string,
    category: string,
    values: Array< string >,
    owner: string | null,
  } | null,
};

export type DeleteActivityMutationVariables = {
  input: DeleteActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type DeleteActivityMutation = {
  deleteActivity:  {
    __typename: "Activity",
    id: string,
    outside: boolean | null,
    success: boolean,
    startTime: string,
    endTime: string,
    category: string,
    values: Array< string >,
    owner: string | null,
  } | null,
};

export type CreateMoodMutationVariables = {
  input: CreateMoodInput,
  condition?: ModelMoodConditionInput | null,
};

export type CreateMoodMutation = {
  createMood:  {
    __typename: "Mood",
    id: string,
    outside: boolean | null,
    success: boolean,
    startTime: string,
    category: string,
    values: Array< string >,
    owner: string | null,
  } | null,
};

export type UpdateMoodMutationVariables = {
  input: UpdateMoodInput,
  condition?: ModelMoodConditionInput | null,
};

export type UpdateMoodMutation = {
  updateMood:  {
    __typename: "Mood",
    id: string,
    outside: boolean | null,
    success: boolean,
    startTime: string,
    category: string,
    values: Array< string >,
    owner: string | null,
  } | null,
};

export type DeleteMoodMutationVariables = {
  input: DeleteMoodInput,
  condition?: ModelMoodConditionInput | null,
};

export type DeleteMoodMutation = {
  deleteMood:  {
    __typename: "Mood",
    id: string,
    outside: boolean | null,
    success: boolean,
    startTime: string,
    category: string,
    values: Array< string >,
    owner: string | null,
  } | null,
};

export type CreateLogMutationVariables = {
  input: CreateLogInput,
  condition?: ModelLogConditionInput | null,
};

export type CreateLogMutation = {
  createLog:  {
    __typename: "Log",
    id: string,
    category: string,
    value: string,
    start: string,
    end: string | null,
    success: boolean,
    outside: boolean | null,
    note: string | null,
    owner: string | null,
  } | null,
};

export type UpdateLogMutationVariables = {
  input: UpdateLogInput,
  condition?: ModelLogConditionInput | null,
};

export type UpdateLogMutation = {
  updateLog:  {
    __typename: "Log",
    id: string,
    category: string,
    value: string,
    start: string,
    end: string | null,
    success: boolean,
    outside: boolean | null,
    note: string | null,
    owner: string | null,
  } | null,
};

export type DeleteLogMutationVariables = {
  input: DeleteLogInput,
  condition?: ModelLogConditionInput | null,
};

export type DeleteLogMutation = {
  deleteLog:  {
    __typename: "Log",
    id: string,
    category: string,
    value: string,
    start: string,
    end: string | null,
    success: boolean,
    outside: boolean | null,
    note: string | null,
    owner: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    owner: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description: string | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent:  {
    __typename: "Event",
    id: string,
    outside: boolean | null,
    success: boolean,
    startTime: string,
    category: string,
    values: Array< string >,
    owner: string | null,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      outside: boolean | null,
      success: boolean,
      startTime: string,
      category: string,
      values: Array< string >,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetActivityQueryVariables = {
  id: string,
};

export type GetActivityQuery = {
  getActivity:  {
    __typename: "Activity",
    id: string,
    outside: boolean | null,
    success: boolean,
    startTime: string,
    endTime: string,
    category: string,
    values: Array< string >,
    owner: string | null,
  } | null,
};

export type ListActivitysQueryVariables = {
  filter?: ModelActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActivitysQuery = {
  listActivitys:  {
    __typename: "ModelActivityConnection",
    items:  Array< {
      __typename: "Activity",
      id: string,
      outside: boolean | null,
      success: boolean,
      startTime: string,
      endTime: string,
      category: string,
      values: Array< string >,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMoodQueryVariables = {
  id: string,
};

export type GetMoodQuery = {
  getMood:  {
    __typename: "Mood",
    id: string,
    outside: boolean | null,
    success: boolean,
    startTime: string,
    category: string,
    values: Array< string >,
    owner: string | null,
  } | null,
};

export type ListMoodsQueryVariables = {
  filter?: ModelMoodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMoodsQuery = {
  listMoods:  {
    __typename: "ModelMoodConnection",
    items:  Array< {
      __typename: "Mood",
      id: string,
      outside: boolean | null,
      success: boolean,
      startTime: string,
      category: string,
      values: Array< string >,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetLogQueryVariables = {
  id: string,
};

export type GetLogQuery = {
  getLog:  {
    __typename: "Log",
    id: string,
    category: string,
    value: string,
    start: string,
    end: string | null,
    success: boolean,
    outside: boolean | null,
    note: string | null,
    owner: string | null,
  } | null,
};

export type ListLogsQueryVariables = {
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogsQuery = {
  listLogs:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      category: string,
      value: string,
      start: string,
      end: string | null,
      success: boolean,
      outside: boolean | null,
      note: string | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  owner: string,
};

export type OnCreateTodoSubscription = {
  onCreateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    owner: string | null,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  owner: string,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    owner: string | null,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  owner: string,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    owner: string | null,
  } | null,
};

export type OnCreateEventSubscriptionVariables = {
  owner: string,
};

export type OnCreateEventSubscription = {
  onCreateEvent:  {
    __typename: "Event",
    id: string,
    outside: boolean | null,
    success: boolean,
    startTime: string,
    category: string,
    values: Array< string >,
    owner: string | null,
  } | null,
};

export type OnUpdateEventSubscriptionVariables = {
  owner: string,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent:  {
    __typename: "Event",
    id: string,
    outside: boolean | null,
    success: boolean,
    startTime: string,
    category: string,
    values: Array< string >,
    owner: string | null,
  } | null,
};

export type OnDeleteEventSubscriptionVariables = {
  owner: string,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent:  {
    __typename: "Event",
    id: string,
    outside: boolean | null,
    success: boolean,
    startTime: string,
    category: string,
    values: Array< string >,
    owner: string | null,
  } | null,
};

export type OnCreateActivitySubscriptionVariables = {
  owner: string,
};

export type OnCreateActivitySubscription = {
  onCreateActivity:  {
    __typename: "Activity",
    id: string,
    outside: boolean | null,
    success: boolean,
    startTime: string,
    endTime: string,
    category: string,
    values: Array< string >,
    owner: string | null,
  } | null,
};

export type OnUpdateActivitySubscriptionVariables = {
  owner: string,
};

export type OnUpdateActivitySubscription = {
  onUpdateActivity:  {
    __typename: "Activity",
    id: string,
    outside: boolean | null,
    success: boolean,
    startTime: string,
    endTime: string,
    category: string,
    values: Array< string >,
    owner: string | null,
  } | null,
};

export type OnDeleteActivitySubscriptionVariables = {
  owner: string,
};

export type OnDeleteActivitySubscription = {
  onDeleteActivity:  {
    __typename: "Activity",
    id: string,
    outside: boolean | null,
    success: boolean,
    startTime: string,
    endTime: string,
    category: string,
    values: Array< string >,
    owner: string | null,
  } | null,
};

export type OnCreateMoodSubscriptionVariables = {
  owner: string,
};

export type OnCreateMoodSubscription = {
  onCreateMood:  {
    __typename: "Mood",
    id: string,
    outside: boolean | null,
    success: boolean,
    startTime: string,
    category: string,
    values: Array< string >,
    owner: string | null,
  } | null,
};

export type OnUpdateMoodSubscriptionVariables = {
  owner: string,
};

export type OnUpdateMoodSubscription = {
  onUpdateMood:  {
    __typename: "Mood",
    id: string,
    outside: boolean | null,
    success: boolean,
    startTime: string,
    category: string,
    values: Array< string >,
    owner: string | null,
  } | null,
};

export type OnDeleteMoodSubscriptionVariables = {
  owner: string,
};

export type OnDeleteMoodSubscription = {
  onDeleteMood:  {
    __typename: "Mood",
    id: string,
    outside: boolean | null,
    success: boolean,
    startTime: string,
    category: string,
    values: Array< string >,
    owner: string | null,
  } | null,
};

export type OnCreateLogSubscriptionVariables = {
  owner: string,
};

export type OnCreateLogSubscription = {
  onCreateLog:  {
    __typename: "Log",
    id: string,
    category: string,
    value: string,
    start: string,
    end: string | null,
    success: boolean,
    outside: boolean | null,
    note: string | null,
    owner: string | null,
  } | null,
};

export type OnUpdateLogSubscriptionVariables = {
  owner: string,
};

export type OnUpdateLogSubscription = {
  onUpdateLog:  {
    __typename: "Log",
    id: string,
    category: string,
    value: string,
    start: string,
    end: string | null,
    success: boolean,
    outside: boolean | null,
    note: string | null,
    owner: string | null,
  } | null,
};

export type OnDeleteLogSubscriptionVariables = {
  owner: string,
};

export type OnDeleteLogSubscription = {
  onDeleteLog:  {
    __typename: "Log",
    id: string,
    category: string,
    value: string,
    start: string,
    end: string | null,
    success: boolean,
    outside: boolean | null,
    note: string | null,
    owner: string | null,
  } | null,
};
