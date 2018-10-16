import { combineReducers } from 'redux';
import modal from './modal_reducer';
import taskVisibility from './task_visibility_reducer.js';
import taskOrder from './task_order_reducer.js';

const uiReducer = combineReducers({
  modal,
  taskVisibility,
  taskOrder
});

export default uiReducer;
