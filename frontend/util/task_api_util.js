export const fetchTasks = projectId => {
  return $.ajax({
    method: 'GET',
    url: 'api/tasks',
    data: { task: { project_id: projectId }}
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
