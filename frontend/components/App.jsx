import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import TeamIndexContainer from './team/team_index_container';
import SplashIntro from './presentational/splash_intro';

import CreateTeamFormContainer from './team/create_team_form_container.jsx';

const App = () => {
  return (
    <div>
      <Modal />
      <header>
        <Route path='/' exact component={GreetingContainer} />

        <Route path='/dashboard' component={TeamIndexContainer} />
      </header>


      <section className='splash-main'>
        <Route path='/' exact component={SplashIntro} />
      </section>
    </div>
  );
};

export default App;
