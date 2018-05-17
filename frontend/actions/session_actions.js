import * as sessionAPIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

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

export const editProfile = user => {
  return dispatch => {
    return sessionAPIUtil.editProfile(user).then(
      user => {
        return dispatch(receiveCurrentUser(user));
      },
      errors => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
  };
};

export const editReduxProfile = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
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
