import React from 'react'
import "../style/Footer.css"
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "../image/jlc.jpeg"
const Footer = () => {
    return (
        <div className='footer-compo'>
            <div className='logo-compo'><h3>My JAVA LEARNING CENTER</h3>
            <img src={logo}></img>
            </div>
            <div className='explore'><h3>Explore Scaler</h3>
                <ul>
                    <li>Scaler Academy</li>
                    <li>Scaler DevOps</li>
                    <li>Scaler Data Science & ML</li>
                    <li>Scaler School of Technology</li>
                    <li>Scaler Neovarsity</li>
                    <li>Scaler Edge</li>
                    <li>Become a Mentor</li>
                    <li>Become a TA</li>
                    <li>Become a Career Coach</li>
                </ul>
            </div>
            <div className='resource'><h3>Resources</h3>
            <ul>
                <li>  Blog</li>
                <li>About us</li>
                <li>Contact Us</li>
                <li>Careers</li>
                <li>Review</li>
                <li>Join Our Discord</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='follow'>
                <h3>Follow us o</h3>
                <ul>
                <li><FaYoutube />YouTube</li>
                <li><FaLinkedin/>LinkedIn</li>
                <li>Facebook</li>
                <li>Twiter</li>
                <li>Review</li>
                <li>Instagram</li>
                <li>Reviews on Quora</li>
                
                </ul>
            </div>
            <hr/>
            <div className='tutorials'><h3>Tutorials</h3>
            <div className='tuto-links'>Data Structures Tutorial
|
Python Tutorial
|
Java Tutorial
|
DBMS Tutorial
|
C Tutorial
|
JavaScript Tutorial
|
C++ Tutorial
|
SQL Tutorial
|
Data Science Tutorial
|
Software Engineering Tutorial
|
HTML Tutorial
|
CSS Tutorial</div>
            </div>
        </div>
    )
}


export default Footer
