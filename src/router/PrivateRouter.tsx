import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import getToken from 'utils/auth/get-token';

export const AuthRoute = ({ children, ...rest }: any) => {
  let auth = getToken();

  return (
    <Route
      {...rest}
      element={({ location }: any) => {
        if (auth) {
          return children;
        } else {
          return (
            <Navigate
              to={{
                pathname: '/login'
                // state: { from: location },
              }}
              state={{
                from: location
              }}
            />
          );
        }
      }}
    />
  );
};
