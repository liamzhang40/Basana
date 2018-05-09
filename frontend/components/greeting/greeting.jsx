import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = props => {
  const { currentUser, logout, openModal, login } = props;

  if (currentUser) {
    return (
      <div className="splash-right-nav">
        <span>{currentUser.username}</span>
        <button onClick={() => logout()}>Log out</button>
      </div>
    );
  } else {
    return (
      <div className="splash-right-nav">
        <button onClick={() => openModal('login')}>Log in</button>
        <button onClick={() => openModal('signup')}>Sign up</button>
        <button onClick={() => login()}>Demo User</button>
      </div>
    );
  }
};

export default Greeting;
