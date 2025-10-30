"use client";

import React, { useEffect, useState } from "react";
import { useApi } from "@/app/customHooks/useApi";
import { blogT } from "@/app/types/product";
import "./BlogPage.css";
import PageBar from "@/app/components/pageBar/PageBar";

interface BlogPageProps {
  id: number;
}

export default function BlogPage({ id }: BlogPageProps) {
  const [blogData, setBlogData] = useState<blogT[]>([]);
  const [blog, setBlog] = useState<blogT | null>(null);
  const { getBlogData } = useApi();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogData();
      setBlogData(data);
    };
    fetchData();
  }, [getBlogData]);

  useEffect(() => {
    if (blogData.length > 0) {
      const found = blogData.find((item) => item.id === id) || null;
      setBlog(found);
    }
  }, [id, blogData]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="blog-ctn">
      <img src={blog.image} alt={blog.title} />
      <h3>{blog.title}</h3>
      <p>{blog.desc}</p>
    </div>
  );
}
