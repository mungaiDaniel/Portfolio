import React from 'react'
import {BsGithub} from "react-icons/bs";
import {FaLinkedin} from "react-icons/fa";
import {SiGmail} from "react-icons/si"

const Socials = () => {
  return (
    <div className="header_socials">
              <a href="https://www.linkedin.com/in/daniel-mungai-7a52451b8/" target="_blank"><FaLinkedin /></a>
              <a href="https://github.com/mungaiDaniel" target="_blank"><BsGithub/></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=danitomonga@gmail.com&su=SUBJECT&body=BODY" target="_blank"><SiGmail/></a>
    </div>
  )
}

export default Socials