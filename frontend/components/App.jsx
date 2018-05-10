import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';
import Dropdown from './dropdown/dropdown';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import TeamIndexContainer from './team/team_index_container';
import SplashIntro from './presentational/splash_intro';
import Dashboard from './presentational/dashboard';

const App = () => {
  return (
    <div>
      <Modal />
      <Dropdown />
      <header>
        <Route path='/' exact component={GreetingContainer} />

      </header>

      <section className='splash-main'>
        <Route path='/' exact component={SplashIntro} />
      </section>

      <Route path='/dashboard' component={Dashboard} />

      <Route path='/dashboard' component={TeamIndexContainer} />
    </div>
  );
};



export default App;
