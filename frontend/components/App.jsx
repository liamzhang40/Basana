import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';
import Dashboard from './presentational/dashboard';
import Splash from './presentational/splash';

const App = () => {
  return (
    <div>
      <Modal />
      <AuthRoute path='/' exact={true} component={Splash}/>

      <Route path='/dashboard/teams/:teamId' component={Dashboard} />
    </div>
  );
};

export default App;
