"use client";
import React from "react";
import { blogData } from "../data/Blog";
import "./blog.css";
import { usePathname, useRouter } from "next/navigation";
import PageBar from "../components/pageBar/PageBar";

export default function page() {
  const router = useRouter();
//   const path = usePathname()
//   console.log(path);
  return (
    <div>
      {/* <PageBar pageName={'Blog'}/> */}
      <div className="blog-wrapper">
        {blogData.map((item) => (
          <div
            className="blog"
            onClick={() => router.push(`/blog/${item.id}`)}
            key={item.id}
          >
            <img src={item.image}></img>
            <div className="blog-content">
              <h4>TIPS</h4>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
