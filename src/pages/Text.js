import React from 'react';
import './Text.css'

function Text() {
  return (
    <div className="container">
      <h1>Large Textbox Page</h1>
      <div className="textbox-container">
        <textarea className="large-textbox" placeholder="Enter your text here"></textarea>
      </div>
    </div>
  );
}

export default Text;
