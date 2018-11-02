import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  updateTask,
  updateReduxTask
} from '../../../actions/task_actions';
import TaskForm from './task_form';

const mapStateToProps = (state, ownProps) => {
  // if user refreshes the page, during first render, only current user
  // and team is in Redux state because they are preloaded.
  const task = ownProps.task ? ownProps.task :
  Object.keys(state.entities.tasks).length ?
  state.entities.tasks[ownProps.match.params.taskId] :
  "";
  const assignee = task ? state.entities.users[task.assignee_id] : "";
  const project = task ? state.entities.projects[task.project_id] : "";

  return {
    errors: state.errors.tasks,
    task,
    assignee,
    project
  };
};

const mapDispatchToProps= dispatch => {
  return {
    updateTask: task => dispatch(updateTask(task)),
    updateReduxTask: task => dispatch(updateReduxTask(task))
  };
};
// withRouter needed when task form is a modal
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskForm));
