import React from 'react';

export default function Features() {
  return (
    <>
      <style>
        {`
          .feature-card {
            background: white;
            border-radius: 12px;
            padding: 24px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            height: 100%;
            display: flex;
            flex-direction: column;
            color: #1f2937;
          }

          .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }

          .feature-icon {
            width: 64px;
            height: 64px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            margin-bottom: 16px;
          }

          .feature-title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 12px;
          }

          .feature-description {
            line-height: 1.6;
            flex-grow: 1;
          }

          .stats-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 12px;
            padding: 24px;
            text-align: center;
            transition: transform 0.3s ease;
          }

          .stats-card:hover {
            transform: scale(1.05);
          }

          .stat-number {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 8px;
          }

          .stat-label {
            font-size: 14px;
            opacity: 0.9;
          }

          .cta-section {
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            border-radius: 16px;
            padding: 48px 24px;
            text-align: center;
            color: white;
            margin-top: 64px;
          }

          .cta-button {
            background: white;
            color: #28a745;
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            margin-top: 16px;
          }

          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          }

          .process-step {
            background: white;
            border-radius: 12px;
            padding: 24px;
            text-align: center;
            position: relative;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            color: #1f2937;
          }

          .step-number {
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translateX(-50%);
            background: #28a745;
            color: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 14px;
          }

          .process-icon {
            font-size: 48px;
            margin-bottom: 16px;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
            margin-top: 48px;
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 24px;
            margin-top: 48px;
          }

          .process-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 24px;
            margin-top: 48px;
          }

          @media (max-width: 768px) {
            .features-grid,
            .stats-grid,
            .process-grid {
              grid-template-columns: 1fr;
            }
          }

          /* Dark mode overrides */
          .dark-mode {
            background-color: #121212;
            color: #f1f1f1;
          }

          .dark-mode .feature-card,
          .dark-mode .process-step {
            background-color: #1f1f1f;
            color: #f1f1f1;
          }

          .dark-mode .feature-title,
          .dark-mode .feature-description,
          .dark-mode h2,
          .dark-mode h3,
          .dark-mode p {
            color: #f1f1f1 !important;
          }

          .dark-mode .cta-section {
            background: linear-gradient(135deg, #1f4037 0%, #99f2c8 100%);
            color: #fff;
          }

          .dark-mode .cta-button {
            background: #fff;
            color: #1f4037;
          }

          .dark-mode .stats-card {
            background: #2a2a2a;
            color: #f1f1f1;
          }
        `}
      </style>

      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Why Choose Our Platform?
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover the easiest way to find and rent rooms in Kathmandu with our comprehensive platform
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Main Features */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Platform Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to find the perfect room or list your property
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon" style={{background: '#e3f2fd'}}>
                🔍
              </div>
              <h3 className="feature-title">Smart Search</h3>
              <p className="feature-description">
                Advanced filtering options to help you find rooms based on location, price, amenities, and more. Our intelligent search algorithm matches you with the perfect properties.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon" style={{background: '#f3e5f5'}}>
                📍
              </div>
              <h3 className="feature-title">Location-Based</h3>
              <p className="feature-description">
                Find rooms in specific areas of Kathmandu with detailed location information, nearby amenities, and transportation access to make informed decisions.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon" style={{background: '#e8f5e8'}}>
                💰
              </div>
              <h3 className="feature-title">Transparent Pricing</h3>
              <p className="feature-description">
                No hidden fees or surprises. All costs are clearly displayed upfront, including rent, deposits, and any additional charges, so you can budget effectively.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon" style={{background: '#fff3e0'}}>
                📱
              </div>
              <h3 className="feature-title">Mobile Friendly</h3>
              <p className="feature-description">
                Access our platform from anywhere with our responsive design that works perfectly on all devices - desktop, tablet, and mobile.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon" style={{background: '#fce4ec'}}>
                🛡️
              </div>
              <h3 className="feature-title">Verified Listings</h3>
              <p className="feature-description">
                All properties are verified by our team to ensure authenticity and quality. Browse with confidence knowing every listing is legitimate.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon" style={{background: '#e0f7fa'}}>
                💬
              </div>
              <h3 className="feature-title">Direct Communication</h3>
              <p className="feature-description">
                Connect directly with property owners through our secure messaging system. Schedule viewings and ask questions without any intermediaries.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="text-center mt-20 mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Platform Statistics
            </h2>
            <p className="text-lg text-gray-600">
              Numbers that speak for our success
            </p>
          </div>

          <div className="stats-grid">
            <div className="stats-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Active Listings</div>
            </div>
            <div className="stats-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Happy Tenants</div>
            </div>
            <div className="stats-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Locations Covered</div>
            </div>
            <div className="stats-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Customer Support</div>
            </div>
          </div>

          {/* How It Works */}
          <div className="text-center mt-20 mb-16">
            <h2 className="text-4xl  mb-4">
              How It Works
            </h2>
            <p className="text-lg ">
              Simple steps to find your perfect room
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="process-icon">🔍</div>
              <h3 className="text-xl font-bold mb-3">Search</h3>
              <p className="text-gray-600">
                Use our advanced search filters to find rooms that match your preferences and budget
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <div className="process-icon">📞</div>
              <h3 className="text-xl font-bold mb-3">Contact</h3>
              <p className="text-gray-600">
                Reach out to property owners directly through our secure messaging system
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <div className="process-icon">👀</div>
              <h3 className="text-xl font-bold mb-3">Visit</h3>
              <p className="text-gray-600">
                Schedule a viewing to see the property in person and ask any questions
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <div className="process-icon">🏠</div>
              <h3 className="text-xl font-bold mb-3">Move In</h3>
              <p className="text-gray-600">
                Complete the rental process and enjoy your new home with peace of mind
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Find Your Perfect Room?
            </h2>
            <p className="text-xl mb-6">
              Join thousands of satisfied tenants who found their ideal living space through our platform
            </p>
            <button className="cta-button">
              Start Your Search Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
}