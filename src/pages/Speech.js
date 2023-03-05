import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import "./Speech.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Speech() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audio, setAudio] = useState([]);
	let mediaRecorder = useRef(null);

  useEffect(() => {
		console.log("hi")
    if (!audioURL) return;
		console.log("DEFined")

    setAudio(new Audio(audioURL));
		console.log(audio)
    // audio.play();

  }, [audioURL]);

  const startRecording = async () => {
    try {
      const audioChunks = [];

			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			mediaRecorder.current = new MediaRecorder(stream);

      mediaRecorder.current.addEventListener("dataavailable", (event) => {
        audioChunks.push(event.data);
      });

      mediaRecorder.current.addEventListener("stop", () =>{
        const audioBlob = new Blob(audioChunks);
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
				{audioURL && <audio src={audioURL} controls />}
				<hr />
				<button className="submit-btn">
					Submit
				</button>
    </div>
  );
}

export default Speech;