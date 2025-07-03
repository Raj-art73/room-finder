import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Component/Navbar';
import Footer from './Component/footer';
import HomeSlider from './Component/HomeSlider';
import Home from './Component/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />

      {/* Main content */}
      <Routes>
        <Route path="/" element={
          <>
            <HomeSlider />
            <Home />
          </>
        } />
        {/* You can add more routes here if needed */}
      </Routes>

      {/* Footer shown on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
