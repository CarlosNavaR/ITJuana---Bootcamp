import React from 'react';
import Post from '../Components/Post';
const LisOfPost = ({ post }) => {
  return (
    <>
      {post.map((post) => {
        return (
          <Post
            updatedAt={post.updatedAt}
            title={post.title}
            content={post.content}
            image={post.imageUrl}
          />
        );
      })}
    </>
  );
};

export default LisOfPost;
