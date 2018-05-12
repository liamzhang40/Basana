import { connect } from 'react-redux';
import { fetchProjects } from '../../actions/project_actions';
import { openModal, closeModal } from '../modal/modal';
import ProjectIndex from './project_index';

const mapStateToProps = state => {
  return {
    projects: Object.values(state.entities.projects)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: teamId => dispatch(fetchProjects(teamId)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);
