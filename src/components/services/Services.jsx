import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
        <section id ="services">
           <h5>What I offer</h5>
           <h2>Services</h2>

           <div className="container services__container">
               <article className="service">
                   <div className="service__head">
                       <h3>UI/UX Design</h3>
                   </div>

                   <ul className="service__list">
                       <li>
                           <BiCheck className="service__list-icon"></BiCheck>
                           <p>Websites made with Wordpress, ReactJS, Svelte and Vue</p>
                       </li>
                       <li>
                           <BiCheck className="service__list-icon"></BiCheck>
                           <p>HTML, CSS and JS coding practices. Responsive Design</p>
                       </li>
                       <li>
                           <BiCheck className="service__list-icon"></BiCheck>
                           <p>UI/UX design best practices. Keeping in mind the Users ease of use and click stream analyis.</p>
                       </li>
                       <li>
                           <BiCheck className="service__list-icon"></BiCheck>
                           <p>Mobile App UI, Website Design with Adobe XD and client verification before beginning development.</p>
                       </li>
                       <li>
                           <BiCheck className="service__list-icon"></BiCheck>
                           <p>PowerBI Dashboards, Tableau Dasboards, ReactJS Dashboard for descriptive analytics.</p>
                       </li>
                      
                   </ul>
               </article>
               <article className="service">
                   <div className="service__head">
                       <h3>Web Development</h3>
                   </div>

                   <ul className="service__list">
                       <li>
                           <BiCheck className="service__list-icon"></BiCheck>
                           <p>15+ Wordpress professional clients. 5+ Freelance clients. ReactJS portfolio websites</p>
                       </li>
                       <li>
                           <BiCheck className="service__list-icon"></BiCheck>
                           <p>Use of plugins wherever needed to complement functionality.</p>
                       </li>
                       <li>
                           <BiCheck className="service__list-icon"></BiCheck>
                           <p>Real Time Database with Firebase integration and Bootstrap UI</p>
                       </li>
                       <li>
                           <BiCheck className="service__list-icon"></BiCheck>
                           <p>Ajax queries to Database. Django python integration.</p>
                       </li>
                       <li>
                           <BiCheck className="service__list-icon"></BiCheck>
                           <p>Flask / Django API string preprocessing and Data Structures</p>
                       </li>
                       
                      
                   </ul>
               </article>
         
               <article className="service">
                   <div className="service__head">
                       <h3>Data Analytics & A.I</h3>
                   </div>

                   <ul className="service__list">
                       <li>
                           <BiCheck className="service__list-icon"></BiCheck>
                           <p>RFM, Pareto, Market Basket Analysis on Retail Transactional Data</p>
                       </li>
                       <li>
                           <BiCheck className="service__list-icon"></BiCheck>
                           <p>Custom Data Science Algorithms: Customer Prediction, Expenditure Deviation, Customer Profitability, Profit/Loss Time Series Overlay</p>
                       </li>
                       <li>
                           <BiCheck className="service__list-icon"></BiCheck>
                           <p>PDF generated reports stored in Document Database and sent via Email server to client email on scheduled Cron job.</p>
                       </li>
                       <li>
                           <BiCheck className="service__list-icon"></BiCheck>
                           <p>A.I Chat Bot offline desktop App to play games, store sentiment data, store answers to queries and Fuzzy wuzzy matching to retrieve most likely answer to questions.</p>
                       </li>
                       <li>
                           <BiCheck className="service__list-icon"></BiCheck>
                           <p>Python Requests for web crawling, TextBlob for string preprocessing, caffe and affin modules for Sentiment Analysis.</p>
                       </li>
                      
                   </ul>
               </article>
           </div>
        </section>
    )
}

export default Services
