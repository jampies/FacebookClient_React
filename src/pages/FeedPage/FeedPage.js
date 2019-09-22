import React from 'react';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import Feed from '../../components/Feed/Feed';

const FeedPage = ({ history }) => {
  return (
    <div>
      <h1>Feed Page</h1>
      <LogoutButton history={history} />
      <Feed />
    </div>
  );
};

export default FeedPage;
