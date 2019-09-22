import React from 'react';
import facebookApi from '../../services/facebookApi/facebookApi';
import Post from '../Post/Post';
import Loader from '../Loader/Loader';
import styled from 'styled-components';

const StyledFeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class Feed extends React.Component {
  constructor () {
    super();
    this.state = {
      feed: null
    };
  }

  componentDidMount () {
    facebookApi.getFeed().then(response => {
      this.setState({
        feed: response.data
      });
    });
  }

  render () {
    const { feed } = this.state;

    if (!feed) return <Loader />;

    return (
      <StyledFeedContainer>
        {feed.map(p => <Post key={p.id} post={p} />)}
      </StyledFeedContainer>

    );
  }
}

export default Feed;
