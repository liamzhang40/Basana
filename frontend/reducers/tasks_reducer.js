import {
  RECEIVE_TASKS,
  RECEIVE_TASK,
  REMOVE_TASK
} from '../actions/task_actions';
import { merge } from 'lodash';

const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TASKS:
      return action.tasks;
    case RECEIVE_TASK:
      const nextState = merge({}, state, { [action.task.id]: action.task });
      // debugger
      return nextState;
    case REMOVE_TASK:
      let newState = merge({}, state);
      delete newState[action.taskId];
      return newState;
    default:
      return state;
  }
};

export default tasksReducer;
