import { connect } from 'react-redux';
import {
  fetchProjectTasks,
  createTask,
  updateTask,
  updateReduxTask
} from '../../actions/task_actions';
import TaskIndex from './task_index';

const mapStateToProps = (state, ownProps) => {
  const tasks = Object.values(state.entities.tasks).filter(task => {
    return task.project_id;
  });
  return {
    tasks,
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: projectId => dispatch(fetchProjectTasks(projectId)),
    createTask: task => dispatch(createTask(task)),
    updateTask: task => dispatch(updateTask(task)),
    updateReduxTask: task => dispatch(updateReduxTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
