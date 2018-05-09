import React from 'react';

class TeamForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.team;

    this.handleSumbit = this.handleSumbit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSumbit(e) {
    e.preventDefault();

  }

  render() {
    return (
      <div className='team-form'>
        <h1>Create Your Workspace</h1>
        <form onSubmit={this.handleSumbit}>
          <label htmlFor='teamname-input'>WORKSPACE<br />NAME</label>
          <input
            id='teamname-input'
            placeholder='Company or Team Name'
            type='text'
            onChange={this.update('name')}/>
          <label htmlFor='memberemail-input'>MEMBERS</label>
          <input
            id='memberemail-input'
            placeholder='separate emails with commas'
            type='text'
            onChange={this.update('emails')}/>
          <button>Create Workspace</button>
        </form>
      </div>

    );
  }
}

export default TeamForm;
