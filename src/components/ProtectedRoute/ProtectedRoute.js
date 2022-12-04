import React from 'react';
import {Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <Route>
      {
        () => rest.isLoggedIn ? <Component {...rest}/> : <Redirect to='/signin'/>
      }
    </Route>
  );
};

export default ProtectedRoute;
