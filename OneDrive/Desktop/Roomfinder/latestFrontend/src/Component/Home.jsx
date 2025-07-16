import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <style>
        {`
          .property-card {
            display: flex;
            flex-direction: row;
            background: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            margin: 10px auto;
            height: auto;
            max-width: 550px;
            width: 100%;
          }

          .property-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }

          .property-img {
            width: 300px;
            height: 100%;
            object-fit: cover;
          }

          .property-body {
            flex: 1;
            padding: 16px;
          }

          .badge {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 4px 8px;
            font-size: 12px;
            font-weight: bold;
            border-radius: 4px;
            color: white;
            background-color: red;
          }

          .property-title {
            font-weight: bold;
            font-size: 16px;
            margin: 8px 0;
            color: #1f2937;
          }

          .property-location {
            font-size: 14px;
            color: #4b5563;
          }

          .room-info {
            margin-top: 10px;
            color: #374151;
            font-size: 14px;
            display: flex;
            gap: 16px;
            align-items: center;
          }

          .details-btn,
          .Rent-btn {
            background-color: #28a745;
            color: white;
            padding: 6px 12px;
            border: none;
            border-radius: 4px;
            font-size: 14px;
            cursor: pointer;
            margin-top: 12px;
            margin-right: 10px;
          }

          .details-btn:hover,
          .Rent-btn:hover {
            background-color: #218838;
          }

          .property-footer {
            padding-top: 16px;
            font-size: 14px;
            color: #6b7280;
            display: flex;
            justify-content: space-between;
          }

          .rooms-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            justify-items: stretch;
          }

          @media (max-width: 1200px) {
            .rooms-container {
              grid-template-columns: 1fr 1fr;
              gap: 15px;
            }
          }

          @media (max-width: 768px) {
            .property-card {
              flex-direction: column;
              max-width: 100%;
            }

            .property-img {
              width: 100%;
              height: 200px;
            }

            .rooms-container {
              grid-template-columns: 1fr;
              gap: 20px;
            }
          }
        `}
      </style>

      <div className="bg-blue-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Find Your Perfect Room
            </h1>
          </div>

          <div className="rooms-container">
            {[
              {
                price: "Rs10,000/Month",
                title: "2 Rooms for Rent in Jorpati, Boudha, Kathmandu",
                location: "Jorpati, Kathmandu",
                bed: 2,
                bath: 1,
                img: "https://tse4.mm.bing.net/th/id/OIP.OaXV1XU2WiCIgCuO3NPmhQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
              },
              {
                price: "Rs6,000/Month",
                title: "1 Single Room Rent in Bafal, Syuchatar",
                location: "Bafal, Kathmandu",
                bed: 1,
                bath: 1,
                img: "https://tse3.mm.bing.net/th/id/OIP.sXU2B-xyzE4JUK6XpB2eGQHaE7?pid=ImgDet&w=1200&h=800&rs=1",
              },
              {
                price: "Rs12,000/Month",
                title: "1 Large Room Rent in Dhapasi Height, Tokha",
                location: "Tokha, Kathmandu",
                bed: 1,
                bath: 1,
                img: "https://tse4.mm.bing.net/th/id/OIP.OaXV1XU2WiCIgCuO3NPmhQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
              },
            ].map((room, index) => (
              <div key={index} className="property-card">
                <div className="property-body">
                  <h2 className="text-lg font-bold text-gray-900">{room.price}</h2>
                  <div className="property-title">{room.title}</div>
                  <p className="property-location">{room.location}</p>
                  <div className="room-info">
                    <span>🛏 {room.bed}</span>
                    <span>🛁 {room.bath}</span>
                  </div>
                  <button className="details-btn">Details</button>
                  <button className="Rent-btn" onClick={() => navigate('/rent')}>
                    Rent Now
                  </button>
                  <div className="property-footer">
                    <span>🏠 ROOM</span>
                    <span>📅 1 week ago</span>
                  </div>
                </div>
                <div className="relative">
                  <img src={room.img} alt={room.title} className="property-img" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
