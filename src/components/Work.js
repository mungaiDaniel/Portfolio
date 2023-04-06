import React from 'react'
import question from '../asserts/question.jpg'
import flat from '../asserts/flat.jpg'
import top from '../asserts/top.jpg'
import { Flip, Slide } from 'react-reveal'
const Work = () => {
  return (
    <section id='work'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className='container portfolio_container'>
            <Slide left>

            <article className='portfolio_item'>
               <div className='portfolio_item-image'>
                     <img src={question} className='question ' alt="question" />

                </div> 
                    <h3>Stackoverflow-Lite</h3>
                    <div className='portfolio_item-cta'>
                    <a href="https://github.com/mungaiDaniel/stackoverflow-full" className='btn cat' target="_blank">GitHub</a>
                    <a href="https://github.com/mungaiDaniel/stackoverflow-full" className='btn btn-warning' target="_blank">Live Demo</a>
                    </div>


            </article>
            </Slide>
            <Slide bottom>

            <article className='portfolio_item'>
               <div className='portfolio_item-image'>
                     <img src={top} className='top' alt="question" />

                </div> 
                    <h3>Salon Gerente</h3>
                    <div className='portfolio_item-cta'>
                    <a href="https://github.com/mungaiDaniel/Salon-Appointment-UI" className='btn cat' target="_blank">GitHub</a>
                    <a href="https://github.com/mungaiDaniel/Salon-Appointment-UI" className='btn btn-warning' target="_blank">Live Demo</a>
                    </div>


            </article>
            </Slide>
            <Slide right>

            <article className='portfolio_item'>
               <div className='portfolio_item-image'>
                     <img src={flat} className='flat' alt="question" />

                </div> 
                    <h3>  Word  Hunt</h3>
                    <div className='portfolio_item-cta'>
                    <a href="https://github.com/mungaiDaniel/React-dictionary" className='btn cat' target="_blank">GitHub</a>
                    <a href="https://github.com/mungaiDaniel/React-dictionary" className='btn btn-warning' target="_blank">Live Demo</a>
                    </div>


            </article>
            </Slide>

        </div>
    </section>
  )
}

export default Work