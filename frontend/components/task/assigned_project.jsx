import React from 'react';
import AssignedProjectDropdownContainer from './assigned_project_dropdown_container';

class AssignedProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false,
      unassignVisible: false
    };

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouse = this.handleMouse.bind(this);
    this.handleUnassign = this.handleUnassign.bind(this);
  }

  handleClick() {

    if (!this.state.dropdownVisible) {
      document.addEventListener('mousedown', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('mousedown', this.handleOutsideClick, false);
    }

    this.setState({dropdownVisible: !this.state.dropdownVisible});
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }

  handleMouse() {
    this.setState({unassignVisible: !this.state.unassignVisible});
  }

  handleUnassign() {

  }

  render() {
    const { project } = this.props;
    return (
      <div
        ref={ node => this.node = node }
        className='task-project'
        onMouseEnter={this.handleMouse}
        onMouseLeave={this.handleMouse}>
        <button
          className='project'
          onClick={this.handleClick}>
          <span>{ project ? project.name : 'Unassigned' }</span>
        </button>
        { project &&
          this.state.unassignVisible &&
          <a
            onClick={this.handleUnassign}>
            <svg viewBox="0 0 32 32">
              <polygon points="24.485,27.314 27.314,24.485 18.828,16 27.314,7.515 24.485,4.686 16,13.172 7.515,4.686 4.686,7.515 13.172,16 4.686,24.485 7.515,27.314 16,18.828 "/>
            </svg>
          </a>
        }
        { this.state.dropdownVisible &&
          <div className='assignee-dropdown-visible'>
            <AssignedProjectDropdownContainer setParentState={this.handleClick}/>
          </div>
        }
      </div>
    );
  }
}

export default AssignedProject;
