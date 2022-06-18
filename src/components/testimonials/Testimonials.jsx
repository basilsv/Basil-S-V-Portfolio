import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.jpg'

import {  Navigation , Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
      avatar: AVTR1,
      name: 'Taju Punnoose | Senior Software Engineer Telus',
      review: 'Basil Varghese is a skilled professional trying to break into a career with Full Stack development. I have had the chance to work with him on a few projects and to sum up it was a hassle and tension - free experience building my website.'
      
    },
    {
      avatar: AVTR2,
      name: 'Sachin Jijo Jacob | Senior Software Developer Citi Bank',
      review: 'I have consulted with Basil Varghese on a lot of difficult string processing tasks and also data collection with Web Scraping. He has always come through with a more than satisfactory result.'
      
    },
    {
      avatar: AVTR3,
      name: 'Jonathan Wiersma | Enterprise Service Manager',
      review: 'Basil Varghese being my student in the past has really been into learning new things and has a very good attention to detail which he always brings to both academic and professional work.'
      
    }
    ]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <div className="container testimonials_container"
            
            modules={[Navigation,Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
            >
                <Swiper>
               {
                   data.map(({avatar,name,review},index)=> {
                       return(

                        <SwiperSlide key = {index} className="testimonial">
                        <div className="client__avatar">
                            <img src={avatar} alt ="" /> 
                            </div>
                       <h5 className="client__name">{name}</h5>
                            <small className="client__review">
                                {review}
                            </small>
                        
                    </SwiperSlide>
                       )
                   })
               }
               </Swiper>

                
            </div>
        </section>
    )
}

export default Testimonials
