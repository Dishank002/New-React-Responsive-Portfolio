import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";
// import Background from "./Background";
import { NavLink } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaChevronDown,
  FaChevronUp,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import DP from "../Images/Profile5.png";
import Background from './Background';

const MainLayout = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'black' }} className="main-layout">
      
      <div className="sub-main-layout">
      {/* <Background className="Background"/> */}
        <div className={`left-box-L ${isExpanded ? "expanded" : ""}`}>
          <Background
             minParticles={isExpanded ? 30 : 30}
             density={isExpanded ? 30000 : 30000}
            className="box-background"
          />
          <div className="left-box-content">
            <div className="profile-section">
              <div className="profile-pic">
                <img src={DP} alt="Profile" />
              </div>
              <div className="profile-info">
                <h1>Dishank Girase</h1>
                <p>Computer Engineer</p>
              </div>
              <button
  className="mobile-expand-btn"
  onClick={() => {
    if (!isExpanded) {
      setIsExpanded(true); // Immediate expand
    } else {
      // Delay collapse slightly for smoother transition
      setTimeout(() => setIsExpanded(false), 300);
    }
  }}
>
  {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
</button>
            </div>
            <hr></hr>
            <div className="contact-details">
              <ul className="contact-list">
                <li className="contact-item">
                  <div className="icon-box">
                    <FaEnvelope className="contact-icon" />
                  </div>
                  <div className="contact-info">
                    <p className="contact-title">Email</p>
                    <a
  href="mailto:dishugirase002@gmail.com"
  className="contact-link"
>
  {isExpanded ? "dishugirase002@gmail.com" : "dishugirase002@gm.."}
</a>
                  </div>
                </li>
                <li className="contact-item">
                  <div className="icon-box">
                    <FaPhone className="contact-icon" />
                  </div>
                  <div className="contact-info">
                    <p className="contact-title">Phone</p>
                    <a href="tel:+91 9359850196" class="contact-link">+91 93598501XX</a>
                  </div>
                </li>
                <li className="contact-item">
                  <div className="icon-box">
                    <IoLocation className="contact-icon" />
                  </div>
                  <div className="contact-info">
                    <p className="contact-title">Location</p>
                    <span className="contact-link">Pune, maharashtra</span>
                  </div>
                </li>
              </ul>
              <div className="social-icons">
                <a
                  href="https://github.com/Dishank002"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="social-icon" />
                </a>
                <a
                  href="https://linkedin.com/in/dishankgirase"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="social-icon" />
                </a>
                <a
                  href="https://instagram.com/dishank_002"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="right-box-R">
        <Background
            minParticles={120}
            density={20000}
            className="box-background"
          />
          <nav className="right-nav">
            <NavLink to="/" end>About</NavLink>
            <NavLink to="/experience">Resume</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
