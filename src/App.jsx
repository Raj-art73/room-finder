import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './Component/Navbar';
import Footer from './Component/footer';
import Home from './Component/Home';
import HomeSlider from './Component/HomeSlider';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
        <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomeSlider/>}/>
          <Route path="/" element={<Home/>}/>


          {/* <Route path="/footer" element={<Footer/>}/> */}

        </Routes>
        <Footer/>

        </Router>
                        {/* <Route path="/footer" element={<Footer/>}/> */}

   
    </>
  )
}

export default App