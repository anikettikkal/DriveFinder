import React from "react";

const EmergencyCard = ({ emergency }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={`http://localhost:3000/${emergency.carImage}`}
        alt="Car Image"
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{emergency.carNumber}</h2>
      <p><strong>Owner Name:</strong> {emergency.ownerName}</p>
      <p><strong>Owner Contact:</strong> {emergency.ownerContact}</p>
      <p><strong>Location:</strong> {emergency.location}</p>
      <p><strong>Hospital Name:</strong> {emergency.hospitalName}</p>
    </div>
  );
};

export default EmergencyCard;
