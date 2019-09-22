import React from 'react';
import facebookApi from '../../services/facebookApi/facebookApi';

const LogoutButton = ({ history }) => {
  return (
    <button onClick={() => {
      facebookApi.logout().then(() => {
        history.push('/login');
      });
    }}>Log out</button> // eslint-disable-line
  );
};

export default LogoutButton;
