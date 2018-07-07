import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import teams from './team_errors_reducer';
import projects from './project_errors_reducer';
import tasks from './task_errors_reducer';

const errorsReducer = combineReducers({
  session,
  teams,
  projects,
  tasks
});

export default errorsReducer;
