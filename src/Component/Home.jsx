import React from 'react';

export default function Home() {
  return (
    <>
      <style>
        {`
          .property-card {
            // background: #fff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: relative;
            transition: transform 0.2s ease;
          }
          .property-card:hover {
            transform: translateY(-5px);
          }
          .property-img {
            width: 100%;
            height: 180px;
            object-fit: cover;
          }
          .badge {
            position: absolute;
            top: 10px;
            padding: 4px 8px;
            // color: white;
            font-size: 12px;
            font-weight: bold;
            border-radius: 4px;
          }
          .featured {
            left: 10px;
            background-color: blue;
          }
          .for-rent {
            right: 10px;
            background-color: red;
          }
          .property-body {
            padding: 16px;
          }
          .property-footer {
            padding: 0 16px 16px;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: #777;
          }
          .property-title {
            font-weight: bold;
            font-size: 16px;
            margin: 8px 0;
          }
          .details-btn {
            background-color: #28a745;
            color: white;
            padding: 6px 12px;
            border: none;
            border-radius: 4px;
            font-size: 14px;
            cursor: pointer;
          }

          .Rent-btn {
            margin-left: 10px;  
            background-color: #28a745;
            color: white;
            padding: 6px 12px;
            border: none;
            border-radius: 4px;
            font-size: 14px;
            cursor: pointer;
          }
        `}
      </style>

      <div className="bg-blue-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Find Your Perfect Room
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                price: "Rs10,000/Month",
                title: "2 Rooms for Rent in Jorpati, Boudha, Kathmandu",
                location: "Jorpati, Kathmandu",
                bed: 2,
                bath: 1,
                img: "",
              },
              {
                price: "Rs6,000/Month",
                title: "1 Single Room Rent in Bafal, Syuchatar",
                location: "Bafal, Kathmandu",
                bed: 1,
                bath: 1,
                img: "",
              },
              {
                price: "Rs12,000/Month",
                title: "1 Large Room Rent in Dhapasi Height, Tokha",
                location: "Tokha, Kathmandu",
                bed: 1,
                bath: 1,
                img: "",
              },
            ].map((room, index) => (
              <div key={index} className="property-card">
                <div className="relative">
                  <img src={room.img} alt={room.title} className="property-img" />
                  {/* <div className="badge featured">FEATURED</div> */}
                  <div className="badge for-rent">FOR RENT</div>
                </div>
                <div className="property-body">
                  <h2 className="text-lg font-bold text-gray-900">{room.price}</h2>
                  <div className="property-title">{room.title}</div>
                  <p className="text-sm text-gray-600">{room.location}</p>
                  <div className="text-sm mt-2 flex items-center gap-2 text-gray-700">
                    🛏 {room.bed} &nbsp;&nbsp; 🛁 {room.bath}
                  </div>
                  <button className="details-btn mt-4">Details</button>
                  <button className="Rent-btn mt-4">Rent Now</button>
                </div>
                <div className="property-footer">
                  <span>🏠 ROOM</span>
                  <span>📅 1 week ago</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
