import { TOGGLE_TASK_VISIBILITY } from '../actions/task_actions';

const taskVisibilityReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_TASK_VISIBILITY:
      return !state;
    default:
      return state;
  }
};

export default taskVisibilityReducer;
