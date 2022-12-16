import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>PUNEET SANDHER</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#services">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>

        <div className="footer__socials">
          <a href="https://github.com/p-sandher"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/puneet-sandher/"><BsLinkedin /></a>

        </div>

      </ul>
    </footer>
  )
}

export default Footer