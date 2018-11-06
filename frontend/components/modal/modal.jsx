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
import UpdateTaskFormContainer from '../task/task_form/update_task_form_container';
// figure out a way of dynamically importing files
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
  switch (modal.type) {
    case 'login':
      component = <LoginFormContainer />;
      formType = 'session';
      break;
    case 'signup':
      component = <SignupFormContainer />;
      formType = 'session';
      break;
    case 'editprofile':
      component = <UpdateProfileFormContainer />;
      formType = 'profile';
      break;
    case 'createteam':
      component = <CreateTeamFormContainer />;
      formType = 'team';
      break;
    case 'updateteam':
      component = < UpdateTeamFormContainer team={modal.team} />;
      formType = 'team';
      break;
    case 'createproject':
      component = <CreateProjectFormContainer />;
      formType = 'project';
      break;
    case 'updateproject':
      component = <UpdateProjectFormContainer project={modal.project} />;
      formType = 'project';
      break;
    case 'edittask':
      component = <React.Fragment>
        <Route 
          path="/dashboard/teams/:teamId/projects/:projectId/tasks/:taskId"
          render={(props) => <UpdateTaskFormContainer {...props} />}/>
        <Route
          path="/dashboard/teams/:teamId/users/:userId/tasks/:taskId"
          render={(props) => <UpdateTaskFormContainer {...props} />} />
      </React.Fragment>;
      formType = 'task';
      break;
    default:
      return null;
  }

  const handleBackgroundClick = () => {
    if (
      modal.type === "edittask" ||
      modal.type === "createteam" && modal.userCanClose
      ) return;

      closeModal();
  };

  return (
    <div 
      className="modal-background" 
      onClick={handleBackgroundClick}>
      <div className={`${formType}-modal-child`} onClick={ e => e.stopPropagation() }>
        { component }
        { !modal.userCanClose &&
          <button className='modal-close' onClick={() => closeModal()}>&times;</button>
        }
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
