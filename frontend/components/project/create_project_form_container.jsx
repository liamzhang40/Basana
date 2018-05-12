import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createProject } from '../../actions/project_actions';
import { closeModal } from '../../actions/modal_actions';
import ProjectForm from './project_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.projects,
    project: { creator_id: '',
      team_id: '',
      name: '',
      description: '',
      privacy: '',
      formType: 'New'
    }
  };
};

const mapDispatchToProps= dispatch => {
  return {
    processForm: project => dispatch(createProject(project)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectForm));
