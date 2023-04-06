import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import {FaPencilAlt} from 'react-icons/fa'
import {FiSettings} from 'react-icons/fi'
import {TbTestPipe} from 'react-icons/tb'
import { Fade } from 'react-reveal'

const Process = () => {
  return (
    <Fade>

    <section>
        <hr />
        <h5>Process</h5>
        <h2>SYSTEM DESIGN PROCESS I FOLLOW</h2>
        <div className='process_details '>
        <p>Nearly all of my development processes I use a linear approach(waterfall model), whereby the development process is split into sequential activities such as requirements specification, design, implementation, testing and so on</p>
        <div className="process_card">
        <article className="process container">
            <div className="process_card-icons">
            <BiSearchAlt className='process_icon' />
            </div>
            <h4>RESEARCH</h4>
            <p>All possible requirements of the system to be developed are captured in this phase and documented</p>
        </article>
        <article className="process container">
            <div className="process_card-icons">
            <FaPencilAlt className='process_icon'/>
            </div>
            <h4>CONCEPT</h4>
            <p>Specifying hardware and system requirements and helps in defining the overall system architecture.</p>
        </article>
        <article className="process container">
            <div className="process_card-icons">
            <FiSettings className='process_icon'/>
            </div>
            <h4>DEVELOP</h4>
            <p>The system and its functionalities are implemented</p>
        </article>
        <article className="process container">
            <div className="process_card-icons">
            <TbTestPipe  className='process_icon'/>
            </div>
            <h4>TEST</h4>
            <p>Test the system for any faults and failures and ensure its working correctly</p>
        </article>
        </div>
        <p>This approach ensures rapid development and deployment of a useful system even if all functionality has not yet been included</p>
        </div>
    </section>
    </Fade>
  )
}

export default Process