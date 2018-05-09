import {
  RECEIVE_TEAM,
  RECEIVE_TEAM_ERRORS
} from '../actions/team_actions';
import { merge } from 'lodash';

const teamErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TEAM_ERRORS:
    debugger
      return action.errors;
    case RECEIVE_TEAM:
      return [];
    default:
      return state;
  }
};

export default teamErrorsReducer;
