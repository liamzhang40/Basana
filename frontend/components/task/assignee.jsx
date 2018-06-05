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
      <div ref={ node => this.node = node }>
        <button
          className='assignee'
          onClick={this.handleClick}>
          <TeamMemberIndexItem member={ assignee }/>
          <span>{ assignee ? assignee.name : 'Unassigned' }</span>
        </button>
        { this.state.visible &&
          <div className='assignee-dropdown-visible'>
            <AssigneeDropdownContainer />
          </div>
        }
      </div>
    );
  }
}

export default Assignee;
