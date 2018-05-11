import { connect } from 'react-redux';
import TeamMemberIndex from './team_member_index';
import { fetchMembers } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const { teams, users } = state.entities;
  const team = teams[ownProps.match.params.teamId];
  const membersIds = team.memberIds;
  return {
    memberIds
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMembers: memberIds => dispatch(fetchMembers(memberIds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamMemberIndex);
