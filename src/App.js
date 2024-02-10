import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Academy from './components/Academy';
import DevOps from './components/DevOps';
import Home from './components/Home';
import student from "./image/student.png"
import Footer from './components/Footer';

function App() {
  return (
   <BrowserRouter>
  
      <Header/>
     
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/academy" element={<Academy/>}/>
      <Route path="/devops" element={<DevOps/>}/>
      </Routes>
      <div className='help'><img src={student}/>
      Need Help? Talk to our Academic Advisors
       &#160;<u>Request Callback</u> 
      </div>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
