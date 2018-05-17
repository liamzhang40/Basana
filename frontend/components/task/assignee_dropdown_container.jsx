import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  updateTask,
  updateReduxTask
} from '../../actions/task_actions';
import AssigneeDropdown from './assignee_dropdown';

const mapStateToProps = (state, ownProps) => {
  const { tasks, teams, users } = state.entities;
  const task = tasks[ownProps.match.params.taskId];
  const team = teams[ownProps.match.params.teamId];
  const members = team.memberIds.map(id => users[id]);
  return {
    task,
    options: members
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTask: task => dispatch(updateTask(task)),
    updateReduxTask: task => dispatch(updateReduxTask(task))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AssigneeDropdown));
