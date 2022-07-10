import { combineReducers } from 'redux';
import { perReducer } from './perReducer';
import { tasksReducer } from './tasksReducer';

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  per: perReducer,
});
