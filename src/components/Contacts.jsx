
import {SiGmail} from "react-icons/si"
import {RiWhatsappFill} from "react-icons/ri"
import { Zoom } from 'react-reveal'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contacts = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6enqzjo', 'template_mi6qsv4', form.current, 'Dw7QCp2LM9-AR9IzU')
     
    e.target.reset()
  };

  return (
    <Zoom>

    <section id='contacts'>

        <h5> Get In Touch </h5>
        <h2>Contact Me</h2>
        <div className='container contact_container'>
        <div className="contact_options">
            <article className="contact_option">
              <SiGmail className='contact_icon'/>
              <h4>Email</h4>
              <small>danitomonga@gmail.com</small>
              <a href='https://mail.google.com/mail/?view=cm&fs=1&to=danitomonga@gmail.com&su=SUBJECT&body=BODY' target="_blank">Send a message</a>
            </article>
            <article className="contact_option">
              <RiWhatsappFill className='contact_icon'/>
              <h4>WhatsApp</h4>
              <small>0727980611</small>
              <a href='https://api.whatsapp.com/send?phone+254727980611 ' target="_blank">Send a message</a>
            </article>
            
        </div>
        <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Full Name' required />
              <input type="email" name='email' placeholder='Your Email' required />
              <textarea name="message" placeholder='Your Message' rows="7"> </textarea>
              <button type='submit' className='btn btn-warning'> Send Message </button>
            </form>
        </div>
    </section>
    </Zoom>
  )
}

export default Contacts