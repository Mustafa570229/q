import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
// import TrackVisibility from 'react-on-screen';
import 'animate.css';
import img1 from "../images/bg5.png"
import img2 from "../images/22.png"
import img3 from "../images/c1.png"
import Contact from './Contact';
import Footer from './Footer';



const Home = () => {
  return (
    <div className='home'>
      <div className='f'>
        {/* <TrackVisibility>
          {({ isVisible }) => <div className={isVisible ? "animate__animated animate__backInLeft first-div" 
          : "first-div"}>d</div>}</TrackVisibility> */}

            <div className="first-div" >
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
            </div>
           
        <img className='img2' src={img2} alt='...'/>
        <img className='img3' src={img3} alt='...'/>


      </div>

      <div className='bg-img'>
        <img src={img1} alt='...'/>
      </div>

      <div>
            <div className="s-div">
              <h2>The journey of certainty</h2>
              <p>
                The Journey of Certainty" embarks on a quest to address fundamental questions about Islam,
                establish a solid foundation of faith, and provide answers that strengthen our conviction.
                By exploring the pillars of Islam,
              </p>
              <span>To read this series <Link to='/the-journey-of-certainty'>Click here</Link></span>
            </div>
      </div>
      <Contact/>

<Footer/>

    </div>
  )
}

export default Home