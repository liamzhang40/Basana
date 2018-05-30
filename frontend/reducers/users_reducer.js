import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {
  RECEIVE_TEAM,
  RECEIVE_NEW_TEAM,
  RECEIVE_TEAM_MEMBERS
} from '../actions/team_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_TEAM_MEMBERS:
      return action.members;
    case RECEIVE_NEW_TEAM:
      const users = action.payload.users;
      return merge({}, state, users);
    default:
      return state;
  }
};

export default usersReducer;
