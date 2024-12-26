import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import videoBackground from "../assets/videos/video1.webm";
import "./FrontPage.css";

const FrontPage = () => {
  const [zoom, setZoom] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowContent(false);
    setZoom(true); 
    setTimeout(() => {
      navigate("/home"); 
    }, 2000); 
  };

  return (
    <div className={`front-page ${zoom ? "zoom" : ""}`}>
      <video
        className={`background-video ${zoom ? "zoom" : ""}`}
        src={videoBackground}
        autoPlay
        loop
        muted
      ></video>
      {showContent && (
        <>
          <h1>Welcome to Real Estate</h1>
          <button onClick={handleClick}>Info More</button>
        </>
      )}
    </div>
  );
};

export default FrontPage;
