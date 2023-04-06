import React from 'react'
import {BiCheck} from 'react-icons/bi'
import { LightSpeed, Slide, Zoom } from 'react-reveal'

const Services = () => {
  return (
        <section id='services'>
            <LightSpeed right>

            <h2><span className='text-light'>I created </span>awsome stuff</h2>
            </LightSpeed>
            <LightSpeed left>

            <h5>Passionate, energetic and dynamic <span className='text-light'>Computer Software Engineer,</span> with 1+ years of experieence in software development.Skilled in both frontend and backend system development, bundled with a strong foundation in math's, logic and cross-platform codding in react.js, flask, restful framework e.t.c</h5>
            </LightSpeed>
           

            <div className='container services_container'>
                <Slide left>

                <article className='service'>
                    <div className='service_head'>
                        <h3>
                            UI/UX Design
                        </h3>
                    </div>
                        <ul className='service_list'>
                            <li>
                                <BiCheck className='service_list-icon' />
                                <p>Creative in Sketch(wireframe)</p>
                            </li>
                            <li>
                                <BiCheck className='service_list-icon' />
                                <p>Talented in UX research</p>
                            </li>
                            <li>
                                <BiCheck className='service_list-icon' />
                                <p>Excellent skills on product prototype</p>
                            </li>
                            <li>
                                <BiCheck className='service_list-icon' />
                                <p>Service workflow optimization to enhance User Expirience</p>
                            </li>
                        </ul>
                </article>
                </Slide>
                <Slide right>


                <article className='service'>
                    <div className='service_head'>
                        <h3>
                        CODING WEB/DESKTOP
                        </h3>
                    </div>
                        <ul className='service_list'>
                            <li>
                                <BiCheck className='service_list-icon' />
                                <p>Gifted programmer with test driven development</p>
                            </li>
                            <li>
                                <BiCheck className='service_list-icon' />
                                <p>Strong expertise in high level languages like python and C</p>
                            </li>
                            <li>
                                <BiCheck className='service_list-icon' />
                                <p>Working alongside top notch framework like flask and react.js</p>
                            </li>
                            <li>
                                <BiCheck className='service_list-icon' />
                                <p>Creating SQL database and how to query SQL database</p>
                            </li>
                        </ul>
                </article>
                </Slide>
                <Slide bottom>

                <article className='service'>
                    <div className='service_head'>
                        <h3>
                            SOFTWARE DEPLOYMENT
                        </h3>
                    </div>
                        <ul className='service_list'>
                            <li>
                                <BiCheck className='service_list-icon' />
                                <p>Website deployment preparation, get started by registering domain name</p>
                            </li>
                            <li>
                                <BiCheck className='service_list-icon' />
                                <p>Set up Domain Name System</p>
                            </li>
                            <li>
                                <BiCheck className='service_list-icon' />
                                <p>Set up a live testing sites</p>
                            </li>
                            <li>
                                <BiCheck className='service_list-icon' />
                                <p>Finally backup and going live</p>
                            </li>
                        </ul>
                </article>
                </Slide>
            </div>
            
        </section>
    )
}

export default Services