"use client"
import { useAppSelector } from '@/app/redux/hooks';
import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css"
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Topbar from "../topbar/Topbar";
import { useTheme } from "@/app/providers/ThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from '@mui/icons-material/LightMode';
import { useRouter } from 'next/navigation';
import { getStoredData, setStoredData } from '@/app/lib/utility';

export default function Navbar() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
       const { toggleTheme, theme } = useTheme();
       const router= useRouter()
     
       const {cartItem} = useAppSelector((state)=>state.cart)
      
     console.log("get stored data",getStoredData())
       const [count,setCount]= useState(0)
   
       useEffect(()=>{
         
          const totalQuantity= cartItem.reduce((acc,item)=>{
           acc++;


           return acc;  
          },0);
          setCount(totalQuantity)
           
          setStoredData(cartItem)

       },[cartItem])
     
  return (
    <div><div className="navbar">
            <div className="logo">
              <Image
                src="/elogo.png"
                alt="Essential Logo"
                width={160}
                height={40}
                priority
              />
            </div>
    
            <div className="nav-right">
              <nav className="nav-links">
                <a onClick={()=>router.push('/')} className="active">
                  HOMEPAGE
                </a>
                <a onClick={()=>router.push('/shop')}>SHOP</a>
                <a onClick={()=>router.push('/blog')}>BLOG</a>
                <a onClick={()=>router.push("/contact")}>CONTACT</a>
                <a onClick={()=>router.push("/account")}>MY ACCOUNT</a>
              </nav>
    
              <button className="cart-icon" onClick={()=>router.push("/cart")}>
                <ShoppingBagOutlinedIcon />
                <span className="cart-count">{count}</span>
              </button>
              <button className="toggle-btn" onClick={toggleTheme}>
                {theme==='dark'?<DarkModeIcon/>:<LightModeIcon/>}
              </button>
    
              <div
                className="mobile-menu-icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </div>
            </div>
          </div>
    
          {isMenuOpen && (
            <div className="mobile-menu">
              <a onClick={()=>router.push('/')}>HOMEPAGE</a>
              <a onClick={()=>router.push('/shop')}>SHOP</a>
              <a onClick={()=>router.push('/blog')}>BLOG</a>
              <a onClick={()=>router.push('/contact')}>CONTACT</a>
              <a onClick={()=>router.push('/account')}>MY ACCOUNT</a>
            </div>
          )}</div>
  )
}

