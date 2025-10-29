"use client"

import { CartItem } from "../types/product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const getStoredData=()=>{
    if (typeof window !== "undefined") {
  const data= localStorage.getItem("cartItems");
    if(data)return JSON.parse(data);
} else return [];
}

export const setStoredData=(data:CartItem[])=>{
    localStorage.setItem("cartItems",JSON.stringify(data))
}


  