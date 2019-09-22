import React from 'react';
import facebookApi from '../../services/facebookApi/facebookApi';
import FacebookStyleButton from '../FacebookStyleButton/FacebookStyleButton';
import styled from 'styled-components';

const StyledButton = styled(FacebookStyleButton)`
  margin: 0 0.5em;
  background-color: #2851A3;
  box-shadow: 2px 2px 3px -2px #999;
`;

const LogoutButton = ({ history }) => {
  return (
    <StyledButton onClick={() => {
      facebookApi.logout().finally(() => {
        history.push('/login');
      });
    }}>Log out</StyledButton> // eslint-disable-line
  );
};

export default LogoutButton;
