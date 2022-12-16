import React from 'react'
import './experiences.css'
import {BiCheck} from 'react-icons/bi'

const experiences = () => {
  return (
    <section id='experiences'>
      <h5>My Experience</h5>
      <h2> </h2>

      <div className="container experiences__container">
        <article className='experience'>
          <div className="experience__head">
            <h3>Computer Science Program Director</h3>
            <small className='text-light'>Rogers Communications<br></br>02/2022-05/2022</small>
            
          </div>
          
          <ul className="experience__list">
            <li>
              <BiCheck className='experience__list-icon' size={'4rem'}/>
              <p>Developed and taught an 8-week afterschool computer science program to 100 at-risk youth between 6 to 12 years old.</p>
            </li>

            <li>
              <BiCheck className='experience__list-icon' size={'4rem'}/>
              <p>Collaborated with colleagues and students on course content resulting in 45% increase in attendance.</p>
            </li>

            <li>
              <BiCheck className='experience__list-icon' size={'5rem'}/>
              <p>Created engaging activities using physical activity, pop culture and the arts to teach memory, conditional statements, for loops, and
functions on Scratch.</p>
            </li>
         
          </ul>
        </article>
         
        <article className='experience'>
          <div className="experience__head">
            <h3>Undergraduate Research Assistant</h3>
            <small className='text-light'>University of Guelph<br></br>05/2022-09/2022</small>
          </div>

          <ul className="experience__list">
            <li>
              <BiCheck className='experience__list-icon' size={'6rem'}/>
              <p>Supported faculty in the Sports Management program by leading technology research activities and advising clients
(such as Paralympics Canada) on current and future practices.</p>
            </li>

            <li>
              <BiCheck className='experience__list-icon' size={'4rem'}/>
              <p>Developed a Python program, using OpenCV and Pytesseract, to parse 1000+ PNGs of weekly sports ratings to CSV
files.</p>
            </li>

            <li>
              <BiCheck className='experience__list-icon' size={'4.5rem'}/>
              <p>Handled UI/UX website design of 10+ webpages with custom graphics using Figma, resulting in improved client
satisfaction by 80%.</p>
            </li>

            <li>
              <BiCheck className='experience__list-icon' size={'4rem'}/>
              <p>Built a website using HTML, CSS, Bootstrap, and JavaScript to display and filter 100+ pages academic research.</p>
            </li>

            
          </ul>
        </article>

        <article className='experience'>
          <div className="experience__head">
            <h3>Web Developer</h3>
            <small className='text-light'>University of Guelph<br></br>01/2023-04/2023</small>
            
          </div>

          <ul className="experience__list">
          <li>
              <BiCheck className='experience__list-icon' size={'4.5rem'}/>
              <p>Supported the Department of Molecular & Cellular Biology in the development of a WordPress website for peer reviewed articles.</p>
            </li>
            <li>
              <BiCheck className='experience__list-icon' size={'4.5rem'}/>
              <p>Implemented 7 features on the website to improve efficiency and design such as, integrating Qualtrics survey for client information.</p>
            </li>

            <li>
              <BiCheck className='experience__list-icon' size={'2rem'}/>
              <p>Corrected over 20+ issues related to the site and its features.</p>
            </li>

            <li>
              <BiCheck className='experience__list-icon' size={'1.3rem'} />
              <p>Increased Page speed score by 12%.</p>
            </li>

            <li>
              <BiCheck className='experience__list-icon' size={'1.3rem'} />
              <p>Created infographics for the website using React.js.</p>
            </li>

            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default experiences