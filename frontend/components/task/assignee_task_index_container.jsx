import { connect } from 'react-redux';
import {
  fetchAssigneeTasks,
  createTask,
  updateTask,
  updateReduxTask
} from '../../actions/task_actions';
import TaskIndex from './task_index';

const mapStateToProps = state => {
  const tasks = Object.values(state.entities.tasks).filter(task => {
    return task.assignee_id;
  });
  return {
    tasks,
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: assigneeId => dispatch(fetchAssigneeTasks(assigneeId)),
    createTask: task => dispatch(createTask(task)),
    updateTask: task => dispatch(updateTask(task)),
    updateReduxTask: task => dispatch(updateReduxTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
