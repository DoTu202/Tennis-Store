import React from 'react'
import './Hero.css'


function Hero() {
  return (
    <div className='hero'>
        <div className='hero-overlay'>
            <p>DISCOVER THE FUTURE</p>
            <h1>Tennis Revolution:</h1>
            <h2>Explore our selection<br/> and join the game today!</h2>
            <button className='hero-btn'>EXPLORE</button>
        </div>
    </div>
  )
}

export default Hero