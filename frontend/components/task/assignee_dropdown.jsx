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
    const { options } = this.props;

    if (!this.state.inputVal.length) {
      return options;
    }

    options.forEach(option => {
      let sub = option.name.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(option);
      }
    });

    if (!matches.length) {
      matches.push('Teammates only');
    }

    return matches;
  }

  handleClick(e) {
    const { updateTask, task, attribute, setParentState } = this.props;
    this.setState({inputVal: e.currentTarget.innerText});
    updateTask({id: task.id, [attribute]: e.currentTarget.value});
    setParentState({visible: false});
  }

  handleChange(e) {
    this.setState({inputVal: e.currentTarget.value});
  }

  render() {
    const { task, attribute } = this.props;
    const nameMatches = this.matches().map((option, idx) => {
      if (task[attribute] !== option.id) {
        return (
          <li
            key={idx}
            onClick={this.handleClick}
            value={option ? option.id : ''}>
            {option ? option.name : ''}
          </li>
        );
      }
    });

    return (
      <div>
        <input
          onChange={this.handleChange}
          value={this.state.inputVal}
          />
        <ul>
          {nameMatches}
        </ul>
      </div>
    );
  }
}

export default AssigneeDropdown;
