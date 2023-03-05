import React, {useState} from "react";
import "./Textbox.css";
import Dropdown from "../components/Dropdown";


const sentiments = [
  { value: 'Positive', label: 'Positive' },
  { value: 'Neutral', label: 'Neutral' },
  { value: 'Negative', label: 'Negative' },
];


function Textbox() {
	const [selectedSentiment, setSelectedSentiment] = useState(null);

  return (
    <div className="textbox-container">
      <textarea className="textbox" placeholder="Enter your text here"></textarea>
				<Dropdown placeholder="Select a sentiment" selected={selectedSentiment} setSelected={setSelectedSentiment} list={sentiments}/>

    </div>
  );
}

export default Textbox;
