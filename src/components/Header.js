import React from "react"
import Typed from "react-typed"
import cv from "../asserts/cv.pdf"
import dan4 from "../asserts/dan4.jpeg"
import Socials from "./Socials"


const Header = () => {
  return (
    <div className="header-wraper">
        <div className="main-info container">
            <h5 className="hello">hello, i'm</h5>
            <h1>Daniel Mungai</h1>
            <h5>fullstack developer</h5>
            <Typed 
              className="typed-text"
              strings={['Frontend Developer', 'Backend Developer', 'Web design']}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
            <div className="d-flex ctn align-items-center justify-content-between">

            <a href={cv} download className="btn-main-offer2">Download Cv</a>
            <a href="#contacts" className="btn-main-offer">Contact Me</a>
            </div>
            <Socials />
            <a href="#contacts" className="scroll_down">Scroll Down</a>
           
        </div>
    </div>
  )
}

export default Header
