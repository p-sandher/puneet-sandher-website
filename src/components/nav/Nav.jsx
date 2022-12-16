import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUserSwitch} from 'react-icons/ai'

import {BiBook} from 'react-icons/bi'


import {BiMessageDetail} from 'react-icons/bi'

import {VscTools} from 'react-icons/vsc'

// import {useState} from 'react'

const Nav = () => {
  // const[activeNav, setActiveNav] = useState('#');
  // bring to the top of the page
  return (
   <nav>
     <a href="#" className='active'><AiOutlineHome/></a>
     <a href="#about"><AiOutlineUserSwitch/></a>
     <a href="#experience"><VscTools/></a>
     <a href="#services"><BiBook/></a>
     <a href="#contact"><BiMessageDetail/></a>
   </nav>
  )
}

export default Nav

// set active nav i didnt do