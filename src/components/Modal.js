import React from 'react'

const Modal = ( {img, title, desc, hide, gitHub, liveDemo }) => {
    let modelStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)',
    }
  return (
    <div className="modal show fade" style={modelStyle} >
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{title}</h5>
        <button type="button" className="btn-close" onClick={hide}>
        </button>
      </div>
      <div className="modal-body">
        <img src={img}  alt='image'  className='img-fluid'/>
        <p>{desc}</p>
      </div>
      <div class="modal-footer">
        <a href={gitHub} target='_blank'><button type="button" class="btn btn-warning">Github</button></a>
        <a href={liveDemo} target='_blank'><button type="button" class="btn btn-secondary" >Live Demo</button></a>
      </div>
    </div>
  </div>
</div>
  )
}

export default Modal