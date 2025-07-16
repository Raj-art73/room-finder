import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Rent() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    moveInDate: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your rent request has been submitted!');
  };

  return (
    <>
      <style>
        {`
          .rent-page {
            min-height: 100vh;
            background-color: #f9fafb;
            padding: 3rem 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .dark .rent-page {
            background-color: #111827;
          }

          .rent-form-container {
            background-color: #ffffff;
            border-radius: 1rem;
            padding: 2rem;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
            max-width: 500px;
            width: 100%;
            border: 1px solid #e5e7eb;
          }

          .dark .rent-form-container {
            background-color: #1f2937;
            border-color: #374151;
          }

          .rent-form-title {
            font-size: 1.75rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 1.5rem;
            color: #1f2937;
          }

          .dark .rent-form-title {
            color: #f3f4f6;
          }

          .form-group {
            margin-bottom: 1rem;
          }

          .form-group label {
            display: block;
            font-size: 0.875rem;
            font-weight: 500;
            color: #374151;
            margin-bottom: 0.25rem;
          }

          .dark .form-group label {
            color: #d1d5db;
          }

          .form-group input,
          .form-group textarea {
            width: 100%;
            padding: 0.5rem 1rem;
            border: 1px solid #d1d5db;
            border-radius: 0.375rem;
            background-color: #f9fafb;
            color: #111827;
            transition: all 0.2s ease;
          }

          .form-group textarea {
            resize: vertical;
          }

          .dark .form-group input,
          .dark .form-group textarea {
            background-color: #374151;
            color: #f9fafb;
            border-color: #4b5563;
          }

          .submit-btn,
          .payment-btn {
            background: linear-gradient(to right, #34d399, #059669);
            color: #ffffff;
            padding: 0.75rem;
            border: none;
            border-radius: 0.5rem;
            width: 100%;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            margin-top: 1rem;
            transition: background 0.3s ease;
            text-align: center;
            display: inline-block;
            text-decoration: none;
          }

          .submit-btn:hover,
          .payment-btn:hover {
            background: linear-gradient(to right, #10b981, #047857);
          }
        `}
      </style>

      <div className="rent-page">
        <div className="rent-form-container">
          <h2 className="rent-form-title">🏠 Rent This Room</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Move-in Date</label>
              <input
                type="date"
                name="moveInDate"
                value={formData.moveInDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message (Optional)</label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              🚀 Submit Request
            </button>

            <Link className="payment-btn" to="/select-payment">
              💳 Advance Payment
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
