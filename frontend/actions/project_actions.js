import * as projectAPIUtil from '../util/project_api_util';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

const receiveProjects = projects => {
  return {
    type: RECEIVE_PROJECTS,
    projects
  };
};

const receiveProject = project => {
  return {
    type: RECEIVE_PROJECT,
    project
  };
};

const receiveErros = erros => {
  return {
    type: RECEIVE_TEAM_ERRORS,
    errors
  };
};

const deleteProject = projectId => {
  return {
    type: REMOVE_PROJECT,
    projectId
  };
};

export const fetchProjects = teamId => {
  return dispatch => {
    return projectAPIUtil.fetchProjects(teamId).then(
      projects => {
        return dispatch(receiveProjects(projects));
      }
    );
  };
};

export const fetchProject = projectId => {
  return dispatch => {
    return projectAPIUtil.fetchProject(projectId).then(
      project => {
        return dispatch(receiveProject(project));
      }
    );
  };
};

export const createProject = project => {
  return dispatch => {
    return projectAPIUtil.createProject(project).then(
      project => {
        return dispatch(receiveProject(project));
      }
    );
  };
};

export const updateProject = project => {
  return dispatch => {
    return projectAPIUtil.updateProject(project).then(
      project => {
        return dispatch(receiveProject(project));
      }
    );
  };
};

export const removeProject = projectId => {
  return dispatch => {
    return projectAPIUtil.removeProject(projectId).then(
      () => {
        return dispatch(deleteProject(projectId));
      }
    );
  };
};
