import {createReducer} from '@reduxjs/toolkit';
import {ITasksReducerState} from '../../interfaces/reducers/tasksReducer';
import {
  setErrorAction,
  setLoadingAction,
  setTasksAction,
} from '../actions/tasksActions';

const initialState: ITasksReducerState = {
  tasks: [],
  loading: false,
  error: undefined,
};

const tasksReducer = createReducer<ITasksReducerState>(initialState, builder =>
  builder
    .addCase(setTasksAction, (store, {payload: {tasks}}) => ({
      ...store,
      tasks: tasks,
    }))
    .addCase(setLoadingAction, (store, {payload: {loading}}) => ({
      ...store,
      loading: loading,
    }))
    .addCase(setErrorAction, (store, {payload: {error}}) => ({
      ...store,
      error: error,
    })),
);

export default tasksReducer;
