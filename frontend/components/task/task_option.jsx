import React from 'react';
import TaskOptionDropdownContainer from './task_option_dropdown_container';

class TaskOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({visible: !this.state.visible});
  }

  render() {
    return (
      <div
        className='task-option-button'
        onClick={this.handleClick}>
        <span>...</span>
        <div className={ this.state.visible ? 'task-option-dropdown-visible' : 'task-option-dropdown-hidden' }>
          <TaskOptionDropdownContainer />
        </div>
      </div>
    );
  }
}

export default TaskOption;
