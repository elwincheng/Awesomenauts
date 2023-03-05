import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./Speech.css";

function Speech() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audio, setAudio] = useState([]);

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
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks = [];

      mediaRecorder.addEventListener("dataavailable", (event) => {
        audioChunks.push(event.data);
      });

      mediaRecorder.addEventListener("stop", () =>{
        const audioBlob = new Blob(audioChunks);
        const audioURL = URL.createObjectURL(audioBlob);

        setAudioURL(audioURL);
        setAudioBlob(audioBlob);
        setIsRecording(false);
      });

      mediaRecorder.start();
      setIsRecording(true);

      setTimeout(() => {
        mediaRecorder.stop();
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = () => {
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
			<p>Peter Talks to his computer. He prefers it to</p>
      <button className={buttonClasses} onClick={handleButtonClick}>
        {isRecording ? (
          <div className="Speech-icon Speech-icon--recording"></div>
        ) : (
          <div className="Speech-icon Speech-icon--not-recording"></div>
        )}
      </button>
			{/* {audio} */}
				{audioURL && <audio src={audioURL} controls />}
    </div>
  );
}

export default Speech;