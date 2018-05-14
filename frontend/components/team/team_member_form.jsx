import React from 'react';

class TeamMemberForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: ''
    };

    this.handleSumbit = this.handleSumbit.bind(this);
  }

  update() {
    return (e) => {
      this.setState({emails: e.currentTarget.value});
    };
  }

  handleSumbit(e) {
    e.preventDefault();
    const emails = Object.assign({}, this.state).emails;
    this.props.addMembers({id: this.props.teamId, emails: emails});
    this.setState({emails: ''});
  }

  render() {
    return (
      <div className='member-form'>
        <form onSubmit={this.handleSumbit}>
          <input
            placeholder='Separate emails with commas'
            type='text'
            onChange={this.update()}
            value={this.state.emails}/>
          <button className='dot'></button>
        </form>
      </div>
    );
  }
}

export default TeamMemberForm;
