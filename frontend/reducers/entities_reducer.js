import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import teamsReducer from './teams_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  teams: teamsReducer
});

export default entitiesReducer;
