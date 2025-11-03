"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./blog.css";
import { useApi } from "../customHooks/useApi";
import { blogT } from "../types/product";
import BlogCard from "../components/blog/BlogCard";

export default function BlogPage() {
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
    <div className="blog-wrapper">
      {blogData.map((item) => (
        <div key={item.id} onClick={() => router.push(`/blog/${item.id}`)}>
          <BlogCard item={item}/>
        </div>
      ))}
    </div>
  );
}
