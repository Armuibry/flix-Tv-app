import React from 'react'

import './StoryCard.css'

function StoryCard() {
  return (
    <div className='main-card'>
        <div className="text">
            <h1>Enjoy on your TV.</h1>
            <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
        </div>
        <div className="image">
            
            <img src="images/logotv.png" alt="TV" />
            <video src="videos\tv-video" autoPlay muted loop></video>
        </div>

    </div>
  )
}

export default StoryCard