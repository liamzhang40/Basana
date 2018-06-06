import React from 'react';
import AssignedProjectDropdownContainer from './assigned_project_dropdown_container';

class AssignedProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
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
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }

  render() {
    const { project } = this.props;
    return (
      <div
        ref={ node => this.node = node }
        className='task-project'>
        <button
          className='project'
          onClick={this.handleClick}>
          <span>{ project ? project.name : 'Unassigned' }</span>
        </button>
        { this.state.visible &&
          <div className='assignee-dropdown-visible'>
            <AssignedProjectDropdownContainer setParentState={this.setState.bind(this)}/>
          </div>
        }
      </div>
    );
  }
}

export default AssignedProject;
