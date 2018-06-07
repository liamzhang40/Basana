import { connect } from 'react-redux';
import TeamMemberIndex from './team_member_index';
import { fetchMembers } from '../../actions/team_actions';
import { fetchAssigneeTasks } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  const { teams, users } = state.entities;
  const team = teams[ownProps.match.params.teamId];
  const members = team ? team.memberIds.map(id => users[id]) : [];
  return {
    members
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMembers: memberIds => dispatch(fetchMembers(memberIds)),
    fetchAssigneeTasks: assigneeId => (dispatch(fetchAssigneeTasks(assigneeId)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamMemberIndex);
