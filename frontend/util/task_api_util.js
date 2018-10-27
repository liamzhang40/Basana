export const fetchProjectTasks = projectId => {
  return $.ajax({
    method: 'GET',
    url: 'api/tasks',
    data: { task: { project_id: projectId }}
  });
};

export const fetchAssigneeTasks = assigneeId => {
  return $.ajax({
    method: 'GET',
    url: 'api/tasks',
    data: { task: { assignee_id: assigneeId }}
  });
};

export const fetchTask = taskId => {
  return $.ajax({
    method: 'GET',
    url: `api/tasks/${taskId}`
  });
};

export const createTask = task => {
  return $.ajax({
    method: 'POST',
    url: 'api/tasks',
    data: { task }
  });
};

export const updateTask = task => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tasks/${task.id}`,
    data: { task }
  });
};

export const removeTask = taskId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tasks/${taskId}`
  });
};

export const likeTask = taskId => {
  return $.ajax({
    method: 'POST',
    url: `api/tasks/${taskId}/likes`
  });
};

export const unlikeTask = taskId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tasks/${taskId}/likes`
  });
};