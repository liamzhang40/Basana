import React from 'react';
import { Link } from 'react-router-dom';
import CurrentProjectDropdownContainer from './current_project_dropdown_container';

class ProjectIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    if (!this.state.visible) {
      document.addEventListener('mousedown', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('mousedown', this.handleOutsideClick, false);
    }

    this.setState({visible: !this.state.visible});
  }

  handleOutsideClick(e) {
    // debugger
    if (this.node.contains(e.target)) {
      return;
    }
    // debugger
    this.handleClick();
  }

  render() {
    const { project, teamId, currentUserId } = this.props;

    let li = '';
    // will only display public projects unless the current user is the
    // creator
    if (!project.privacy || project.creator_id === currentUserId ) {
      li = (
        <li
          ref={ node => this.node = node }
          className='project-row'>
          <span className='project-name'>{project.name}</span>
          <span
            className='project-options'
            onClick={this.handleClick}>...
            { this.state.visible &&
              <div className='dropdown-visible'>
                <CurrentProjectDropdownContainer />
              </div>
            }
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
