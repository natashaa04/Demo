"use client";
import { blogData } from "@/app/data/Blog";
import { addToCart } from "@/app/redux/cartSlice";
import { useAppDispatch } from "@/app/redux/hooks";
import { blogT } from "@/app/types/product";
import React, { useEffect, useState } from "react";
import "./BlogPage.css"
import PageBar from "@/app/components/pageBar/PageBar";

interface blogP {
  id: number;
}
export default function BlogPage({ id }: blogP) {
  const data = blogData.find((item) => item.id === id);

  const [blog, setBlog] = useState<blogT>();
  const dataa = blogData.find((item) => item.id === id);
  console.log("data is", data, id);

  useEffect(() => {
    setBlog(dataa);
  }, [id]);
  return (
    <div>
        <PageBar/>
      <div className="blog-ctn">
        <div >
        <img src={blog?.image}></img>
        </div>
        <h3>{blog?.title}</h3>
        <p>{blog?.desc}</p>
      </div>
    </div>
  );
}
