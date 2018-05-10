import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.formType === 'Sign up') {
      this.state = {
        name: '',
        username: '',
        password: ''
      };
    } else {
      this.state = {
        username: '',
        password: ''
      };
    }

    this.handleSumbit = this.handleSumbit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSumbit(e) {
    e.preventDefault();

    const {
      history,
      formType,
      openModal,
      closeModal,
      fetchTeams
    } = this.props;

    const user = Object.assign({}, this.state);
    this.props.processForm(user).then((res) => {
      if (formType === 'Sign up') {
        openModal('createteam');
      } else {
        fetchTeams();
        const teamId = res.user.teamIds[0];
        history.push(`/dashboard/teams/${teamId}`);
        closeModal();
      }}
    );
  }

  render() {
    const demoUser = { username: 'lzhang40@binghamton.edu', password: 62030490 };

    const {
      text,
      errors,
      formType,
      otherType,
      openModal
    } = this.props;

    let namelabel = '';
    let namefield = '';
    if (formType === 'Sign up') {
      namelabel = <label htmlFor='name-input'>Name</label>;
      namefield = <input
        id='name-input'
        placeholder='Liam'
        type='text'
        onChange={this.update('name')} />;
    }

    return (
      <div className='session-form'>
        <h1>{formType}</h1>
        <form onSubmit={this.handleSumbit}>
          {namelabel}
          {namefield}
          <label htmlFor='email-input'>Email Address</label>
          <input
            id='email-input'
            placeholder='name@company.com'
            type='text'
            onChange={this.update('username')} />
          <label htmlFor='password-input'>Password</label>
          <input
            id='password-input'
            placeholder='Password'
            type='password'
            onChange={this.update('password')} />
          <input className='session-button' type='submit' value={`${formType}`}/>
        </form>
        <ul>
          {errors.map(error => <li>{error}</li>)}
        </ul>
        {text}
        <button onClick={() => openModal()}>{otherType}</button>
      </div>
    );
  }
}

export default withRouter(SessionForm);
