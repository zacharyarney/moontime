import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...restOfProps }) => {
  return (
    <Route
      {...restOfProps}
      render={(props) => (
        localStorage.userName ? (
          <Component {...props} {...restOfProps} />
        ) : (
          <Redirect to="/" />
        ))
      }
    />
  );
};

export default PrivateRoute;
