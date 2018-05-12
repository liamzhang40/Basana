import {
  RECEIVE_TEAM,
  RECEIVE_TEAM_ERRORS
} from '../actions/team_actions';
import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/modal_actions';

const teamErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TEAM_ERRORS:
      return action.errors;
    case RECEIVE_TEAM:
    case OPEN_MODAL:
    case CLOSE_MODAL:
      return [];
    default:
      return state;
  }
};

export default teamErrorsReducer;
