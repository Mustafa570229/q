import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import TrackVisibility from 'react-on-screen';
import 'animate.css';

const Home = () => {
  return (
    <div className='home'>
      <div>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__backInLeft first-div" : "first-div"} >
              <h2>The journey of certainty</h2>
              <p>
                The Journey of Certainty" embarks on a quest to address fundamental questions about Islam,
                establish a solid foundation of faith, and provide answers that strengthen our conviction.
                By exploring the pillars of Islam, embracing reason-based faith, and engaging in the pursuit of
                knowledge, we can build a resilient belief system. Through calm inquiry and reflection
                on the origin of doubts, we regain our Islamic pride and approach questions with strength and independence.
                The series aims to provide valuable benefits, empowering believers and truth-seekers alike to navigate
                through life with certainty, inspiration, and purpose.
              </p>
              <span>To read this series <Link to='/the-journey-of-certainty'>Click here</Link></span>
            </div>}
        </TrackVisibility>

      </div>
      <div>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__backInRight s-div" : "s-div"} >
              <h2>The journey of certainty</h2>
              <p>
                The Journey of Certainty" embarks on a quest to address fundamental questions about Islam,
                establish a solid foundation of faith, and provide answers that strengthen our conviction.
                By exploring the pillars of Islam,
              </p>
              <span>To read this series <Link to='/the-journey-of-certainty'>Click here</Link></span>
            </div>}
        </TrackVisibility>
      </div>



    </div>
  )
}

export default Home