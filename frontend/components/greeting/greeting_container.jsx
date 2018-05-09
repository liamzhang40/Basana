import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  const user = { username: 'lzhang40@binghamton.edu', password: 62030490 };
  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    login: () => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
