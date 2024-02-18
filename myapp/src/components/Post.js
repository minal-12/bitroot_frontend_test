

import React from 'react';
import './Post.css'; 

function Post({ title, content, author, date, image }) {
  return (
    <div className="post">
      <img src={image} alt={title} />
      <div className="post-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="post-meta">
          <span className="author">By {author}</span>
          <span className="date">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
