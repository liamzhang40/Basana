import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Link } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Modal from './modal/modal';

const App = () => {
  return (
    <div>
      <Modal />
      <header>
        <Link to='/'>Basana</Link>
        <Route path='/' exact component={GreetingContainer} />
      </header>
    </div>
  );
};

export default App;
