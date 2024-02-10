
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../style/Header.css";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { IoIosCall } from "react-icons/io";
import jlc from "../image/jlc.jpeg"

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
 
  return (
    <>
    <nav className="navbar">
      <div className="container">
        <div className="logo">
       <Link to={"/"}> <img src={jlc}/></Link> 
          {/* <Link to={"/"}> <h5><span>My</span>JAVA LEARNING CENTER</h5></Link> */}
        </div>
        <div className='call'><IoIosCall /><h5>6391857675</h5></div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? <RxCross2 size="20px"/> : <FiMenu size="20px" />}
        </div>

        <div className={`nav-elements  ${showNavbar && 'active'}`}>

          <ul>

            <li>
              <Link to={"/academy"}>Academy</Link>

            </li>
            <li>
              <Link to={"/devops"}>DevOps<span>New</span></Link>
            </li>
            <li>
              <Link to={"/datascience"}>Data Science & ML</Link>
            </li>
            <li>
              <Link to={"/schooloftechnology"}>School of Technology</Link>
            </li>
            <li>
              <Link to={"/events"}>Events</Link>
            </li>
            <li>
              <Link to={"/topics"}>Topics</Link>
            </li>

          </ul>
          <div className="login">
            <Link to={"/mentor"}>Be a mentor</Link>
            <button className='login-btn'>Login</button>
          </div>
        </div>

      </div>
    </nav>
    
    </>
  );
};

export default Header;
