"use client";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <div className="footer-logo">
      
            <h2>ESSENTIAL</h2>
          </div>
          <p>
            Pellentesque id rhoncus augue nec maximus enim nunc commodo purus sit
          </p>
          <ul className="footer-contact">
            <li>
              <LocationOnOutlinedIcon className="footer-icon" />
              London Eye, London, United Kingdom
            </li>
            <li>
              <PhoneOutlinedIcon className="footer-icon" />
              (657) 123-456
            </li>
            <li>
              <EmailOutlinedIcon className="footer-icon" />
              contact@website.com
            </li>
            <li>
              <AccessTimeOutlinedIcon className="footer-icon" />
              Mon - Fri / 9:00 AM - 6:00 PM
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>INFORMATION</h4>
            <a href="#">About Us</a>
            <a href="#">Store Location</a>
            <a href="#">Contact Us</a>
            <a href="#">Shipping & Delivery</a>
            <a href="#">Latest News</a>
            <a href="#">Our Sitemap</a>
          </div>

          <div className="footer-column">
            <h4>OUR SERVICE</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Sale</a>
            <a href="#">Customer Service</a>
            <a href="#">Delivery Information</a>
            <a href="#">Payments</a>
            <a href="#">Saved Cards</a>
          </div>

          <div className="footer-column">
            <h4>MY ACCOUNT</h4>
            <a href="#">Sign In</a>
            <a href="#">Register</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help & Support</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© COPYRIGHT – OCEANWP</p>
      </div>
    </footer>
  );
}
