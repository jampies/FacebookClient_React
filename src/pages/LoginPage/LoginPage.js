import React from 'react';
import { FacebookLogin } from '../../components/FacebookLogin/FacebookLogin';
import styled from 'styled-components';
import NavBar from '../../components/NavBar/NavBar';

const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <NavBar />
      <FacebookLogin />
    </StyledLoginPage>
  );
};

export default LoginPage;
