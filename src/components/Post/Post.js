import React from 'react';

class Post extends React.Component {
  constructor () {
    super();
    this.state = {};
  }

  render () {
    const { post } = this.props;

    return (
      <div>
        <h4>{post.created_time}</h4>
        <img src={post.full_picture} />
        <span>{post.story}</span>
        <span>{post.message}</span>
      </div>
    );
  }
}

export default Post;
