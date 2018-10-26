import * as taskAPIUtil from '../util/task_api_util';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TOGGLE_TASK_VISIBILITY = 'TOGGLE_TASK_VISIBILITY';
export const TOGGLE_TASK_ORDER = 'TOGGLE_TASK_ORDER';

const receiveTasks = tasks => {
  return {
    type: RECEIVE_TASKS,
    tasks
  };
};

const receiveTask = task => {
  return {
    type: RECEIVE_TASK,
    task
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_TASK_ERRORS,
    errors
  };
};

const deleteTask = taskId => {
  return {
    type: REMOVE_TASK,
    taskId
  };
};

export const updateReduxTask = task => {
  return {
    type: RECEIVE_TASK,
    task
  };
};

export const toggleTaskVisibility = () => {
  return {
    type: TOGGLE_TASK_VISIBILITY
  };
};

export const toggleTaskOrder = order => {
  return {
    type: TOGGLE_TASK_ORDER,
    order
  };
};

export const fetchProjectTasks = projectId => {
  return dispatch => {
    return taskAPIUtil.fetchProjectTasks(projectId).then(
      tasks => {
        return dispatch(receiveTasks(tasks));
      }
    );
  };
};

export const fetchAssigneeTasks = assigneeId => {
  return dispatch => {
    return taskAPIUtil.fetchAssigneeTasks(assigneeId).then(
      tasks => {
        return dispatch(receiveTasks(tasks));
      }
    );
  };
};

export const fetchTask = taskId => {
  return dispatch => {
    return taskAPIUtil.fetchTask(taskId).then(
      task => {
        return dispatch(receiveTask(task));
      }
    );
  };
};

export const createTask = task => {
  return dispatch => {
    return taskAPIUtil.createTask(task).then(
      task => {
        return dispatch(receiveTask(task));
      },
      errors => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
  };
};

export const updateTask = task => {
  return dispatch => {
    return taskAPIUtil.updateTask(task).then(
      task => {
        return dispatch(receiveTask(task));
      },
      errors => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
  };
};


export const removeTask = taskId => {
  return dispatch => {
    return taskAPIUtil.removeTask(taskId).then(
      () => {
        return dispatch(deleteTask(taskId));
      }
    );
  };
};

export const likeTask = taskId => {
  return dispatch => {
    return taskAPIUtil.likeTask(taskId).then(
      task => {
        return dispatch(receiveTask(task));
      }
    );
  };
};

export const unlikeTask = taskId => {
  return dispatch => {
    return taskAPIUtil.unlikeTask(taskId).then(
      task => {
        return dispatch(receiveTask(task));
      }
    );
  };
};