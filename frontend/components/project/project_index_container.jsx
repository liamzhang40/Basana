import { connect } from 'react-redux';
import { fetchProjects } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';
import ProjectIndex from './project_index';

const mapStateToProps = state => {
  return {
    projects: Object.values(state.entities.projects)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: teamId => dispatch(fetchProjects(teamId)),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);
