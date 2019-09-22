import React from 'react';
import LogoutButton from '../LogoutButton/LogoutButton';
import styled from 'styled-components';
import authService from '../../services/authService/authService';

const StyledNavBarContainer = styled.div`
    margin: 0;
    background-color: #4267b2;
    border-bottom: 1px solid #29487d;
    color: #fff;
    width: 100%;
    padding: 0.5em;
    display: flex;
    justify-content: space-between;
    position:fixed;
    top:0;
`;

const AppName = styled.span`
    font-size: 2em;
    font-weight: bold;
    margin: 0 1em;
`;

const NavControls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25em;
`;

class NavBar extends React.Component {
  constructor () {
    super();
    this.state = {};
  }

  render () {
    const { history, searchTerm, onSearchTermEdit } = this.props;
    return (
      <StyledNavBarContainer>
        <AppName>Simple Facebook Client with Filter</AppName>
        {authService.isAuthenticated() &&
          <NavControls>
            <input type='text' placeholder='filter these items' value={searchTerm} onChange={(e) => onSearchTermEdit(e.target.value)} />
            <LogoutButton history={history} />
          </NavControls>}
      </StyledNavBarContainer>
    );
  }
}

export default NavBar;
