import { connect } from 'react-redux';
import { updateProject, removeProject } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';
import { closeDropdown } from '../../actions/dropdown_actions';
import CurrentProjectDropdown from '../project/current_project_dropdown';

const mapDispatchToProps = dispatch => {
  return {
    updateProject: project => dispatch(updateProject(project)),
    removeProject: projectId => dispatch(removeProject(projectId)),
    openModal: modal => dispatch(openModal(modal)),
    closeDropdown: () => dispatch(closeDropdown())
  };
};


export default connect(null, mapDispatchToProps)(CurrentProjectDropdown);
