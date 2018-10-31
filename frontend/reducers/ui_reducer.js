import { combineReducers } from 'redux';
import modal from './modal_reducer';
import taskVisibility from './task_visibility_reducer.js';
import taskOrder from './task_order_reducer.js';
import dashboardBodyDisplay from './dashboard_body_display_reducer';

const uiReducer = combineReducers({
  modal,
  taskVisibility,
  taskOrder,
  dashboardBodyDisplay
});

export default uiReducer;
