import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateProject, removeProject } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';

const mapStatetToProps = state => {
  return {
    projects: Object.values(state.entities.projects),
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateProject: project => dispatch(updateProject(project)),
    removeProject: projectId => dispatch(removeProject(projectId)),
    openModal: modal => dispatch(openModal(modal))
  };
};

class ProjectOptionDropdownContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    const { history, match, removeProject, project, projects, currentUserId } = this.props;
    removeProject(project.id).then(() => {
      for(let i = 0; i < projects.length; i++) {
        if (projects[i].id !== project.id) {
          history.push(`/dashboard/teams/${match.params.teamId}/projects/${projects[i].id}`);
          return;
        }
      }

      history.push(`/dashboard/teams/${match.params.teamId}/users/${currentUserId}`);
    });
  }

  render() {
    const {
      project,
      openModal
    } = this.props;

    return (
      <div className='project-dropdown'>
        <ul>
          <button onClick={ () => openModal({ type: 'updateproject', project: project }) }>
            <li>Edit Name & Description...
            </li>
          </button>

          <button onClick={this.handleRemove}>
            <li>Delete Project
            </li>
          </button>
        </ul>
      </div>
    );
  }
}

export default withRouter(connect(mapStatetToProps, mapDispatchToProps)(ProjectOptionDropdownContainer));
