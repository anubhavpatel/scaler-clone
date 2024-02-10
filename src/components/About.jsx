import React from 'react'
import "../style/About.css"
import book from "../image/man-book.png"
import lap from "../image/man-lap.png"
import career from "../image/career.png"
import pic from "../image/pic.jpg"
import quora from "../image/quora.svg"
import linkedin from "../image/linkedin.png"
import vid from "../image/scaler.mp4"
import google from "../image/google.png"
import microsoft from "../image/microsoft.png"
import { FaArrowDown } from "react-icons/fa6";
import mern from "../image/mern.png"
import java from "../image/java.png"
const About = () => {
  return (
    <div className='about'>
      <div className='roadmap'>
        <h1>Roadmap to Become a Full-Stack Developer</h1>
        <h6>with an Industry Expert</h6>
        <div className='roadmap-date'>
          <p>STARTS ON:<span>January 23, 2024 7:30 PM (IST)</span></p>
          <p>ENDS ON:<span>January 23, 2024 10:00 PM (IST)</span></p>
          <p>VENUE:<span>Online</span></p>
        </div>
      </div>
      <hr />
      <div className='about-1'>
        <p>About this Masterclass</p>
      </div>
      <div style={{ fontSize: ".9rem" }}>
        <p>Have you ever wondered what sets apart a good developer from a great one? It's the ability to traverse the entire landscape of web development, from designing captivating front-end interfaces to architecting robust back-end systems.</p><br />
        <p>So, are you ready to decode the secrets of becoming a Full-Stack Developer? 🧑‍💻</p><br />
        <p>From learning the relevant tools to finding the right learning resources, this Scaler Masterclass will equip you with a holistic understanding of Full-Stack Development. </p>
        <br />
      </div>
      <div className='about-1'>
        <p>What You Will Gain From This Masterclass</p>
      </div>
      <ul className='a'>
        <li>How to become a Full-stack Developer</li>
        <li>Learning relevant tools to start your career</li>
        <li>Understanding what and where to learn</li>
        <li>List of technologies to master Full-Stack Development</li>
      </ul>
      <div className='about-1'>
        <p>Meet Siddharth Taneja (<a style={{ textDecoration: "none", color: "blue" }} href='https://www.linkedin.com/in/anubhavpatel063/' target="_blank">LinkedIn</a>)</p>
      </div>
      <ul className='a'>
        <li>Previously worked at Media.net</li>
        <li>Frontend Team Lead at Scaler Academy</li>
        <li>Top-rated Full Stack instructor</li>
      </ul>
      <div className='certificate'>
        <p>Certificate- <span>All attendees get certificates from Anshuman Singh and Scaler Academy! Please be careful while entering your details while registering since they will go on your Certificates</span></p>
      </div>
      <div className='about-1'>
        <p>This Masterclass is for</p>
      </div>
      <div className='masterclass'>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={book} />
          <p>SDEs looking to upskill</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={lap} />
          <p>SDEs wanting to change from Service to Product Companies</p>
        </div>
      </div>
      <div className='about-1'>
        <p>What our Learners have to say</p>
      </div>
      <div className='review'>
        <div className='review-1'>
          <div className='review-2'>
            <div className='pic'>
              <img src={pic} />
            </div>
            <div>
              <p>Anubhav Patel</p>
              <p style={{ color: '#505050', fontSize: ".7rem" }}>B.Tech from BIET Jhansi</p>
            </div>
            <div className='as'>
              <img src={quora} />
            </div>
          </div>
          <div style={{ fontSize: ".8rem", marginTop: ".5rem", color: "#393999" }}>
            <p>A graduate student in the Department of Information Technology pursuing Bachelor of Technology at Bundelkhand Institute of Engineering & Technology, Jhansi. My interests primarily lie in the areas of Web Development, and I am seeking exciting opportunities related to the same. I also possess a broad set of technical skills for which I am ready to address some of technology's greatest challenges and make an impact on millions, if not billions, of users.</p>
          </div>
        </div>
        <div className='review-1'>
          <div className='review-2'>
            <div className='pic'>
              <img src={pic} />
            </div>
            <div>
              <p>Anubhav Patel</p>
              <p style={{ color: '#505050', fontSize: ".7rem" }}>B.Tech from BIET Jhansi</p>
            </div>
            <div className='as'>
              <img src={linkedin} />
            </div>
          </div>
          <div style={{ fontSize: ".8rem", marginTop: ".5rem", color: "#393999" }}>
            <p>A graduate student in the Department of Information Technology pursuing Bachelor of Technology at Bundelkhand Institute of Engineering & Technology, Jhansi. My interests primarily lie in the areas of Web Development, and I am seeking exciting opportunities related to the same. I also possess a broad set of technical skills for which I am ready to address some of technology's greatest challenges and make an impact on millions, if not billions, of users.</p>
          </div>
        </div>

      </div>
      <div>
        <img src={career} />
      </div>
      <div className='about-1'>
        <p>About Scaler Academy</p>
      </div>
      <div style={{ fontSize: ".9rem", color: "#505050" }}>
        <p>Many aspirants (like us!) who enter software engineering are exposed to conventional teaching methods and are taught to ‘cram’ content. This creates a gap in their Computer Science learning, makes them underconfident, and prevents them from accelerating in their career. Enter Scaler Academy!<br /><br />
          Scaler Academy is a tailor-made program, by the industry, for the industry. It is to help master the foundations of Computer Science (Data Structure Algorithms & System Design) and take their career to the next level, via: </p><br />

        <ul className='a'>
          <li>A Structured, Guided and Industry-Vetted curriculum</li>
          <li>Live Classes by Experts who have been there, done that</li>
          <li>Guided 1:1 Mentorship from Industry Veterans</li>
          <li>Hyper-personalised learning experience through real-life projects</li>
          <li>Dedicated Career Support, Placement Assistance & 900 Employer Partners</li>
        </ul>
        <br />
        <p>The curriculum is designed to make you a solid engineer by preparing you for the toughest challenges you may face as you make headway in your career.</p>
      </div>
     
        <div className='video'> <video src={vid} width="450" height="300" controls>
        </video></div>
        {/* <iframe  width="760" height="415" src={vid}></iframe> */}
        <h2>Discover successful alumni who had the same profile as you before joining Scaler</h2>

        <div className='alumni'>
          <div className=''>Frequently searched</div>
          <div className='item'>Tech Giants</div>
          <div className='item'>Service To Product</div>
          <div className='item'>Service To Tech Giants</div>
          <div className='item'>Service To Unicorn Startups</div>
          <div className='item'>0 To 3 Year Experience</div>
          <div className='item'>4 To 7 Year Experience</div>
        </div>
        <div className='alumni-card'>
          <div className='card-item'>
            <div className='item item1'>
              <img src={pic} />
            </div>
            <div className='item'>
              <div className='card-name'>Anubhav Patel</div>
              <div className='card-date'> September 2023</div>
            </div>
            <div className='item'>
              <div className='pre-scaler'>Pre Scaler</div>
              <div> Adove </div>
            </div>
            <div className='item'>
              <div><FaArrowDown color='#4285F4' size={20} /></div>
              <div className='pre-scaler'>Post Scaler</div>
              <div><img src={google} /></div>
            </div>
            <div className='item card-position'>Senior Sofware Engineer</div>
          </div>
          <div className='card-item'>
            <div className='item item1'>
              <img src={pic} />
            </div>
            <div className='item'>
              <div className='card-name'>Anubhav Patel</div>
              <div className='card-date'> September 2023</div>
            </div>
            <div className='item'>
              <div className='pre-scaler'>Pre Scaler</div>
              <div> Adove </div>
            </div>
            <div className='item'>
              <div><FaArrowDown color='#4285F4' size={20} /></div>
              <div className='pre-scaler'>Post Scaler</div>
              <div><img src={microsoft} /></div>
            </div>
            <div className='item card-position'>Sofware Engineer II</div>
          </div>
          <div className='card-item'>
            <div className='item item1'>
              <img src={pic} />
            </div>
            <div className='item'>
              <div className='card-name'>Anubhav Patel</div>
              <div className='card-date'> September 2023</div>
            </div>
            <div className='item'>
              <div className='pre-scaler'>Pre Scaler</div>
              <div> Adove </div>
            </div>
            <div className='item'>
              <div><FaArrowDown color='#4285F4' size={20} /></div>
              <div className='pre-scaler'>Post Scaler</div>
              <div><img src={google} /></div>
            </div>
            <div className='item card-position'>Sofware Engineer I</div>
          </div> 
        </div>
        <div className='see-profile-btn'>
            <button>SEE MORE PROFILE</button>
          </div>
          <div className='upcoming-events'>
            <div className='item1 '>Upcoming Events</div>
            <div className='item2 exp-btn'><button>Explore all</button></div>
            <div className='item3'>
              <div className='item31'> 
              <img src={mern}/>
              </div>
              <div className='item32'>
                <h3>Build an E-Commerce platform using React</h3>
                <p>Start time: January 25, 2024 7:30 PM(IST)</p>
                <p>End time: January 25, 2024 10:00 PM(IST)</p>
              </div>
              <hr/>
              <div className='item33'>
                <div><span>8141</span>people have registered</div>
                <button>Register Now</button>
              </div>
            </div>
            <div className='item3'>
              <div className='item31'> 
              <img src={java}/>
              </div>
              <div className='item32'>
                <h3>Mastering Java Advanced Concepts</h3>
                <p>Start time: January 25, 2024 7:30 PM(IST)</p>
                <p>End time: January 25, 2024 10:00 PM(IST)</p>
              </div>
              <hr/>
              <div className='item33'>
                <div><span>8141</span>people have registered</div>
                <button>Register Now</button>
              </div>
            </div>
          </div>
     










    </div>
  )
}

export default About
