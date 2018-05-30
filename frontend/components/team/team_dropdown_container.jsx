import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  removeMember
} from '../../actions/team_actions';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import TeamDropdown from './team_dropdown';

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
    removeMember: id => dispatch(removeMember(id)),
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamDropdown));
