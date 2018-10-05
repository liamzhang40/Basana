import React from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';
import ProjectIndexItem from './project_index_item';
import ProjectHeader from './project_header';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.location.pathname)
  return {
    projects: Object.values(state.entities.projects),
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
  // event delegation
  constructor(props) {
    super(props);

    this.selectedProject = null;
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects(this.props.match.params.teamId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.teamId !== nextProps.match.params.teamId) {
      this.props.fetchProjects(nextProps.match.params.teamId);
    }
  }

  handleClick(e) {
    let li = e.target.closest("li");

    if (this.selectedProject) {
      this.selectedProject.classList.remove("highlight");
    }

    this.selectedProject = li;
    li.classList.add("highlight");
  }

  render() {
    const { 
      projects,
      openModal,
      currentUserId } = this.props;

    const li = projects.map(project => {
      return <ProjectIndexItem
        key={project.id}
        project={project}
        selectedProject={this.selectedProject}
        teamId={this.props.match.params.teamId}
        currentUserId={currentUserId}/>;
    });

    return (
      <div className='team-projects'>
        <ProjectHeader openModal={openModal} />
        <ul className='project-list'
        onClick={this.handleClick}>
          {li}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);
