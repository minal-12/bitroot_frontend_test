import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Post from './components/Post';
import Footer from './components/Footer';
import postsData from './data';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null); 

  useEffect(() => {
    
    setPosts(postsData);
  }, []);

 
  const handlePostSelect = (post) => {
    setSelectedPost(post);
  };


  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="App">
      <Header />
      <main className="post-container">
        {posts.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((post, index) => (
              <div key={index} className="post" onClick={() => handlePostSelect(post)}>
                <img src={post.thumbnail.small} alt={post.title} />
                <div className="post-content">
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                  <div className="post-meta">
                    <span className="author">{post.author.name}</span>
                    <span className="date">{new Date(post.date).toDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </main>
      <Footer />
      
    </div>
  );
}

export default App;
