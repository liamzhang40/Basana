import {
  RECEIVE_TEAMS,
  RECEIVE_TEAM,
  RECEIVE_NEW_TEAM
} from '../actions/team_actions';
import { merge } from 'lodash';

const teamsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TEAMS:
      return action.teams;
    case RECEIVE_TEAM:
    case RECEIVE_NEW_TEAM:
      return merge({}, state, { [action.team.id]: action.team });
    default:
      return state;
  }
};

export default teamsReducer;
