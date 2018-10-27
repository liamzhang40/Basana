import {
  RECEIVE_TASKS,
  RECEIVE_TASK,
  REMOVE_TASK
} from '../actions/task_actions';
import { merge, mergeWith } from 'lodash';

const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_TASKS:
      return action.tasks;
    case RECEIVE_TASK:
      const customizer = (objValue, srcValue) => {
        if (Array.isArray(objValue)) {
          return srcValue;
        }
      };
      return mergeWith({}, state, { [action.task.id]: action.task }, customizer);
    case REMOVE_TASK:
      let newState = merge({}, state);
      delete newState[action.taskId];
      return newState;
    default:
      return state;
  }
};

export default tasksReducer;
