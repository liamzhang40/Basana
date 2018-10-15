import React from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';
import ProjectIndexItem from './project_index_item';
import ProjectHeader from './project_header';

const mapStateToProps = (state, ownProps) => {
  const selectedProjectId = /projects\/(\d+)/.exec(ownProps.location.pathname);
  return {
    projects: Object.values(state.entities.projects),
    selectedProjectId: selectedProjectId ? parseInt(selectedProjectId[1]) : "",
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: teamId => dispatch(fetchProjects(teamId)),
    openModal: modal => dispatch(openModal(modal))
  };
};

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProjectId: this.props.selectedProjectId
    };
  }

  componentDidMount() {
    this.props.fetchProjects(this.props.match.params.teamId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.teamId !== nextProps.match.params.teamId) {
      this.props.fetchProjects(nextProps.match.params.teamId);
    }
  }

  render() {
    const { 
      projects,
      openModal,
      currentUserId,
      selectedProjectId
     } = this.props;

    const li = projects.map(project => {
      return <ProjectIndexItem
        key={project.id}
        project={project}
        currentUserId={currentUserId}
        teamId={this.props.match.params.teamId}
        className={project.id === selectedProjectId ? 'project-row highlight' : 'project-row'}/>;
    });

    return (
      <div className='team-projects'>
        <ProjectHeader openModal={openModal} />
        <ul className='project-list'>
          {li}
          </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);
