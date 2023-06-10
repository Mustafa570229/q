import React from 'react'
import "./Footer.css"
import telegram from "../images/telegram.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"
import web from "../images/web1.png"
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialmedia'>

        <Link to='/the-journey-of-certainty'>The journey of certainty</Link>
        <Link to='/chains'>Chains</Link>
        <Link to='/stories'>stories</Link>
        <Link to='/mix'>Mix</Link>

      </div>
      <div className='images'>
        
        <a href='https://mustafaalabohasne.online/' target='_blank' rel="noreferrer"><img src={web} alt='...' /></a>
        <a href='https://mustafaalabohasne.online/' target='_blank' rel="noreferrer"><img src={linkedin} alt='...' /></a>
        <a href='https://mustafaalabohasne.online/' target='_blank' rel="noreferrer"><img src={telegram} alt='...' /></a>
        <a href='https://mustafaalabohasne.online/' target='_blank' rel="noreferrer"><img src={twitter} alt='...' /></a>

        
        
        
      </div>



      <div className='copyright'>© 2023 Copyright: 
      <a href='https://mustafaalabohasne.online/' target='_blank' rel="noreferrer">mustafaalabohasne.online</a></div>

    </div>
  )
}

export default Footer