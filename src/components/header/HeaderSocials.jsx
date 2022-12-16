import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/puneet-sandher/" target="_blank"><BsLinkedin size={'2.5rem'}/></a>
        <a href="https://github.com/p-sandher" target="_blank"><FaGithub size={'2.5rem'}/></a>

    </div>
  )
}

export default HeaderSocials

//issue with target