"use client";

import React, { useEffect, useState } from "react";
import "./testimonial.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { testimonialsT } from "@/app/types/product";
import { useApi } from "@/app/customHooks/useApi";

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button className="arrow right" onClick={onClick}>
      <ArrowForwardIosIcon />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button className="arrow left" onClick={onClick}>
      <ArrowBackIosIcon />
    </button>
  );
};

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Testimonials = () => {

const [testimonials,setTestimonials]= useState<testimonialsT[]>([])
      const {getTestimonialData}= useApi();
    
    
      useEffect(() => {
        const fetchData = async () => {
          const data = await getTestimonialData(); 
          setTestimonials(data);                
        };
    
        fetchData();
      }, [getTestimonialData]); 

  return (
    <section className="testimonials">
      <h2>Our Best Customers</h2>
      <div className="stars">****************</div>

      <div className="testimonial-container">
        <Slider {...settings}>
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.id}>
              <p className="message">{t.message}</p>
              <div className="profile">
                <img src={t.image} alt={t.name} className="avatar" />
                <div>
                  <h4>{t.name}</h4>
                  <p className="title">{t.title}</p>
                  <div className="rating">{"*".repeat(t.rating)}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
