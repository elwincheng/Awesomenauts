import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="button-container">
        <Link to="/speech" className="button button1">Speech</Link>
        <Link to="/button2" className="button button2">Button 2</Link>
        <Link to="/button3" className="button button3">Button 3</Link>
        <Link to="/button4" className="button button4">Button 4</Link>
      </div>
    </div>
  );
}

export default Home;