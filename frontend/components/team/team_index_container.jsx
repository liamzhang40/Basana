import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchTeams,
  fetchTeam
} from '../../actions/team_actions';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { closeDropdown } from '../../actions/dropdown_actions';
import TeamIndex from './team_index';

const mapStateToProps = state => {
  return {
    teams: Object.values(state.entities.teams)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTeams: () => dispatch(fetchTeams()),
    fetchTeam: id => dispatch(fetchTeam(id)),
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    closeDropdown: () => dispatch(closeDropdown())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamIndex));
