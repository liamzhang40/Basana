import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import Modal from './modal/modal';
import SplashIntro from './presentational/splash_intro';
import Dashboard from './presentational/dashboard';

const App = () => {
  return (
    <div>
      <Modal />
      <header>
        <Route path='/' exact component={GreetingContainer} />
      </header>

      <section className='splash-main'>
        <Route path='/' exact component={SplashIntro} />
      </section>

      <Route path='/dashboard' component={Dashboard} />
    </div>
  );
};



export default App;
