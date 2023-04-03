import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experiences'>
        <h5>What Skills I have</h5>
        <h2> My Experience</h2>
        <div className='experince_container container'>
            <div className='experience_frontend'>
              <h3>Frontend Development</h3>
              <div className='experience_content'>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div>
                  <h4>HTML</h4>
                  <small>Beginner</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div>
                  <h4>JavaScript</h4>
                  <small>Beginner</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div>
                  <h4>React.js</h4>
                  <small>Beginner</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div>
                  <h4>Bootstrap</h4>
                  <small>Beginner</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div>
                  <h4>Material UI</h4>
                  <small>Beginner</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div>
                  <h4>CSS</h4>
                  <small>Beginner</small>
                  </div>
                </article>
              </div>
            </div>
            <div className='experience_backend container'>
            <h3>Backend Development</h3>
              <div className='experience_content'>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div>
                  <h4>Python</h4>
                  <small>Beginner</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div>
                  <h4>Flask-restful</h4>
                  <small>Beginner</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                 <div>
                 <h4>Node.js</h4>
                  <small>Beginner</small>
                 </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div>
                  <h4>PostgresSQL</h4>
                  <small>Beginner</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div>
                  <h4>MongoDB</h4>
                  <small>Beginner</small>
                  </div>
                </article>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Experience