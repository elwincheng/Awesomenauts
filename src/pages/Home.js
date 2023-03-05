import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="button-container">
        <Link to="/speech" className="button button1">Speech</Link>
        <Link to="/text" className="button button4">Text</Link>
        <Link to="/image" className="button button2">Image</Link>
      </div>
        <Link to="/download" className="lowkey-btn bottom-left">Downoad</Link>
        <Link to="/classify" className="lowkey-btn bottom-right">Classify</Link>
    </div>
  );
}

export default Home;