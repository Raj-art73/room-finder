import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Component/Navbar';
import Footer from './Component/footer';
import HomeSlider from './Component/HomeSlider';
import Home from './Component/Home';
import Single_room from './Component/Single_room';
import Features from './Component/Features'; // ✅ Add this import

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />

      {/* Main content */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeSlider />
              <Home />
            </>
          }
        />
        <Route path="/single_room" element={<Single_room />} />
        <Route path="/features" element={<Features />} /> 
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
