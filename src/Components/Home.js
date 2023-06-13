import React from 'react';
import "./Home.css";
import "./Contact.css";

import { Link } from 'react-router-dom';
import 'animate.css';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="home">
      <div className="section">
        <div className="first-div">
          <h1>The Journey of Certainty</h1>
          <p>
            "The Journey of Certainty" embarks on a quest to address fundamental questions about Islam,
            establish a solid foundation of faith, and provide answers that strengthen our conviction.
            By exploring the pillars of Islam and embracing reason-based faith, we can build a resilient belief system.
          </p>
          <span>To read this series, <Link to="/the-journey-of-certainty">click here</Link></span>
        </div>
      </div>

      <div className="section">
        <div className="first-div">
          <h1>Be Proud of Islam</h1>
          <p>
            we aim to delve into the significance of understanding the difference between belief and disbelief.
            These profound distinctions hold immense value for every individual. By exploring this topic,
            we can appreciate the blessings of Islam, safeguard our faith,
            and foster a deeper understanding of our own identity
          </p>
          <span>To read this series, <Link to="/chains/1686310662474">click here</Link></span>
        </div>
      </div>

      <div className="contact-div">
        <div className="explain">
          Thank you for your note. If you have any feedback or suggestions regarding the site or
          the topics published on it, please feel free to contact us. Kindly provide a clear description
          of the issue or the desired modification, along with your email address or contact number.
          You can also reach us on Telegram. We appreciate your input and will be happy to assist you.
        </div>
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
