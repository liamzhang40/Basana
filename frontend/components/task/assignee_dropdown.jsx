import React from 'react';

class AssigneeDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  matches() {
    const matches = [];
    const { members } = this.props;

    if (!this.state.inputVal.length) {
      return members;
    }

    members.forEach(member => {
      let sub = member.name.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(member);
      }
    });

    if (!matches.length) {
      matches.push('Teammates only');
    }

    return matches;
  }

  handleClick(e) {
    const { updateTask, task } = this.props;
    this.setState({inputVal: e.currentTarget.innerText});
    updateTask({id: task.id, assignee_id: e.currentTarget.value});
  }

  handleChange(e) {
    this.setState({inputVal: e.currentTarget.value});
  }

  render() {
    const nameMatches = this.matches().map((member, idx) => {
      return (
        <li
          key={idx}
          onClick={this.handleClick}
          value={member ? member.id : ''}>
          {member ? member.name : ''}
        </li>
      );
    });

    return (
      <div>
        <input
          onChange={this.handleChange}
          value={this.state.inputVal}
          ></input>
        <ul>
          {nameMatches}
        </ul>
      </div>
    );
  }
}

export default AssigneeDropdown;
