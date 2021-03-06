import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import './app.css';

import { PrivateRoute } from '../components/helpers/PrivateRoute';
import LoginPage from '../components/login';

export const AppRoutes: React.FunctionComponent = () => {
  const authenticated = true;
  return (
    <>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/login">
        {authenticated ? <Redirect to="/home" /> : <LoginPage />}
      </Route>
      <PrivateRoute
        exact
        path="/home"
        component={() => <div></div>}
        authenticated={authenticated}
      />
    </>
  );
};

export default AppRoutes;
