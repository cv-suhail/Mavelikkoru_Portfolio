import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {/* <a href="#" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="#" target="_blank" rel="noreferrer" ><FaGithub /></a> */}
      <a href="https://ml.wikipedia.org/wiki/%E0%B4%AE%E0%B4%B9%E0%B4%BE%E0%B4%AC%E0%B4%B2%E0%B4%BF" target="_blank" rel="noreferrer" ><FaAngellist /></a>
    </div>
  )
}

export default HeaderSocials