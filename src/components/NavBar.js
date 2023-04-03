import React from 'react'
import {HiHome} from 'react-icons/hi'
import {FaUserAlt} from 'react-icons/fa'
import {AiFillBook} from 'react-icons/ai'
import {MdMiscellaneousServices} from 'react-icons/md'
import {AiFillMessage} from 'react-icons/ai'
import { useState } from 'react'

const NavBar = () => {
     const [activeNav, setActiveNav] = useState('')

  return (
    <nav >
     <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><HiHome/></a>
     <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><FaUserAlt/></a>
     <a href='#experiences' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}  ><AiFillBook/></a>
     <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} ><MdMiscellaneousServices/></a>
     <a href='#contacts' onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''} ><AiFillMessage/></a>
   </nav>
  )
}

export default NavBar