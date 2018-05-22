import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = props => {
  const {
    login,
    logout,
    history,
    openModal,
    fetchTeams,
    currentUser
  } = props;

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
        <button onClick={() => {
            login().then((res) => {
              fetchTeams().then(() => {
                const teamId = res.user.teamIds[0];
                history.push(`/dashboard/teams/${teamId}`);
              });
            });
          }}>Demo User</button>
      </div>;
  }

  return (
    <div className='splash-nav-bar'>
      <div className='splash-nav-bar-left'>
        <img src={window.static_images.favicon}/>
        <h1>Basana</h1>
      </div>
      {component}
    </div>
  );
};

export default Greeting;
