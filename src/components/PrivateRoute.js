import React from 'react';
import PropTypes from 'prop-types';
import { Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, ...rest }) => {
  const token = useSelector((state) => state.user.token);
  const history = useHistory();

  if (token === '') {
    history.push('/login');
    return null;
  }

  return (<Route {...rest}>{children}</Route>);
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;
