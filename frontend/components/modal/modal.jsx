import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import CreateTeamFormContainer from '../team/create_team_form_container';
import UpdateTeamFormContainer from '../team/update_team_form_container';

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    closeModal: () => dispatch(closeModal())
  };
};

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'createteam':
      component = <CreateTeamFormContainer />;
      break;
    case 'updateteam':
      component = <UpdateTeamFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className='modal-background' onClick={closeModal}>
      <div className='modal-child' onClick={ e => e.stopPropagation() }>
        {component}
        <button className='close' onClick={() => closeModal()}>&times;</button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
