import React from 'react';
import {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import './Image.css';

function Image() {
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [displayInitialButton, setDisplayInitialButton] = useState(true);
    const [photoHeight, setPhotoHeight] = useState(0);
    const [videoHeight, setVideoHeight] = useState(0);
    const [readyToSubmit, setReadyToSubmit] = useState(false);
    const [gender, setGender] = useState("Male");
    const [race, setRace] = useState("Mixed Race");
    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const getVideo = () => {
        // get the user camera

        // Don't show the image
        let photo = photoRef.current;
        photo.height = 0;

        // Don't show the blue button
        setDisplayInitialButton(false);

        // Show the video
        setVideoHeight(400);
        setReadyToSubmit(false);
        navigator.mediaDevices.getUserMedia({
            video: true
        }).then((stream) => {
            // attach the stream to the video tag
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        }).catch((err) => {
            console.log(err);
        })
    }

    const takePhoto = () => {
        // Don't show the video
        setVideoHeight(0);

        // Show ready to submit button
        setReadyToSubmit(true);
        
        const width = 400;
        const height = width / (16 / 9);
        let video = videoRef.current;
        let photo = photoRef.current;
        photo.width = width;
        photo.height = height;
        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);
        
    }

    const submitPhoto = async () => {
        var dataUrl = photoRef.current.toDataURL();
        const formData = new FormData();
        formData.append("photo", dataUrl);
        formData.append("gender", gender);
        formData.append("race", race);
        try {
            const response = await fetch("http://localhost:5000/post-image", 
            {
                method: "POST",
                body: formData
            });
        } catch (error) {
            console.log(error);
        }
    }

    const handleGenderChange = (event) => {
        console.log(event.target.value);
        setGender(event.target.value);
    }

    const handleRaceChange = (event) => {
        console.log(event.target.value);
        setRace(event.target.value);
    }

    return (
        <div className="image-container">
			<h1>Upload or take a photo of your face from any angle</h1>
            <canvas ref={photoRef} height={photoHeight}></canvas>
            <video ref={videoRef} height={videoHeight}></video>
            {
                videoHeight != 0 ? 
                <button className="submit-btn" onClick={takePhoto}>
				    Take Photo
			    </button> :
                <></>
            }
            {
                readyToSubmit == true ? 
                <>
                <label for="gender" id="gender">Gender: </label>
                <select name="gender" value={gender} onChange={(event) => handleGenderChange(event)} className="gender">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
                <label for="race" id="race">Race: </label>
                <select name="race" className="race" value={race} onChange={(event)=>handleRaceChange(event)}>
                    <option>Mixed Race</option>
                    <option>Arctic (Siberian, Eskimo)</option>
                    <option>Caucasian (European)</option>
                    <option>Caucasian (Indian)</option>
                    <option>Caucasian (Middle East)</option>
                    <option>Caucasian (North African, Other)</option>
                    <option>Indigenous Australian</option>
                    <option>Native American</option>
                    <option>North East Asian (Mongol, Tibetan, Korean Japanese, etc)</option>
                    <option>Pacific (Polynesian, Micronesian, etc)</option>
                    <option>South East Asian (Chinese, Thai, Malay, Filipino, etc)</option>
                    <option>West African, Bushmen, Ethiopian</option>
                    <option>Other Race</option>
                </select>
                </>
                :
                <></>
            }
            {
                readyToSubmit == true ? 
                <div className="submit-btns">
                    <button className="submit-btn" onClick={getVideo} visibility={readyToSubmit}>
                        Take Another Photo
                    </button> 
                    <button className="submit-btn" onClick={submitPhoto} visibility={readyToSubmit}>
                        Submit
                    </button>
                </div>
                : 
                <></>
            }
            {
                displayInitialButton ? 
                <button className="image-button" onClick={getVideo}>
                    <i className="fa fa-camera fa-5x" aria-hidden="true"></i>
                </button> : <></>
            }

        </div>
    )
}

export default Image;