import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="button-container">
        <Link to="/speech" className="button button1">Speech</Link>
        <Link to="/button2" className="button button2">Text</Link>
        <Link to="/image" className="button button3">Image</Link>

      </div>
    </div>
  );
}

export default Home;