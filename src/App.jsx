import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Component/Navbar';
import Footer from './Component/footer';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path="/navbar" element={<Navbar/>}/>
          <Route path="/footer" element={<Footer/>}/>

        </Routes>
        </BrowserRouter>
      
   
    </>
  )
}

export default App