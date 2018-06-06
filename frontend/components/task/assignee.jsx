import React from 'react';
import TeamMemberIndexItem from '../team/team_member_index_item';
import AssigneeDropdownContainer from './assignee_dropdown_container';

class Assignee extends React.Component {
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
    const { assignee } = this.props;
    return (
      <div
        ref={ node => this.node = node }
        className='task-assignee'>
        <button
          className='assignee'
          onClick={this.handleClick}>
          <TeamMemberIndexItem member={ assignee }/>
          <span>{ assignee ? assignee.name : 'Unassigned' }</span>
          { assignee &&
            <a>
              <svg viewBox="0 0 32 32">
                <polygon points="24.485,27.314 27.314,24.485 18.828,16 27.314,7.515 24.485,4.686 16,13.172 7.515,4.686 4.686,7.515 13.172,16 4.686,24.485 7.515,27.314 16,18.828 "/>
              </svg>
            </a>
          }
        </button>
        { this.state.visible &&
          <div className='assignee-dropdown-visible'>
            <AssigneeDropdownContainer setParentState={this.setState.bind(this)}/>
          </div>
        }
      </div>
    );
  }
}

export default Assignee;
