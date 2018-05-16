import { connect } from 'react-redux';
import {
  updateTask,
  updateReduxTask
} from '../../actions/task_actions';
import TaskForm from './task_form';

const mapStateToProps = (state, ownProps) => {
  // if user refreshes the page, during first render, only current user
  // and team is in Redux state because they are preloaded.
  const task = state.entities.tasks[ownProps.match.params.taskId];
  let assignee = '';
  if (task) {
    assignee = state.entities.users[task.assignee_id];
  }
  return {
    errors: state.errors.tasks,
    task,
    assignee
  };
};

const mapDispatchToProps= dispatch => {
  return {
    updateTask: task => dispatch(updateTask(task)),
    updateReduxTask: task => dispatch(updateReduxTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
