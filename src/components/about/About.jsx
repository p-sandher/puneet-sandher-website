import React from 'react'
import './about.css'
import ME from '../../assets/about-me-pic1.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2> </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <p>
          I am a second-year student at the University of Guelph where I study software engineering with a minor in project management. I like exploring all avenues of technology, currently, I am a web developer at the University of Guelph. My goal is to branch into backend development and I am actively searching for internships for <b>Summer and Fall 2023. </b>

<br></br><br></br>When I’m not coding, I spend my free time being a bookworm, podcast enthusiast and amateur hiker. 
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>

        

      </div>   

    </section>
  )
}

export default About