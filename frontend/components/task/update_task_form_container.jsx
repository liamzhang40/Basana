import { connect } from 'react-redux';
import {
  updateTask,
  updateReduxTask
} from '../../actions/task_actions';
import TaskForm from './task_form';

const mapStateToProps = (state, ownProps) => {
  let task = state.entities.tasks[ownProps.match.params.taskId];
  return {
    errors: state.errors.tasks,
    task
  };
};

const mapDispatchToProps= dispatch => {
  return {
    updateTask: task => dispatch(updateTask(task)),
    updateReduxTask: task => dispatch(updateReduxTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
