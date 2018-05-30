import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateProject, removeProject } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';
import CurrentProjectDropdown from '../project/current_project_dropdown';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateProject: project => dispatch(updateProject(project)),
    removeProject: projectId => dispatch(removeProject(projectId)),
    openModal: modal => dispatch(openModal(modal))
  };
};


export default withRouter(connect(null, mapDispatchToProps)(CurrentProjectDropdown));
