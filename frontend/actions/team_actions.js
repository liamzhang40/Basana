import * as teamAPIUtil from '../util/team_api_util';
export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';
export const RECEIVE_NEW_TEAM = 'RECEIVE_NEW_TEAM';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const REMOVE_USER_FROM_TEAM = 'REMOVE_USER_FROM_TEAM';
export const RECEIVE_TEAM_ERRORS = 'RECEIVE_TEAM_ERRORS';

const receiveTeams = teams => {
  return {
    type: RECEIVE_TEAMS,
    teams
  };
};

// user reducer does not need to care if a team name is updated
// it should only update user state if a new team is created
const receiveNewTeam = team => {
  return {
    type: RECEIVE_NEW_TEAM,
    team
  };
};

const receiveTeam = team => {
  return {
    type: RECEIVE_TEAM,
    team
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_TEAM_ERRORS,
    errors
  };
};

const removeUserFromTeam = (userId, teamId) => {
  return {
    type: REMOVE_USER_FROM_TEAM,
    userId,
    teamId
  };
};

export const fetchTeams = () => {
  return dispatch => {
    return teamAPIUtil.fetchTeams().then(
      teams => {
        return dispatch(receiveTeams(teams));
      }
    );
  };
};

export const fetchTeam = id => {
  return dispatch => {
    return teamAPIUtil.fetchTeam(id).then(
      team => {
        return dispatch(receiveTeam(team));
      },
      errors => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
  };
};

export const createTeam = team => {
  return dispatch => {
    return teamAPIUtil.createTeam(team).then(
      team => {
        return dispatch(receiveNewTeam(team));
      },
      errors => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
  };
};

export const updateTeam = team => {
  return dispatch => {
    return teamAPIUtil.updateTeam(team).then(
      team => {
        return dispatch(receiveTeam(team));
      },
      errors => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
  };
};

export const removeMember = teamId => {
  return dispatch => {
    return teamAPIUtil.removeMember(teamId).then(
      ({ userId }) => {
        return dispatch(removeUserFromTeam(userId, teamId));
      }
    );
  };
};
