import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Modal from './modal/modal';

const App = () => {
  return (
    <div>
      <Modal />
      <header>
        <h1>Basana</h1>
        <GreetingContainer />
      </header>
    </div>
  );
};

export default App;
