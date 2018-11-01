import { connect } from 'react-redux';
import { updateProject } from '../../actions/project_actions';
import { closeModal } from '../../actions/modal_actions';
import ProjectForm from './project_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.projects,
    formType: 'Edit'
  };
};

const mapDispatchToProps= dispatch => {
  return {
    processForm: project => dispatch(updateProject(project)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
