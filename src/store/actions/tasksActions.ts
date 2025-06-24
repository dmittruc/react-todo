import {createAction} from '@reduxjs/toolkit';
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
