import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateTask } from '../../../actions/task_actions';
import AssignmentDropdown from './assignment_dropdown';

const mapStateToProps = (state, ownProps) => {
  const { tasks, teams, users } = state.entities;
  const task = tasks[ownProps.match.params.taskId];
  const team = teams[ownProps.match.params.teamId];
  const members = team.memberIds.map(id => users[id]);
  return {
    task,
    attribute: "assignee_id",
    options: members
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTask: task => dispatch(updateTask(task))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AssignmentDropdown));
