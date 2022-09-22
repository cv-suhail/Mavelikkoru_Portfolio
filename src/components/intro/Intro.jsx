import React from 'react';
import { FaEmpire } from 'react-icons/fa';

import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaEmpire className="about__icon" />
              <h5>Former Emperor of </h5>
              <small>Cherala Samrajya (Kerala).</small><br/>
              <small>Ruled without Discrimination</small><br/>
              <small>Healthier and Happier</small><br/>
              <small>No crimes</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>A Shiva Devotee</h5>
              <small>One among the Seven Immortals who has withnessed the Ups & Downs that happened over several centuries.</small>
            </article>
          </div>
          <p>
              I am Indrasenan, grandson of Prahlada and a descendant of sage Kashayapa. 
              I am also known as Bali, Mahabali or Maveli. I was the noblest and most prosperous ruler of Kerala. 
              I have transformed Kerala into a heaven-like place. After many wars, I became invincible and won heaven and earth. 
              I was a devotee of Lord Vishnu.Ram justified his act saying me could be considered equivalent to a deer (as he was not human) and as a hunting king,
               his priority is to kill the deer, not necessarily intimating the deer of his presence.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro