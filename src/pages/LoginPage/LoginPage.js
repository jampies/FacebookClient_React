import React from 'react';
import { FacebookLogin } from '../../components/FacebookLogin/FacebookLogin';
import styled from 'styled-components';

const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <h1>Simple Facebook Client with Filter</h1>
      <FacebookLogin />
    </StyledLoginPage>
  );
};

export default LoginPage;
