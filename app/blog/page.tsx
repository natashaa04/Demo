"use client";
import React, { useEffect, useState } from "react";

import "./blog.css";
import { usePathname, useRouter } from "next/navigation";
import PageBar from "../components/pageBar/PageBar";
import Topbar from "../components/topbar/Topbar";
import { useApi } from "../customHooks/useApi";
import { blogT } from "../types/product";

export default function page() {
  const router = useRouter();

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
    <div>
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
