import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';
import { closeModal } from '../../actions/modal_actions';
import ProjectForm from './project_form';

const mapStateToProps = (state, ownProps) => {
  const creatorId = state.session.id;
  const team = state.entities.teams[ownProps.match.params.teamId];
  return {
    errors: state.errors.projects,
    project: {
      creator_id: creatorId,
      team_id: team.id,
      name: '',
      description: '',
      privacy: false
    },
    team,
    formType: 'New'
  };
};

const mapDispatchToProps= dispatch => {
  return {
    processForm: project => dispatch(createProject(project)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
