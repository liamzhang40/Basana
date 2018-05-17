import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import CreateTeamFormContainer from '../team/create_team_form_container';
import UpdateTeamFormContainer from '../team/update_team_form_container';
import CreateProjectFormContainer from '../project/create_project_form_container';
import UpdateProjectFormContainer from '../project/update_project_form_container';
import UpdateProfileFormContainer from '../session/update_profile_form_container';

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
  let formType;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      formType = 'session'
      break;
    case 'signup':
      component = <SignupFormContainer />;
      formType = 'session'
      break;
    case 'createteam':
      component = <CreateTeamFormContainer />;
      formType = 'team'
      break;
    case 'updateteam':
      component = <Route path='/dashboard/teams/:teamId' component={UpdateTeamFormContainer} />;
      formType = 'team'
      break;
    case 'createproject':
      component = <Route path='/dashboard/teams/:teamId' component={CreateProjectFormContainer} />;
      formType = 'project'
      break;
    case 'updateproject':
      component = <Route path='/dashboard/teams/:teamId/projects/:projectId' component={UpdateProjectFormContainer} />;
      formType = 'project'
      break;
    case 'editprofile':
      component = <UpdateProfileFormContainer />;
      formType = 'profile'
      break;
    default:
      return null;
  }

  return (
    <div className={`${formType}-modal-background`} onClick={closeModal}>
      <div className={`${formType}-modal-child`} onClick={ e => e.stopPropagation() }>
        {component}
        <button className='close' onClick={() => closeModal()}>&times;</button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
