import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createProject } from '../../actions/project_actions';
import { closeModal } from '../../actions/modal_actions';
import ProjectForm from './project_form';

const mapStateToProps = (state, ownProps) => {
  const teamId = parseInt(/teams\/(\d+)/.exec(ownProps.location.pathname)[1]);
  debugger
  const team = state.entities.teams[teamId];
  return {
    errors: state.errors.projects,
    project: {
      creator_id: state.session.id,
      team_id: teamId,
      name: '',
      description: '',
      privacy: false
    },
    team,
    formType: 'New'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: project => dispatch(createProject(project)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectForm));
