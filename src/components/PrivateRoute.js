import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
