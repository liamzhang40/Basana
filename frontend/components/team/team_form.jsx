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
    const { processForm, history, closeModal } = this.props;

    processForm(this.state).then((res) => {
      console.log(res);
      const teamId = res.team.id;
      history.push(`/dashboard/teams/${teamId}`);
      closeModal();
    });
  }

  render() {
    let memberemaillabel = '';
    let memberemailfield = '';
    if (this.props.formType === 'Sign up') {
      memberemaillabel = <label htmlFor='memberemail-input'>MEMBERS</label>;
      memberemailfield = <input
        id='memberemail-input'
        placeholder='separate emails with commas'
        type='text'
        onChange={this.update('emails')}/>;
    }

    return (
      <div className='team-form'>
        <h1>Create Your Workspace</h1>
        <form onSubmit={this.handleSumbit}>
          <label htmlFor='teamname-input'>WORKSPACE<br />NAME</label>
          <input
            id='teamname-input'
            placeholder='Company or Team Name'
            type='text'
            onChange={this.update('name')}
            value={this.state.name}/>
          {memberemaillabel}
          {memberemailfield}
          <button>Create Workspace</button>
        </form>
      </div>

    );
  }
}

export default TeamForm;
