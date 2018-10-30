import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn, exact, teamId}) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={`/dashboard/teams/${teamId}`} />
    )
  )}/>
);

const mapStateToProps = state => {
  const loggedIn = Boolean(state.session.id);
  return {
    loggedIn,
    teamId: loggedIn ? state.entities.users[state.session.id].teamIds[0] : null
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
