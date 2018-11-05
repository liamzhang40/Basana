import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchTeams } from '../../actions/team_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: 'login',
    otherType: 'signup',
    text: 'Don\'t have an account?'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchTeams: () => dispatch(fetchTeams())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
