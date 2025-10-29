"use client";

import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Topbar from "../topbar/Topbar";
import { useTheme } from "@/app/providers/ThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from '@mui/icons-material/LightMode';
import { useSelector } from "react-redux";
import { useAppSelector } from "@/app/redux/hooks";
import Navbar from "../navbar/Navbar";
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleTheme, theme } = useTheme();

  const {cartItem} = useAppSelector((state)=>state.cart)
  // console.log(cartItem)

  const [count,setCount]= useState(0)

  useEffect(()=>{
    
     const totalQuantity= cartItem.reduce((acc,item)=>{
      acc+= item.quantity;
      return acc;
     },0);
     setCount(totalQuantity)
  },[cartItem])

  return (
    <>
      <Navbar/>
    </>
  );
};

export default Header;
