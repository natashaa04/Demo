import Image from "next/image";
import Header from "../header/Header";
import HeroSection from "../HeroSection/HeroSection";
import ElementSection from "../elementSection/ElementSection";
import Product from "../Product/Product";
import Summary from "../summary/Summary";
import Testimonial from "../testimonial/Testimonial";
import Blog from "../blog/Blog";

export default function HomePage() {
  return (
    <div>
  
      <HeroSection />
      <ElementSection />
      <Product />
      <Summary />
      <Testimonial/>
      <Blog/>
    </div>
  );
}
