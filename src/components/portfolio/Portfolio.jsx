import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio11.png'
import IMG2 from '../../assets/portfolio22.png'
import IMG3 from '../../assets/portfolio33.jpeg'
import IMG4 from '../../assets/portfolio44.png'
import IMG5 from '../../assets/portfolio55.png'
import IMG6 from '../../assets/portfolio66.png'

const data =[
    {
      id:1,
      image:IMG1,
      title: 'ReactJS portfolio',
      github:'https://github.com',
      demo: '#'
    },
     {
      id:2,
      image:IMG2,
      title: 'Flask API Python',
      github:'https://github.com',
      demo: 'https://demo.com'
    },
     {
      id:3,
      image:IMG3,
      title: 'Web Scraping Python',
      github:'https://github.com',
      demo: 'https://demo.com'
    },
     {
      id:4,
      image:IMG4,
      title: 'Data Analytics',
      github:'https://github.com',
      demo: 'https://demo.com'
    },
     {
      id:5,
      image:IMG5,
      title: 'Artificial Intelligence',
      github:'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id:6,
      image:IMG6,
      title: 'React Native',
      github:'https://github.com',
      demo: 'https://demo.com'
    }
    ]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id,image,title,github,demo})=>{
                        return(
                            <article className="portfolio__item" key={id}>
                    <div className="portfolio__item-image">
                        <img src={image} alt={title} />
                    </div>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                        <a href={github} className="btn" target="_blank">Github</a>
                        <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                        </div>
                        
                   
                </article>
                        )

                    }
                    )
                } 
               
            </div>
        </section>
    )
}

export default Portfolio
