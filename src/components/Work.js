import React, { useState } from 'react'
import question from '../asserts/question.jpg'
import flat from '../asserts/flat.jpg'
import data from '../data'
import top from '../asserts/top.jpg'
import { Flip, Slide, Zoom } from 'react-reveal'
import Modal from './Modal'
const Work = () => {

  const [model, setModel] = useState(false)
  const [tempdata, setTempdata] = useState([]);


  const getData = (img, title, desc, gitHub, liveDemo) =>{
    let tempData = [img, title, desc, gitHub, liveDemo]
    setTempdata(item => [img, title, desc, gitHub, liveDemo])
    return setModel(true)
  }
  return (
   <>

    <section id='worki' className='py-4 py-lg-5 container'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className='row justify-content-center align-item-center'>

            {
              data.cardData.map((item, index) =>{
                return(
                  <Zoom duration={3500}>
                  <div className='portfolio-card col-11 col-md-6 col-lg-3 mx-0 mb-4 ' key={index} onClick={() => getData(item.imgSrc, item.title, item.desc, item.gitHub, item.liveDemo)}>
                    <div className='card p-0 overflow-hidden h-100 shadow'>
                      <img src={item.imgSrc} className='card-img-top h-100' />
                      <div className='card-body'>
                        <h5 className='card-title font-weight-bold text-warning'>{item.title}</h5>
                      </div>
                    </div>
                  </div>
                  </Zoom>
                )
              })
            }


            {/* <Slide left>

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
                  </Slide> */}

        </div>
    </section>
    {
      model === true ?  <Modal img={tempdata[0]} title={tempdata[1]} desc={tempdata[2]} gitHub={tempdata[3]} liveDemo={tempdata[4]} hide={() => setModel(false)} /> : ''
    }
   
    </>
    
    
    
  )
}

export default Work