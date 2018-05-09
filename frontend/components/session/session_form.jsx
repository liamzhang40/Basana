import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      username: '',
      password: ''
    };

    this.handleSumbit = this.handleSumbit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSumbit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(
      () => this.props.history.push('/')
    );
  }

  render() {
    const {
      text,
      errors,
      formType,
      otherType,
      openModal
    } = this.props;

    return (
      <div className='session-form'>
        <h1>{formType}</h1>
        <form onSubmit={this.handleSumbit}>
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

export default SessionForm;
