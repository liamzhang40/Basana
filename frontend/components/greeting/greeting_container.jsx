import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';
import { fetchTeams } from '../../actions/team_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  const formData = new FormData();
  formData.append('user[username]', 'demo@gmail.com');
  formData.append('user[password]', 62030490);

  return {
    login: () => dispatch(login(formData)),
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    fetchTeams: () => dispatch(fetchTeams())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
