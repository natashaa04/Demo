"use client";
import { useAppSelector } from "@/app/redux/hooks";
import Header from "../header/Header";
import HeroSection from "../HeroSection/HeroSection";
import ElementSection from "../elementSection/ElementSection";
import Product from "../../product/page";
import Summary from "../summary/Summary";
import Testimonial from "../testimonial/Testimonial";
import Blog from "../blog/Blog";
import Admin from "../admin/components/Admin";

export default function HomePage() {
  const user = useAppSelector((state) => state.user.user); 

  if (user?.role === "admin") {
    return <Admin />;
  }

  return (
    <div>
      <HeroSection />
      <ElementSection />
      <Product />
      <Summary />
      <Testimonial />
      <Blog />
    </div>
  );
}
