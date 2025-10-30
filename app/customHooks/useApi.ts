"use client"
import React from 'react'
import { getApi } from '../lib/utility'

export const useApi = () => {
 
    const getOilData=async()=>{
      const data= await getApi("oil")
      return data.json();
    }
     const getBlogData=async()=>{
      const data= await getApi("Blog")
      return data.json();
    }
     const getTestimonialData=async()=>{
      const data= await getApi("testimonial")
      return data.json();
    }
    

  return {getOilData,getBlogData,getTestimonialData}
}
