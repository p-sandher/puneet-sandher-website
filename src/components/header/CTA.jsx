import React from 'react'
import CV from '../../assets/Puneet-Sandher-Resume.pdf'

const CTA = () => {
  return (
  <div className="cta">
      <a href={CV} download className = 'btn'>Download Resume</a>
      <a href="#contact" className='btn btn-primary'>Let's Connect</a>

  </div>
  )
}

export default CTA