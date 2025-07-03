import React from 'react';

function Footer() {
  return (
    <footer>

          <div className="text-center mb-12">
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Discover rooms, apartments, and houses for rent in your ideal location
          </p>
        </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Company Info */}
        <div style={{ flex: '1 1 250px', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>CSDS Pvt. Ltd.</h2>
          <p>Location: Kathmandu, Nepal</p>
          <p>&copy; {new Date().getFullYear()} CSDS. All rights reserved.</p>
        </div>

        {/* Useful Links */}
        <div style={{ flex: '1 1 250px', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Quick Links</h3>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            <li><a href="#" >Contact Us</a></li>
            <li><a href="#" >Our Services</a></li>
            <li><a href="#" >Privacy Policy</a></li>
            <li><a href="#" >Terms & Conditions</a></li>
            <li><a href="#" >Career</a></li>
          </ul>
        </div>

        {/* Social or Contact Info (optional) */}
        <div style={{ flex: '1 1 250px', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Get in Touch</h3>
          <p>Email: info@csds.com</p>
          <p>Phone: +977-1-1234567</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
