import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//test
import {signup, login, logout} from './actions/session_actions';
import {fetchTeam, fetchTeams, createTeam, updateTeam, fetchMembers} from './actions/team_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
        teams: window.currentTeams
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
    delete window.currentTeams;
  } else {
    store = configureStore();
  }

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
window.fetchMembers = fetchMembers;
window.fetchTeams = fetchTeams;
window.fetchTeam = fetchTeam;
window.createTeam = createTeam;
window.updateTeam = updateTeam;
