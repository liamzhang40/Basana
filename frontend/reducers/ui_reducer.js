import { combineReducers } from 'redux';
import modal from './modal_reducer';
import taskVisibility from './task_visibility_reducer.js';

const uiReducer = combineReducers({
  modal,
  taskVisibility
});

export default uiReducer;
