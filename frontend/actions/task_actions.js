import * as taskAPIUtil from '../util/task_api_util';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';
export const REMOVE_TASK = 'REMOVE_TASK';

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

export const fetchTasks = projectId => {
  return dispatch => {
    return taskAPIUtil.fetchTasks(projectId).then(
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
