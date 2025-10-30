"use client";

import React, {useState } from "react";
import "./Header.css";

import { useTheme } from "@/app/providers/ThemeProvider";

import { useAppSelector } from "@/app/redux/hooks";
import Navbar from "../navbar/Navbar";
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleTheme, theme } = useTheme();

  const {cartItem} = useAppSelector((state)=>state.cart)
  const [count,setCount]= useState(0)

  return (
      <Navbar/>
  );
};

export default Header;
