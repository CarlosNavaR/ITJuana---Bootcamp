import React from 'react';
import './blog.css';

const Blog = ({ updatedAt, title, content, image }) => {
  return (
    <div className="blog-post">
      <div className="blog-post-image">
        <img src={image} alt="blog" width={250} height={250} />
      </div>
      <div className="blog-post-details">
        <p>{updatedAt}</p>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Blog;
