import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchTasksApi} from '../../api/tasksApi';
import {
  ISetErrorAction,
  ISetLoadingAction,
  ISetTasksAction,
} from '../../interfaces/actions/tasksActions';

export const setLoadingAction = createAction<ISetLoadingAction>(
  'tasks/setLoadingAction',
);

export const setTasksAction = createAction<ISetTasksAction>(
  'tasks/setTasksAction',
);

export const setErrorAction = createAction<ISetErrorAction>(
  'tasks/setErrorAction',
);

export const tasksAsyncAction = createAsyncThunk(
  'tasks/tasksAsyncAction',
  async (_, {dispatch}) => {
    try {
      dispatch(setLoadingAction({loading: true}));
      const res = await fetchTasksApi();
      const tasks = res.tasks;
      dispatch(setTasksAction({tasks: tasks}));
      dispatch(setErrorAction({error: undefined}));
    } catch (e: any) {
      dispatch(setErrorAction({error: e}));
      console.log('Error/tasksAsyncAction:', e);
    } finally {
      dispatch(setLoadingAction({loading: false}));
    }
  },
);
