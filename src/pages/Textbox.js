import React from "react";
import "./Textbox.css";

function Textbox() {
  return (
    <div className="textbox-container">
      <textarea className="textbox" placeholder="Enter your text here"></textarea>
    </div>
  );
}

export default Textbox;
