import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {
  REMOVE_USER_FROM_TEAM,
  RECEIVE_TEAM
} from '../actions/team_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case REMOVE_USER_FROM_TEAM:
      const currentUser = merge({}, state[action.userId]);
      currentUser.teamIds = currentUser.teamIds.filter(Id => Id !== action.teamId);
      return merge({}, state, { [currentUser.id]: currentUser});
    case RECEIVE_TEAM:
      
    default:
      return state;
  }
};

export default usersReducer;
