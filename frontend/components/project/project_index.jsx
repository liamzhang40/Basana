import React from 'react';
import ProjectIndexItem from './project_index_item';
import ProjectHeader from './project_header';

class ProjectIndex extends React.Component {

  componentDidMount() {
    this.props.fetchProjects(this.props.match.params.teamId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.teamId !== nextProps.match.params.teamId) {
      this.props.fetchProjects(nextProps.match.params.teamId);
    }
  }

  render() {
    const { projects, openModal, closeModal, currentUserId } = this.props;
    const li = projects.map(project => {
      return <ProjectIndexItem
        key={project.id}
        project={project}
        teamId={this.props.match.params.teamId}
        currentUserId={currentUserId}/>;
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

export default ProjectIndex;
