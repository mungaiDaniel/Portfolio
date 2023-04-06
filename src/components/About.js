import React from 'react'
import dan2 from '../asserts/dan2.jpeg'
import { FaAward } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { FaFolder } from 'react-icons/fa'
import  Rotate  from "react-reveal/Rotate"
import { Fade, LightSpeed, Zoom } from 'react-reveal'


const About = () => {
  return (
    <section id='about' className='container'>
       <LightSpeed left>

        <h5>Get To Konw</h5>
       </LightSpeed>
       <LightSpeed right>

        <h2>About me</h2>
       </LightSpeed>

        <div className='container about_container'>
            <div className='about_me'>
                <div className='about_me-image'>
                  <Rotate>
                  <img src={dan2} alt="dan2" />
                  </Rotate>
                   
                </div>
            </div>
            <div className='about-content'>
              <div className='about_cards'>
                <Fade left>
                <article className='about_card'>
                   <FaAward className='about_icon' /> 
                  <h5>Experience</h5>
                  <small>1+ year working</small>
                </article>
                </Fade>
                <Fade center>

                <article className='about_card'>
                   <FaUsers className='about_icon' /> 
                    <h5>Client</h5>
                  <small>1+</small>
                </article>
                </Fade>
                <Fade right>

                <article className='about_card'>
                   <FaFolder className='about_icon' /> 
                  <h5>Projects</h5>
                  <small>2+ completed projects</small>
                </article> 
                </Fade>
              </div>
              <Fade bottom>

              <p className='container'>
                  A results-driven software engineer with one year of experience developing secure,
                  high-performance web applications in dynamic environments. Possesses a loud command of the C,
                  JavaScript, and Python programming languages used to build software within the software
                  development industry.
                </p>
              </Fade>
                <Zoom>

                <a href='#contacts' className='btn btn-warning' > Let's Talk </a>
                </Zoom>

            </div>
        </div>
    </section>
  )
}

export default About