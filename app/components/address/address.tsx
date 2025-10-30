import React from "react";
import "./address.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Address() {
  return (
    <div className="address-section">
    
      <div className="map-container">
        <img
          src="./map.jpeg"
          alt="Location Map"
        />
      </div>

    
      <div className="contact-info">
        <h2>Contact</h2>

        <div className="info-block">
          <h3>Address</h3>
          <p>
            Riverside Building, County Hall, <br />
            Westminster Bridge Rd, London SE1 7PB <br />
            United Kingdom
          </p>
        </div>

        <div className="info-block">
          <h3>Email</h3>
          <p>contact@website.com</p>
        </div>

        <div className="info-block">
          <h3>Mobile</h3>
          <p>(657) 123-456</p>
          <p>(555) 241-6874</p>
        </div>

        <div className="info-block">
          <h3>Social</h3>
          <div className="social-icons">
            <FacebookIcon />
            <TwitterIcon />
            <YouTubeIcon />
            <InstagramIcon />
          </div>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="First Name*" required />
            <input type="text" placeholder="Last Name*" required />
          </div>
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
