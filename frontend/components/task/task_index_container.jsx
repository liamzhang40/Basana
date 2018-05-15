import { connect } from 'react-redux';
import {
  fetchTasks,
  createTask,
  updateTask,
  updateReduxTask
} from '../../actions/task_actions';
import TaskIndex from './task_index';

const mapStateToProps = state => {
  return {
    tasks: Object.values(state.entities.tasks),
    // currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: projectId => dispatch(fetchTasks(projectId)),
    createTask: task => dispatch(createTask(task)),
    updateTask: task => dispatch(updateTask(task)),
    updateReduxTask: task => dispatch(updateReduxTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
