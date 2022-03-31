import './blog.css';
import React from 'react';

const FeaturedPost = ({ updatedAt, title, content, image, blogLink }) => {
  return (
    <div className="blog-post-feature">
      <div className="blog-post-feature-image">
        <img src={image} alt="blog" height={300} width={500} />
      </div>
      <div className="blog-post-details">
        <p>{updatedAt}</p>
        <h1>{title}</h1>
        <p>{content}</p>
        <a href={blogLink}>Read more</a>
      </div>
    </div>
  );
};

export default FeaturedPost;
