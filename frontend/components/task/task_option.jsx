import React from 'react';
import TaskOptionDropdownContainer from './task_option_dropdown_container';

class TaskOption extends React.Component {
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
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }

  render() {
    return (
      <div ref={ node => this.node = node }>
        <div
          className='task-option-button'
          onClick={this.handleClick}>
          <span>...</span>
          { this.state.visible && (
            <div className='task-option-dropdown-visible'>
              <TaskOptionDropdownContainer />
            </div>
          )}
        </div>
      </div>
    );
  }
}



export default TaskOption;
