import {
  RECEIVE_TASK,
  RECEIVE_TASK_ERRORS
} from '../actions/task_actions';
import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/modal_actions';

const taskErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TASK_ERRORS:
      return action.errors;
    case RECEIVE_TASK:
    case OPEN_MODAL:
    case CLOSE_MODAL:
      return [];
    default:
      return state;
  }
};

export default taskErrorsReducer;
