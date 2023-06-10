import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
// import TrackVisibility from 'react-on-screen';
import 'animate.css';
import Contact from './Contact';
import Footer from './Footer';



const Home = () => {
  return (
    <div className='home'>
      <div className='f'>


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


      </div>


      <div>
        <div className="first-div ">
          <h2>The journey of certainty</h2>
          <p>
            The Journey of Certainty" embarks on a quest to address fundamental questions about Islam,
            establish a solid foundation of faith, and provide answers that strengthen our conviction.
            By exploring the pillars of Islam,
          </p>
          <span>To read this series <Link to='/the-journey-of-certainty'>Click here</Link></span>
        </div>
      </div>
      <div className='contact-div'>
        <div className='explain'>Thank you for your note. If you have any feedback or suggestions regarding the site or
          the topics published on it, please feel free to contact us. Kindly provide a clear description
          of the issue or the desired modification, along with your email address or contact number.
          You can also reach us on Telegram. We appreciate your input and will be happy to assist you.</div>
        <Contact />
      </div>

      <Footer />

    </div>
  )
}

export default Home