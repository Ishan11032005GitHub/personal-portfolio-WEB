import React from 'react';
import './Projects.css'; // Optional: your custom CSS file

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">
          <h3>EchoAI Chat App</h3>
          <p>
            Full-stack AI chat app with Web-Speech API voice support, JWT-based auth, text-chat using OpenRouter API and image generation using Stable Horde APIs.
          </p>
          <div className="project-links">
            <a href="https://ishan11032005github.github.io/EchoAI-frontend" target="_blank" rel="noopener noreferrer" style={{color:"yellow"}}>Live</a>
            <a href="https://github.com/Ishan11032005GitHub/EchoAI-frontend" target="_blank" rel="noopener noreferrer" style={{color:"yellow"}}>GitHub</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>LeetPeek</h3>
          <p>
            A sleek and simple frontend that shows your LeetCode profile stats in real-time using public API. Hosted on Vercel.
          </p>
          <div className="project-links">
            <a href="https://leet-peek-unxx.vercel.app/" target="_blank" rel="noopener noreferrer" style={{color:"yellow"}}>Live</a>
            <a href="https://github.com/Ishan11032005GitHub/LeetPeek" target="_blank" rel="noopener noreferrer" style={{color:"yellow"}}>GitHub</a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3>TweetMood</h3>
          <p>
            Streamlit app for Twitter sentiment analysis using NLP. Input a tweet and get instant mood detection (positive, negative).
          </p>
          <div className="project-links">
            <a href="https://ishan11032005github-tweetmood-app-tnx942.streamlit.app/" target="_blank" rel="noopener noreferrer" style={{color:"yellow"}}>Live</a>
            <a href="https://github.com/Ishan11032005GitHub/TweetMood" target="_blank" rel="noopener noreferrer" style={{color:"yellow"}}>GitHub</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
