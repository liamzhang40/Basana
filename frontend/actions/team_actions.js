import * as teamAPIUtil from '../util/team_api_util';
export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';
export const RECEIVE_NEW_TEAM = 'RECEIVE_NEW_TEAM';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const RECEIVE_TEAM_ERRORS = 'RECEIVE_TEAM_ERRORS';
export const RECEIVE_TEAM_MEMBERS = 'RECEIVE_TEAM_MEMBERS';

const receiveTeams = teams => {
  return {
    type: RECEIVE_TEAMS,
    teams
  };
};

// user reducer does not need to care if a team name is updated
// it should only update user state if a new team is created
const receiveNewTeam = payload => {
  return {
    type: RECEIVE_NEW_TEAM,
    payload
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

const receiveMembers = members => {
  return {
    type: RECEIVE_TEAM_MEMBERS,
    members
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

//fix this
export const removeMember = teamId => {
  return dispatch => {
    return teamAPIUtil.removeMember(teamId).then(
      (payload) => {
        return dispatch(receiveNewTeam(payload));
      }
    );
  };
};
//fix this!!!

export const addMembers = team => {
  return dispatch => {
    return teamAPIUtil.addMembers(team).then(
      (payload) => {
        // will contain both team and members info
        return dispatch(receiveNewTeam(payload));
      }
    );
  };
};

export const fetchMembers = id => {
  return dispatch => {
    return teamAPIUtil.fetchMembers(id).then(
      members => {
        return dispatch(receiveMembers(members));
      }
    );
  };
};
