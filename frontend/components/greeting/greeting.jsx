import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = props => {
  const { currentUser, logout, openModal} = props;

  let component;
  if (currentUser) {
    component =
      <div className='splash-right-nav'>
        <span>{currentUser.name}</span>
        <button onClick={() => logout()}>Log out</button>
      </div>;
  } else {
    component =
      <div className='splash-right-nav'>
        <button onClick={() => openModal('login')}>Log in</button>
        <button onClick={() => openModal('signup')}>Sign up</button>
      </div>;
  }

  return (
    <div className='splash-nav-bar'>
      <h1>Basana</h1>
      {component}
    </div>
  );
};

export default Greeting;
