import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'bg-body-tertiary'} `}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Room-Finder</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Service
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Apartment</a></li>
                  <li><a className="dropdown-item" href="#">House</a></li>
                  <Link className="dropdown-item" to="/Single_room">Single Room</Link>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/Features" className="nav-link">Features</Link>
              </li>

              
              <li className="nav-item">
                <button className="btn btn-sm btn-outline-secondary ms-2" onClick={toggleDarkMode}>
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success me-2" type="submit">Search</button>
           
           <button style={{ color: 'blue' }} className="btn btn-account" type="submit">
              Account
            </button>


          </form>
          <i className="bi bi-person-circle ms-3"></i>
        </div>
      </nav>
    </>
  );
}
