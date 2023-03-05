import React from 'react';
import {useState} from 'react';
import './Text.css'

const types = [
	'Classify',
	'Generate',
]

function Text() {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState("Positive");
  const [topic, setTopic] = useState("null");

	const [type, setType] = useState('Classify');

  const submitText = async () => {
    const formData = new FormData();
    formData.append("text", text);
    formData.append("sentiment", sentiment);
    formData.append("topic", topic);
    try {
        const response = await fetch("http://localhost:5000/post-text", 
        {
            method: "POST",
            body: formData
        });
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <div className="container">
			<div className="type-container">
				{types.map((el)=> <button className="type-btn" onClick={()=>setType(el)}>{el}</button>)}
			</div>
			{
				type === 'Generate' ?
					<>
      <h1>Enter your text and pick the corresponding label</h1>
				<div className="textbox-container">
					<textarea className="large-textbox" onChange={(event) => {setText(event.target.value)}} placeholder="Enter your text here"></textarea>
				</div>
					</>
				:
				<>
					<h1>Pick the corresponding label</h1>
					<h1 style={{fontSize: 50}}>Pick the corresponding label</h1>
				</>
			}
      <label for="Sentiment" >Sentiment: </label>
      <select name="Sentiment" onChange={(event)=>{setSentiment(event.target.value)}} className="Sentiment">
          <option>Positive</option>
          <option>Negative</option>
          <option>Neutral</option>
      </select>

      <label for="Toxicity" >Toxicity: </label>
			<select name="Toxicity" onChange={(event)=>{setSentiment(event.target.value)}} className="Sentiment">
          <option>Toxic</option>
          <option>Not Toxic</option>
      </select>

      <label for="topic">Topic of the text: </label>
      <textarea onChange={(event)=>{setTopic(event.target.value)}} name="topic"></textarea>


      <button className="submit-btn" onClick={submitText}>

        Submit
      </button>
    </div>
  );

}

export default Text;

