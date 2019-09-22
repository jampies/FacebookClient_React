import React from 'react';
import styled from 'styled-components';

const StyledPostContainer = styled.div`
    width: 40vw;
    margin: 1em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid #333;
    border-radius: 3px;
    padding: 1em;
`;

const StyledImg = styled.img`
    width: 100%
`;

class Post extends React.Component {
  constructor () {
    super();
    this.state = {};
  }

  render () {
    const { post } = this.props;

    return (
      <StyledPostContainer>
        <h4>{post.created_time}</h4>
        <StyledImg src={post.full_picture} />
        <div>{post.story}</div>
        <div>{post.message}</div>
      </StyledPostContainer>
    );
  }
}

export default Post;
