import React from 'react';

class SplashIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };

    this.handleSubmit = this.handleClick.bind(this);
  }

  update() {
    return (e) => {
      this.setState({email: e.currentTarget.value});
    };
  }

  handleClick(e) {
    // will send a email
    e.preventDefault();
    this.setState({email: ''});
  }

  render() {
    return (
      <section className='splash-left'>
        <h2>
          Roll work
          <br />
          backward
        </h2>
        <p>Basana is meant to be read as Banana</p>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder='name@company.com'
              type='text'
              onChange={this.update()}
              value={this.state.email}/>
            <button>Get Started</button>
          </form>
        </div>
      </section>
    );
  }
}

export default SplashIntro;
