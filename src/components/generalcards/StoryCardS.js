import React from 'react'

import './StoryCardS.css'

function StoryCard() {
  return (
    <div className='main-cards'>
        <div className="texts">
            <h1>Watch everywhere.</h1>
            <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
        </div>
        <div className="images">
            
            <img src="images/Monitor.png" alt="TV" />
            <video src="videos\monitor" autoPlay muted loop></video>
        </div>

    </div>
  )
}

export default StoryCard