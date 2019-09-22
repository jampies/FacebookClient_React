import React from 'react';
import styled from 'styled-components';
import TimeSinceDate from '../TimeSinceDate/TimeSinceDate';

const StyledPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 3px;
    background-color: #FFF;
    box-shadow: 1px 1px 8px -4px #000;
    align-items: flex-end;
`;

const StyledImg = styled.img`
    width: 100%;
    margin: 0;
`;

const StyledTimeSinceDate = styled.div`
    font-size: 0.8em;
    color: #333;
    margin: 0.5em 1em 0;
`;

const PostContentContainer = styled.div`
    margin: 1.5em;
    font-size: 1.2em;
`;

class Post extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const { post } = this.props;

        return (
            <StyledPostContainer>
                <StyledImg src={post.full_picture} />
                <StyledTimeSinceDate><TimeSinceDate date={post.created_time} /></StyledTimeSinceDate>
                <PostContentContainer>
                    <div>{post.story}</div>
                    <div>{post.message}</div>
                </PostContentContainer>
            </StyledPostContainer>
        );
    }
}

export default Post;
