import React from 'react'

import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt ="About Image" className="about_me_1"/>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>3+ Years</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>20+ completed </small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Side Projects</h5>
                            <small>5+ completed</small>
                        </article>
                    </div>
                    <p>Skilled Software Engineer with skill sets in JS frameworks like Svelte, React and Vue along with an eye for detail. Along with front end technologies also proficient in NoSQL and SQL data
processing. Data Analytics and AI are also among my passions.</p>
                <a href="#contact" className="btn btn-primary">Let's talk</a>
                </div>

            </div>
        </section>
    )
}

export default About
