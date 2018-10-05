import { connect } from 'react-redux';
import {
  fetchProjectTasks,
  updateTask,
  updateReduxTask
} from '../../../actions/task_actions';
import TaskIndex from './task_index';

const mapStateToProps = (state, ownProps) => {
  const selectedTaskId = /tasks\/(\d+)/.exec(ownProps.location.pathname);
  const tasks = Object.values(state.entities.tasks).filter(task => {
    return task.project_id;
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
    fetchTasks: projectId => dispatch(fetchProjectTasks(projectId)),
    updateTask: task => dispatch(updateTask(task)),
    updateReduxTask: task => dispatch(updateReduxTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
