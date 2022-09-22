import React from 'react';
import CV from '../../assets/pic.jpg';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Take a Snap 😉
      </a>
      <a href="#contact" className="btn btn-primary">
        Ask me a Varam 🥰
      </a>
    </div>
  );
};

export default CTA;
