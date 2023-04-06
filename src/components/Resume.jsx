import React from 'react'
import { Fade } from 'react-reveal'
import maseno from '../asserts/maseno.png'
import sololearn from '../asserts/sololearn.png'

const Resume = () => {
  return (
    <Fade>

    <section className='container resume'>

        <h5>Resume</h5>
        <h2>SUMMARY OF MY QUALIFICATIONS</h2>
        <h4>Schooling doen't assure employment but skills does</h4>
        <hr />
        <div className=" resume_details">
            <h4>Work Experience</h4>
            <div className="resume_cards">

            <article className="resume_card">
                 <h5>Salon Gerente</h5>
                 <p>January - march 2023</p>
                 <ul>
                    <li><span>&rArr;</span>Salon Gerente is a website platform where user can book salon appointments and buy salon products</li>
                    <li><span>&rArr;</span>Build api endpoints using python flask and intergreterd postgres database using flask-sqlalchemy
                    </li>
                    <li><span>&rArr;</span>i designed and implemented a working user interface and user experience using react.js, material-ui and bootstrap 
                    </li>
                    <li><span>&rArr;</span>
                        Successfully implements
                        authentication and
                        authorization in the project
                    </li>
                    <li><span>&rArr;</span>
                        Successfully develops an
                        api that gives access to all
                        the specified endpoints
                    </li>
                    <li><span>&rArr;</span>
                        intergrated test coverage tools using pytest , circle ci and coveralls
                    </li>

                 </ul>
            </article>

            <article className="resume_card">
                 <h5>Stackoverflow-lite</h5>
                 <p>October-December 2022</p>
                 <ul>
                    <li><span>&rArr;</span>StackOverflow-lite is a platform where people can ask questions and provide answers.</li>
                    <li><span>&rArr;</span>I Used project management
                        tool(pivotal tracker) to manage my
                        progress while working on tasks.
                    </li>
                    <li><span>&rArr;</span>Using GIT to manage and track
                        changes in my project.
                    </li>
                    <li><span>&rArr;</span>
                        Writes modular css that
                        can be reused through
                        markup selectors such
                        as class, id.
                    </li>
                    <li><span>&rArr;</span>
                        Successfully develops an
                        api that gives access to all
                        the specified endpoints
                    </li>
                    <li><span>&rArr;</span>
                        My Page is responsive (at least
                        across mobile, tablet and
                        desktops), color scheme is
                        complementary, and uses
                        properly designed dialog
                        boxes to give user feedback
                    </li>

                 </ul>
            </article>

            <article className="resume_card">
                 <h5>Word Hunt</h5>
                 <p>February 2023</p>
                 <ul>
                    <li><span>&rArr;</span>Word Hunt is an online dictionary created using react and react-query</li>
                    <li><span>&rArr;</span>
                        got exposure on react hooks state and the way to preserve some values between the function calls
                    </li>
                    <li><span>&rArr;</span>
                    Page is responsive (at least
                        across mobile, tablet and
                        desktops), color scheme is
                        complementary, and uses
                        properly designed dialog
                        boxes to give user feedback
                    </li>
                    <li><span>&rArr;</span>
                        Fetch api using react query asynchronous state management
                    </li>

                 </ul>
            </article>
            </div>
        </div>
        <hr/>
            <h4>EDUCATION</h4>
        <div className="resume_education">
            <article className='resume_education-cards'>

            <div className="maseno_logo">
                        <img src={maseno} className='maseno' alt='maseno' />
                        <h5>Maseno University</h5>
            </div>
            <p>Bsc. Computer Technology</p>
            <p>Kisumu, Kenya</p>
            <p>Sep 2014 - Dec 2019</p>
            <p> <span>&rArr;</span>Second Class Lower Division</p>
            </article>
            <article className='resume_education-cards'>

            <div className="maseno_logo">
                        <img src={sololearn} className='maseno' alt='sololearn' />
                        <h5>Sololearn</h5>
            </div>
            <p>Software Development</p>
            <p>Nairobi, Kenya</p>
            <p>jun 2022 - october 2022</p>
            <p><span>&rArr;</span>Certifications</p>
            </article>
            <article className='resume_education-cards'>
            <h5>Leshau Boys High School</h5>
            <p>Kenya Certificate of Secondary Education</p>
            <p>Nyahururu, Kenya</p>
            <p>Feb 2010 - Nov 2013</p>
            <p> <span>&rArr;</span> Grade B(Plus)</p>
            </article>

            <article className='resume_education-cards'>
            <h5>Waka Junior Primary School</h5>
            <p>Kenya Certificate of Primary Education</p>
            <p>Nyahururu, Kenya</p>
            <p>Feb 2002 - Nov 2009</p>
            <p> <span>&rArr;</span> 353/500</p>
            </article>

            

        </div>
        <div className="resume_course">
        <article >
                        <h4>Relevant Coursework:</h4>
                        <ul>
                            <li>Data mining <span>(cct 416)</span></li>
                            <li>Expert Systems <span>(cct 426) </span></li>
                            <li>Computer systems Engineering <span>cct 412</span></li>
                            <li>Neural Networks <span>(cct 411)</span></li>
                            <li>Intelligent Agents <span>(cct 419)</span></li>
                            <li>Simulation and modeling <span>(cct 417)</span></li>
                            <li>Operating Systems <span>(cct 204)</span></li>
                            <li>Signals and Systems <span>(cct 214)</span></li>
                            <li>Electronics <span>(cct 213)</span></li>
                            <li>Embedded Systems <span>(cct 315)</span></li>
                            <li>Engineering Mathematics <span>(cct 208)</span></li>
                            <li>Digital Electronics <span>(cct 202)</span></li>
                            <li>Data Structures and Algorithms <span>(cct 204)</span></li>
                            <li>Software Engineerung <span>(cct 308)</span></li>
                            <li>Applied Probability and Statistics <span>(cct 216)</span></li>
                            <li>Analog Communication Systems <span>(cct 315)</span></li>
                            <li>Digital Communication Systems <span>(cct 316)</span></li>
                            <li>Fibre Optics: Theory and Applications <span>(cct 433)</span></li>
                            <li>Human Computer Interaction <span>(cct 304)</span></li>
                            <li>Mobile Computing <span>(cct 306)</span></li>
                            <li>Cisco Networking I-IV <span>(CCNA)</span></li>
                        </ul>
                    </article>

        </div>
    </section>
    </Fade>
  )
}

export default Resume