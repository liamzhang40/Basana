export const fetchProjects = teamId => {
  return $.ajax({
    method: 'GET',
    url: 'api/projects',
    data: { project: { team_id: teamId }}
  });
};

export const fetchProject = projectId => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/${projectId}`
  });
};

export const createProjects = project => {
  return $.ajax({
    method: 'POST',
    url: 'api/projects',
    data: { project }
  });
};

export const updateProject = project => {
  return $.ajax({
    method: 'PATCH',
    url: `api/projects/${project.id}`,
    data: { project }
  });
};

export const removeProject = projectId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/projects/${projectId}`
  });
};
