import React from 'react'
import './skill.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const data1 = [
  {
    id: 1,
    skill: 'C'
  },
  {
    id: 2,
    skill: 'Python'
  },
  {
    id: 3,
    skill: 'Java'
  },
  {
    id: 4,
    skill: 'JavaScript'
  },
  {
    id: 5,
    skill: 'HTML'
  },
  {
    id: 6,
    skill: 'CSS'
  },
  {
    id: 7,
    skill: 'SQL'
  },
  {
    id: 8,
    skill: 'R'
  }
]
const data2 =[
  {
    id: 1,
    skill: 'React'
  },
  {
    id: 2,
    skill: 'Node.js'
  },
  {
    id: 3,
    skill: 'Bootstrap'
  },
  {
    id: 4,
    skill: 'NumPy'
  },
  {
    id: 5,
    skill: 'pandas'
  }
]
const data3 = [
  {
    id: 1,
    skill: 'Git'
  },
  {
    id: 2,
    skill: 'Figma'
  },
  {
    id: 3,
    skill: 'VSCode'
  },
  {
    id: 4,
    skill: 'Trello'
  },
  {
    id: 5,
    skill: 'Microsoft Office'
  },
  {
    id: 6,
    skill: 'Google Suite'
  },
  {
    id: 7,
    skill: 'Docker'
  }
]

const skill = () => {
  return (
    <section id='skill'>
      <h5>My Skills</h5>
      <h2> </h2>

      <div className="container skill__container">
        {/* Languages */}
        <div className="skill__languages">
          <h3>Languages</h3>
          {
          data1.map(({id,skill}) => {
            return (
              <div className="skill__content">
                <article key={id} className='skill__details'>
                  <BsPatchCheckFill className='skill__details-icon'/>
                  <div>
                    <h4>{skill}</h4>
                  </div>
                  
                </article>
              </div>
            )
            
          })
          }
          
        </div>

        {/* Libraries and Frameworks */}
        <div className="skill__librariesframeworks">
          <h3>Libraries and Frameworks</h3>
          {
          data2.map(({id,skill}) => {
            return (
              <div className="skill__content">
                <article key={id} className='skill__details'>
                  <BsPatchCheckFill className='skill__details-icon'/>
                  <div>
                    <h4>{skill}</h4>
                  </div>
                  
                </article>
              </div>
            )
          })
          }
        </div>
          
        <div className="skill__tools">
          {/* Tools */}
          <h3>Tools</h3>
          {
          data3.map(({id,skill}) => {
            return (
              <div className="skill__content">
                <article key={id} className='skill__details'>
                  <BsPatchCheckFill className='skill__details-icon' />
                  <div>
                    <h4>{skill}</h4>
                  </div>
                  
                </article>
              </div>
            )
          })
          }
        </div>

      </div>
    </section>
  )
}

export default skill