import { connect } from 'react-redux';
import {
  fetchTeams,
  removeMember
} from '../../actions/team_actions';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { closeDropdown } from '../../actions/dropdown_actions';
import TeamIndex from './team_index';

const mapStateToProps = state => {
  const currentUser = state.entities.users[state.session.id];
  const teams = currentUser.teamIds.map(teamId => {
    return state.entities.teams[teamId];
  });

  return {
    teams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTeams: () => dispatch(fetchTeams()),
    removeMember: id => dispatch(removeMember(id)),
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    closeDropdown: () => dispatch(closeDropdown())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamIndex);
