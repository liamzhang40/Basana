import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//test
import {signup, login, logout} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(
    <Root store={ store } />,
    root
  );
  //test
  window.getState = store.getState;
  window.dispatch = store.dispatch;

});

//test
window.signup = signup;
window.login = login;
window.logout = logout;
