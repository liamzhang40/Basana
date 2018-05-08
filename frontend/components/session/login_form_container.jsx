import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: 'Log in',
    otherType: 'Sign up'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal('signup')) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
