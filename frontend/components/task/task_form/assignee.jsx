import React from 'react';
import TeamMemberIndexItem from '../../team/team_member_index_item';
import AssigneeDropdownContainer from './assignee_dropdown_container';

class Assignee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false,
      unassignVisible: false
    };

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
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

  handleHover() {
    this.setState({unassignVisible: !this.state.unassignVisible});
  }

  handleUnassign() {
    const { task, updateTask } = this.props;
    const newTask = Object.assign({}, task, {assignee_id: ""});

    updateTask(newTask);
  }

  render() {
    const { assignee } = this.props;
    return (
      <div
        ref={ node => {this.node = node;} }
        className='task-assignee'>
        <button
          className='assignee'
          onClick={this.handleClick}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}>
          <TeamMemberIndexItem member={ assignee }/>
          <span>{ assignee ? assignee.name : 'Unassigned' }</span>
          { assignee &&
            this.state.unassignVisible &&
            <a
              onClick={this.handleUnassign}>
              <svg viewBox="0 0 32 32">
                <polygon points="24.485,27.314 27.314,24.485 18.828,16 27.314,7.515 24.485,4.686 16,13.172 7.515,4.686 4.686,7.515 13.172,16 4.686,24.485 7.515,27.314 16,18.828 "/>
              </svg>
            </a>
          }
        </button>
        { this.state.dropdownVisible &&
          <div className='assignee-dropdown-visible'>
            <AssigneeDropdownContainer setParentState={this.handleClick}/>
          </div>
        }
      </div>
    );
  }
}

export default Assignee;
