import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateTask } from '../../../actions/task_actions';
import AssigneeDropdown from './assignment_dropdown';

const mapStateToProps = (state, ownProps) => {
  const { tasks, teams, projects } = state.entities;
  const task = tasks[ownProps.match.params.taskId];
  const team = teams[ownProps.match.params.teamId];
  return {
    task,
    attribute: "project_id",
    options: Object.values(projects)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTask: task => dispatch(updateTask(task))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AssigneeDropdown));
