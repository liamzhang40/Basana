import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import {fetchComments} from './actions/comment_actions';

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
  // window.dispatch = store.dispatch;
  ReactDOM.render(
    <Root store={ store } />,
    root
  );
});

// window.fetchComments = fetchComments;