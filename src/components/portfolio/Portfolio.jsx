import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/stocks-portfolio.jpeg'
import IMG2 from '../../assets/covid-19-portfolio1.jpeg'
import IMG3 from '../../assets/tictactoe-portfolio.jpeg'
import IMG4 from '../../assets/library-portfolio.jpeg'
import IMG5 from '../../assets/website-portfolio.jpeg'

// dynamically generated portfolio items
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'S&P 500 Stock Prices Web Scraper',
    github: 'https://github.com/p-sandher/S-P-500-Stock-Price-Scraper',
  },
  {
    id: 2,
    image: IMG2,
    title: 'COVID-19 Data Visualizer',
    github: 'https://github.com/p-sandher/COVID-19-Data-Visualizer-',
  },
  {
    id: 3,
    image: IMG3,
    title: 'OOP TicTacToe with GUI',
    github: 'https://github.com/p-sandher/OOP-TicTacToe',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Library Study Room Booking System',
    github: 'https://github.com/p-sandher/Library-Study-Room-Booking-System',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Personal Portfolio Website',
    github: 'https://github.com/p-sandher/Personal-Portfolio-Website',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Portfolio</h5>
      <h2> </h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title}/>
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'>Github</a>
                  </div>
                </div>
              </article>
            )
          })
        }

      

      </div>
    </section>
  )
}

export default Portfolio