import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateProject, removeProject } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  // hard coded, somehow projectId id missing from the params ??
  // const projectId = ownProps.location.pathname.split('/')[5];
  // return {
  //   project: state.entities.projects[projectId]
  // };
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
    const { history, match, removeProject, project} = this.props;
    removeProject(project.id).then(() => {
      history.push(`/dashboard/teams/${match.params.teamId}`);
    });
  }

  render() {
    const {
      openModal,
    } = this.props;

    return (
      <div className='project-dropdown'>
        <ul>
          <button onClick={() => openModal('updateproject')}>
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

export default withRouter(connect(null, mapDispatchToProps)(ProjectOptionDropdownContainer));
