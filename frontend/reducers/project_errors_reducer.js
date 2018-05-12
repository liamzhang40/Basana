import {
  RECEIVE_PROJECT,
  RECEIVE_PROJECT_ERRORS
} from '../actions/team_actions';
import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/modal_actions';

const projectErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      return action.errors;
    case RECEIVE_PROJECT:
    case OPEN_MODAL:
    case CLOSE_MODAL:
      return [];
    default:
      return state;
  }
};

export default projectErrorsReducer;
