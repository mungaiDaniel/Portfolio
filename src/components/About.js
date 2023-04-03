import React from 'react'
import dan2 from '../asserts/dan2.jpeg'
import { FaAward } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { FaFolder } from 'react-icons/fa'


const About = () => {
  return (
    <section id='about' className='container'>
        <h5>Get To Konw</h5>
        <h2>About me</h2>

        <div className='container about_container'>
            <div className='about_me'>
                <div className='about_me-image'>
                    <img src={dan2} alt="dan2" />
                </div>
            </div>
            <div className='about-content'>
              <div className='about_cards'>
                <article className='about_card'>
                   <FaAward className='about_icon' /> 
                  <h5>Experience</h5>
                  <small>1+ year working</small>
                </article>
                <article className='about_card'>
                   <FaUsers className='about_icon' /> 
                    <h5>Client</h5>
                  <small>1+</small>
                </article>
                <article className='about_card'>
                   <FaFolder className='about_icon' /> 
                  <h5>Projects</h5>
                  <small>2+ completed projects</small>
                </article> 
              </div>
              <p className='container'>
                  A results-driven software engineer with one year of experience developing secure,
                  high-performance web applications in dynamic environments. Possesses a loud command of the C,
                  JavaScript, and Python programming languages used to build software within the software
                  development industry.
                </p>
                
                <a href='#contacts' className='btn btn-warning' > Let's Talk </a>

            </div>
        </div>
    </section>
  )
}

export default About