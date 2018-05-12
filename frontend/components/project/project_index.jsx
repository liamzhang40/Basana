import React from 'react';
import ProjectIndexItem from './project_index_item';
import ProjectHeader from './project_header';

class ProjectIndex extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.teamId !== nextProps.match.params.teamId) {
      this.props.fetchProjects(nextProps.match.params.teamId);
    }
  }

  componentDidMount() {
    this.props.fetchProjects(this.props.match.params.teamId);
  }

  render() {
    const { projects, openModal, closeModal } = this.props;
    const li = projects.map(project => {
      return <ProjectIndexItem key={project.id} project={project}/>;
    });

    return (
      <div className='team-projects'>
        <ProjectHeader openModal={openModal} closeModal={closeModal}/>
        <ul>
          {li}
        </ul>
      </div>
    );
  }
}

export default ProjectIndex;
