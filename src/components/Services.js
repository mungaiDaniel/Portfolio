import React from 'react'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
        <section id='services'>
            <h2><span className='text-light'>I created </span>awsome stuff</h2>
            <h5>Passionate, energetic and dynamic <span className='text-light'>Computer Software Engineer,</span> with 1+ years of experieence in software development.Skilled in both frontend and backend system development, bundled with a strong foundation in math's, logic and cross-platform codding in react.js, flask, restful framework e.t.c</h5>
            <div className='container services_container'>
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
            </div>
        </section>
    )
}

export default Services