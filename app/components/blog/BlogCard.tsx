import React from "react";
import { blogT } from "@/app/types/product";
import { BlogCardProps } from "@/app/types/props";


const BlogCard = ({ item }: BlogCardProps) => {
  return (
    <div className="blog-card">
      <img src={item.image} alt={item.title} className="blog-img" />
      <div className="blog-content">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <a href={item.link} className="learn-more">Learn More</a>
      </div>
    </div>
  );
};

export default BlogCard;
