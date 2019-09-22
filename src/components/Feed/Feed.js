import React from 'react';
import facebookApi from '../../services/facebookApi/facebookApi';
import Post from '../Post/Post';
import Loader from '../Loader/Loader';
import styled from 'styled-components';
import MasonryLayout from 'react-masonry-layout'
import Mark from 'mark.js';

const PostContainer = styled.div`
    width: 250px;
`;

class Feed extends React.Component {
    constructor() {
        super();

        this.setBricksRef = this.setBricksRef.bind(this);

        this.state = {
            feed: null
        };
    }

    componentDidMount() {
        facebookApi.getFeed().then(response => {
            this.setState({
                feed: response.data
            });
        });
    }

    setBricksRef(ref) {
        this.bricks = ref;
        this.markInstance = this.bricks ? new Mark(this.bricks.containerElement) : null;
        this.updateBricks();
    }

    updateBricks() {
        if (this.bricks) {
            const bricksInstance = this.bricks.getBricksInstance();
            bricksInstance.pack();
        }
    }

    componentDidUpdate() {
        const { searchTerm } = this.props;
        this.updateBricks();
        this.markInstance.unmark();
        this.markInstance.mark(searchTerm, {
            accuracy: 'partially',
            caseSensitive: false
        });
    }

    render() {
        const { feed } = this.state;
        const { searchTerm } = this.props;
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        if (!feed) return <Loader />;

        return (
            <MasonryLayout
                id="masonry-feed"
                ref={this.setBricksRef}
            >
                {feed.filter(p => {
                    const content = `${p.created_time}${p.message}${p.story}`;
                    return content.toLowerCase().includes(lowerCaseSearchTerm);
                }).map(p => <PostContainer key={p.id}><Post post={p} /></PostContainer>)}
            </MasonryLayout>

        );
    }
}

export default Feed;
