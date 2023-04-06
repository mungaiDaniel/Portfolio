import React from 'react'
import {BsGithub} from "react-icons/bs";
import {FaLinkedin} from "react-icons/fa";
import {SiGmail} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>MUNGAI</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>
      <div className="footer_socials">
      <a href="https://www.linkedin.com/in/daniel-mungai-7a52451b8/" target="_blank"><FaLinkedin /></a>
              <a href="https://github.com/mungaiDaniel" target="_blank"><BsGithub/></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=danitomonga@gmail.com&su=SUBJECT&body=BODY" target="_blank"><SiGmail/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy: DANIEL MUNGAI. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer