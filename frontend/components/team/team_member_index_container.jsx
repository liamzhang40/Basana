import { connect } from 'react-redux';
import TeamMemberIndex from './team_member_index';
import {
  fetchMembers,
  addMembers
} from '../../actions/team_actions';

const mapStateToProps = (state, ownProps) => {
  const { teams, users } = state.entities;
  const team = teams[ownProps.match.params.teamId];
  const members = team.memberIds.map(id => users[id]);
  return {
    members
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMembers: memberIds => dispatch(fetchMembers(memberIds)),
    addMembers: team => dispatch(addMembers(team))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamMemberIndex);
