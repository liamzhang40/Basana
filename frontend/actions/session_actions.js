import * as sessionAPIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_TEAM_MEMBERS = 'RECEIVE_TEAM_MEMBERS';

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

const receiveMembers = members => {
  return {
    type: RECEIVE_TEAM_MEMBERS,
    members
  };
};

export const signup = user => {
  return dispatch => {
    return sessionAPIUtil.signup(user).then(
      user => {
        return dispatch(receiveCurrentUser(user));
      },
      errors => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
  };
};

export const login = user => {
  return dispatch => {
    return sessionAPIUtil.login(user).then(
      user => {
        return dispatch(receiveCurrentUser(user));
      },
      errors => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
  };
};

export const logout = () => {
  return dispatch => {
    return sessionAPIUtil.logout().then(
      user => {
        return dispatch(logoutCurrentUser());
      },
      errors => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
  };
};

export const fetchMembers = memberIds => {
  return dispatch => {
    return sessionAPIUtil.fetchMembers(memberIds).then(
      members => {
        return dispatch(receiveMembers(members));
      }
    );
  };
};
