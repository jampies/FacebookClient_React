import React from 'react';
import Feed from '../../components/Feed/Feed';
import styled from 'styled-components';
import NavBar from '../../components/NavBar/NavBar';

const StyledFeedPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4em;
`;

const FeedPage = ({ history }) => {
  return (
    <StyledFeedPage>
      <NavBar history={history} />
      <Feed />
    </StyledFeedPage>
  );
};

export default FeedPage;
