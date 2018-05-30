import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import SplashIntro from '../greeting/splash_intro';

const Splash = () => {
  return (
    <div>
      <header>
        <Route path='/' component={GreetingContainer} />
      </header>

      <section className='splash-main'>
        <Route path='/' component={SplashIntro} />
      </section>
    </div>
  );
};

export default Splash;
