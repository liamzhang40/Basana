import { connect } from 'react-redux';
import {
  fetchAssigneeTasks,
  updateTask,
  updateReduxTask
} from '../../../actions/task_actions';
import TaskIndex from './task_index';

const mapStateToProps = (state, ownProps) => {
  const selectedTaskId = /tasks\/(\d+)/.exec(ownProps.location.pathname);
  const tasks = Object.values(state.entities.tasks).filter(task => {
    return task.assignee_id;
  });
  return {
    tasks,
    selectedTaskId: selectedTaskId ? parseInt(selectedTaskId[1]) : "",
    currentUserId: state.session.id,
    taskVisibility: state.ui.taskVisibility
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: assigneeId => dispatch(fetchAssigneeTasks(assigneeId)),
    updateTask: task => dispatch(updateTask(task)),
    updateReduxTask: task => dispatch(updateReduxTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
