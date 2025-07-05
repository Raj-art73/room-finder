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
            color: #1f2937;
            margin-bottom: 12px;
          }

          .feature-description {
            color: #6b7280;
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

          </div>
      </div>
    </>
  );
}