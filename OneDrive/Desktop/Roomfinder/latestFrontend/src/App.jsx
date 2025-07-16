import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Component/Navbar';
import Footer from './Component/footer';
import HomeSlider from './Component/HomeSlider';
import Home from './Component/Home';
import Single_room from './Component/Single_room';
import Features from './Component/features';
import Rent from './Component/rent';
import SelectPaymentType from './payment/SelectPaymentType';
import { Provider } from "react-redux";
import store from "./store/store.js";
import PaymentSuccess from './payment/PaymentSuccess'; 
import KhaltiPayment from './payment/khalti';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />

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
        <Route path="/rent" element={<Rent />} />

        {/* Payment Routes */}

        <Route path="/select-payment" element={<SelectPaymentType />} />
        <Route path="/success" element={<PaymentSuccess />} />
           <Route path="/khalti" element={<KhaltiPayment />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;


