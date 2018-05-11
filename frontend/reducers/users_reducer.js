import { merge } from 'lodash';
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_TEAM_MEMBERS
 } from '../actions/session_actions';
import {
  REMOVE_USER_FROM_TEAM,
  RECEIVE_NEW_TEAM
} from '../actions/team_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_TEAM_MEMBERS:
      return action.members;
    // needs to be fixed
    case REMOVE_USER_FROM_TEAM:
      const currentUser = merge({}, state[action.userId]);
      currentUser.teamIds = currentUser.teamIds.filter(id => id !== action.teamId);
      return merge({}, state, { [currentUser.id]: currentUser});
    case RECEIVE_NEW_TEAM:
      const memberIds = action.team.memberIds;
      const usersToMerge = {};
      memberIds.forEach(id => {
        if (state[id]) {
          const newUser = merge({},state[id]);
          newUser.teamIds.push(action.team.id);
          usersToMerge[id] = newUser;
        }
      });
      return merge({}, state, usersToMerge);
    default:
      return state;
  }
};

export default usersReducer;
