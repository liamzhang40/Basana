import { combineReducers } from 'redux';
import users from './users_reducer';
import teams from './teams_reducer';
import projects from './projects_reducer';
import tasks from './tasks_reducer';
import comments from './comments_reducer';
import userSearches from './user_searches_reducer';

const entitiesReducer = combineReducers({
  users,
  teams,
  projects,
  tasks,
  comments,
  userSearches
});

export default entitiesReducer;
