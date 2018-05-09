import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import teamErrorsReducer from './team_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  teams: teamErrorsReducer
});

export default errorsReducer;
