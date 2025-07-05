import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './authReducer';
import tasksReducer from './tasksReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  auth: authReducer,
});

export default rootReducer;
