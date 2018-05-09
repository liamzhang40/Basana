import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = props => {
  const { currentUser, logout, openModal, login } = props;

  const handleClick = e => {
    e.preventDefault();
    props.login().then(() => {
      props.history.push('/dashboard');
    });
  };

  if (currentUser) {
    return (
      <div className="splash-right-nav">
        <span>{currentUser.name}</span>
        <button onClick={() => logout()}>Log out</button>
      </div>
    );
  } else {
    return (
      <div className="splash-right-nav">
        <button onClick={() => openModal('login')}>Log in</button>
        <button onClick={() => openModal('signup')}>Sign up</button>
        <button onClick={handleClick}>Demo User</button>
      </div>
    );
  }
};

export default Greeting;
