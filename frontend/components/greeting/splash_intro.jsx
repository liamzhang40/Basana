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
      <section>
        <section className='splash-left'>
          <h2>
            Move work
            <br />
            forward
          </h2>
          <p>Your work will slip fast with Basana</p>
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
        <div className='splash-background'></div>
      </section>
    );
  }
}

export default SplashIntro;
