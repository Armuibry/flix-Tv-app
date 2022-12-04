import React from 'react'
import StoryCard from '../generalcards/StoryCard'
import StoryReverse from '../generalcards/StoryReverse'
import StorySecond from '../generalcards/StoryCardS'

import './Header.css'
import HomeStory from './HomeStory'
import NavBar from './NavBar'
import StoryReverseS from '../generalcards/StoryReverseS'
import QuestionLoader from '../generalcards/QuestionLoader'
import Footer from '../footer/Footer'

function Header() {
  return (
    <>
      <div className='main'>
        <img className='banner' src="images/Background.jpeg" alt="Background Logo" />
        <NavBar />
        <HomeStory />
    </div>
    <StoryCard />
    <StoryReverse />
    <StorySecond />
    <StoryReverseS />
    <QuestionLoader />

    <Footer />

    </>
    
    
  )
}

export default Header