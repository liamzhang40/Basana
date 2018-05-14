import React from 'react';
import { Link } from 'react-router-dom';
import CurrentProjectDropdownContainer from './current_project_dropdown_container';

class ProjectIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({visible: !this.state.visible});
  }

  render() {
    const { project, teamId, currentUserId } = this.props;

    let li = '';
    // will only display public projects unless the current user is the
    // creator
    if (!project.privacy || project.creator_id === currentUserId ) {
      li = (
        <li className='project-row'>
          <span className='project-name'>{project.name}</span>
          <span
            className='project-options'
            onClick={this.handleClick}>...
            <div className={
                this.state.visible ? 'dropdown-visible' : 'dropdown-hidden'
              }>
              <CurrentProjectDropdownContainer />
            </div>
          </span>
        </li>
      );
    }
    return (
      <Link to={`/dashboard/teams/${teamId}/projects/${project.id}`}>
        {li}
      </Link>
    );
  }
}

export default ProjectIndexItem;
