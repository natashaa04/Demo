"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Blog.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { blogT } from "@/app/types/product";
import { useApi } from "@/app/customHooks/useApi";
import BlogCard from "./BlogCard";

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const [blogData, setBlogData] = useState<blogT[]>([]);
  const { getBlogData } = useApi();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogData();
      setBlogData(data);
    };
    fetchData();
  }, [getBlogData]);

  return (
    <div className="blog-section">
      <h2 className="blog-title">News From The Blog</h2>
      <Slider {...settings}>
        {blogData.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Blog;
