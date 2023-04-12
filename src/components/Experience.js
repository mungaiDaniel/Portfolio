import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import { Roll, Slide, Zoom } from 'react-reveal'

const Experience = () => {
  return (
    <section id='experiences'>
      <Slide left duration={3500}>

        <h5>What Skills I have</h5>
      </Slide>
      <Slide right duration={3500}>

        <h2> My Experience</h2>
      </Slide>
        <div className='experince_container container '>
          

            <div className='experience_frontend'>
              <h3>Frontend Development</h3>
              <div className='experience_content'>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div className="expire_info">
                  <h4>HTML</h4>
                  <small>90%</small>
                  </div>
                  <div className="progress-line" data-percent="90%">
                    <span className='animal' style={{width: "90%"}}></span>
                </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div className="expire_info">
                  <h4>JavaScript</h4>
                  <small>80%</small>
                  </div>
                  <div className="progress-line" data-percent="85%">
                    <span style={{width: "85%"}}></span>
                </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div className="expire_info">

                  <h4>React.js</h4>
                  <small>70%</small>
                  </div>
                  <div className="progress-line" data-percent="70%">
                    <span style={{width: "70%"}}></span>
                </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div className="expire_info">

                  <h4>Bootstrap</h4>
                  <small>85%</small>
                  </div>
                  <div className="progress-line" data-percent="85%">
                    <span style={{width: "85%"}}></span>
                </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div className="expire_info">
                  <h4>Material UI</h4>
                  <small>80%</small>
                  </div>
                  <div className="progress-line" data-percent="80%">
                    <span style={{width: "80%"}}></span>
                </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div className="expire_info">
                  <h4>CSS</h4>
                  <small>90%</small>
                  </div>
                  <div className="progress-line" data-percent="90%">
                    <span style={{width: "90%"}}></span>
                </div>
                </article>
              </div>
            </div>
          

            <div className='experience_backend container'>
            <h3>Backend Development</h3>
              <div className='experience_content'>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div className="expire_info">
                  <h4>Python</h4>
                  <small>90%</small>
                  
                  </div>
                  <div className="progress-line" data-percent="90%">
                    <span style={{width: "90%"}}></span>
                </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div className="expire_info">
                  <h4>Flask-restful</h4>
                  <small>85%</small>
                  </div>
                  <div className="progress-line" data-percent="85%">
                    <span style={{width: "85%"}}></span>
                </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div className="expire_info">

                 <h4>Node.js</h4>
                  <small>65%</small>
                 </div>
                 <div className="progress-line" data-percent="65%">
                    <span style={{width: "65%"}}></span>
                </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div className="expire_info">

                  <h4>PostgresSQL</h4>
                  <small>75%</small>
                  </div>
                  <div className="progress-line" data-percent="75%">
                    <span style={{width: "75%"}}></span>
                </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div className="expire_info">
                  <h4>MongoDB</h4>
                  <small>60%</small>
                  </div>
                  <div className="progress-line" data-percent="60%">
                    <span style={{width: "60%"}}></span>
                </div>
                </article>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Experience