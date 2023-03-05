import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import "./Speech.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from "../components/Dropdown";

const apiURL = "http://localhost:5000"

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'ja', label: 'Japanese' },
  { value: 'ko', label: 'Korean' },
  { value: 'ko', label: 'African-American English' },
];

function Speech() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  // const [audio, setAudio] = useState([]);

	const [selectedLanguage, setSelectedLanguage] = useState(null);
	let mediaRecorder = useRef(null);

  // useEffect(() => {
  //   if (!audioURL) return;

  //   setAudio(new Audio(audioURL));
  //   // audio.play();

  // }, [audioURL]);

  const startRecording = async () => {
    try {
      const audioChunks = [];

			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			mediaRecorder.current = new MediaRecorder(stream);

      mediaRecorder.current.addEventListener("dataavailable", (event) => {
        audioChunks.push(event.data);
      });

      mediaRecorder.current.addEventListener("stop", () =>{
        const audioBlob = new Blob(audioChunks, {type: 'audio/wav'});
        const audioURL = URL.createObjectURL(audioBlob);


        setAudioURL(audioURL);
        setAudioBlob(audioBlob);
        setIsRecording(false);
      });

      mediaRecorder.current.start();
      setIsRecording(true);

      setTimeout(() => {
        mediaRecorder.current.stop();
      }, 30000);
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = () => {
		mediaRecorder.current.stop();
    setIsRecording(false);
  };

  const handleButtonClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

	const handleSubmit = async () =>{
		const formData = new FormData();
		formData.append('awesomeaudio', audioBlob, 'audio.wav');
		formData.append('language', selectedLanguage);
		formData.append('text', "hello");

		const response = await fetch(apiURL + '/post-audio', {
			method: 'POST',
			body: formData
		})
	}

  const buttonClasses = classNames("record-button", {
    "recording": isRecording,
  });

  return (
    <div className="speech-container">
			<h1>Peter Talks to his computer. He prefers it to</h1>
				<hr />
      <button className={buttonClasses} onClick={handleButtonClick}>
        {isRecording ? (
					<i class="fa-solid fa-square fa-3x"></i>
        ) : (
					<i class="fa-solid fa-microphone fa-5x"></i>
        )}
      </button>
			{/* {audio} */}
				<hr />
				{audioURL && 
					<>
						<audio src={audioURL} controls />
						<hr />
						<Dropdown placeholder="Native Language / Dialect" selected={selectedLanguage} setSelected={setSelectedLanguage} list={languages}/>
						<hr/>
						<button className="submit-btn" onClick={handleSubmit}>
							Submit
						</button>
					</>
				}
    </div>
  );
}

export default Speech;