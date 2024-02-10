import React from 'react'
import "../style/Home.css"
import back1 from "../image/back1.png"
import back2 from "../image/back2.png"
import About from './About'
import Login from './Login'
import javaback from "../image/java-back.jpeg"
const Home = () => {
  return (
    <div className='home-container'>
    <img className='back1' src={javaback}/>
    <img className='back2' src={javaback}/>
    
    <About/>
   
   
    </div>
  )
}

export default Home
