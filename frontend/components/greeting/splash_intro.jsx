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
        <ul className="social-icon">
          <li><a href="https://github.com/liamzhang40/Basana" target="_blank" className="github"><i className="fab fa-github"></i></a></li>
          <li><a href="https://linkedin.com/in/liamzhang40" target="_blank" className="linkedin"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="http://liam-zhang.com" className="portfolio" target="_blank"><img src={window.static_images.portfolio} alt="Link to portfolio"/></a></li>
        </ul>
        <div className='splash-background'></div>
      </section>
    );
  }
}

export default SplashIntro;
