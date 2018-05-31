import {
  RECEIVE_USER_SEARCH,
  CLEAR_USER_SEARCH
 } from '../actions/session_actions';

const userSearchesReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_SEARCH:
      return action.users;
    case CLEAR_USER_SEARCH:
      return {};
    default:
      return state;
  }
};

export default userSearchesReducer;
