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
      // res is nested with updated members
      // res is not nested if only team name is updated
      if (res.payload) {
        const teamId = res.payload.team.id;
        history.push(`/dashboard/teams/${teamId}`);
      }
      closeModal();
    });
  }

  render() {
    let memberemail = '';
    if (this.props.formType !== 'Update') {
      memberemail =
      (<div className='team-email'>
        <label htmlFor='team-email-input'>MEMBERS</label>
        <textarea
          id='team-email-input'
          placeholder='Separate emails with commas'
          type='text'
          onChange={this.update('emails')}/>
      </div>);
    }

    return (
      <div className='team-form'>
        <h1>{`${this.props.formType} Your Workspace`}</h1>
        <form onSubmit={this.handleSumbit}>
          <div className='team-name'>
            <label htmlFor='team-name-input'>WORKSPACE<br />NAME</label>
            <input
              id='team-name-input'
              placeholder='Company or Team Name'
              type='text'
              onChange={this.update('name')}
              value={this.state.name}/>
          </div>
          {memberemail}
          <button className='team-button'>{`${this.props.formType} Workspace`}</button>
        </form>
      </div>

    );
  }
}

export default TeamForm;
