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
      errors,
      formType,
      otherType,
      openModal,
      closeModal
    } = this.props;

    return (
      <div>
        <h1>{formType}</h1>
        <form onSubmit={this.handleSumbit}>
          <input
            type='text'
            onChange={this.update('username')} />
          <input
            type='password'
            onChange={this.update('password')} />
          <input type='submit' value='Submit'/>
        </form>
        <ul>
          {errors}
        </ul>
        <button onClick={() => openModal()}>{otherType}</button>
      </div>
    );
  }
}

export default SessionForm;
