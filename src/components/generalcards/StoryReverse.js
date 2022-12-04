import React from "react";

import "./StoryReverse.css";

function StoryReverse() {
  return (
    <div className="main-card-reverse">
      <div className="image-reverse">
        <img className="mobile" src="images/Mobile Phone.jpeg" alt="TV" />
        <div className="strange">
          <img
            className="strange-img"
            src="images/Stranger things icon.png"
            alt="stranger"
          />
          <div className="col-strange">
            <span style={{fontWeight:"bold"}}>Stranger Things</span>
            <span style={{color:"blue",fontSize:"14px"}}>Downloading...</span>
          </div>
          <img
            className="animation"
            src="images/Downloading animation.gif"
            alt="Download Animation"
          />
        </div>
      </div>
      <div className="text-reverse">
        <h1>Download your shows to watch offline.</h1>
        <h2>Save your favourites easily and always have something to watch.</h2>
      </div>
    </div>
  );
}

export default StoryReverse;
