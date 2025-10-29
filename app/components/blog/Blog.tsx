"use client";

import React from "react";
import Slider from "react-slick";

import "./Blog.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogData } from "@/app/data/Blog";

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="blog-section">
      <h2 className="blog-title">News From The Blog</h2>
      <Slider {...settings}>
        {blogData.map((item) => (
          <div key={item.id} className="blog-card">
            <img src={item.image} alt={item.title} className="blog-img" />
            <div className="blog-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href={item.link} className="learn-more">Learn More</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Blog;
