import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = props => {
  const { currentUser, logout, openModal } = props;

  if (currentUser) {
    return (
      <div>
      <span>{currentUser.username}</span>
      <button onClick={() => logout()}>Log out</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => openModal('login')}>Log in</button>
        <button onClick={() => openModal('signup')}>Sign up</button>
      </div>
    );
  }
};

export default Greeting;
