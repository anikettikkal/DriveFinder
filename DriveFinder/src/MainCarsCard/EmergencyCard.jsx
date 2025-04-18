import React from "react";

const EmergencyCard = ({ emergency, onDelete, onEdit, isAdmin }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={`http://localhost:3000${emergency.carImage}`}
        alt="Car Image"
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{emergency.carNumber}</h2>
      <p><strong>Owner Name:</strong> {emergency.ownerName}</p>
      <p><strong>Owner Contact:</strong> {emergency.ownerContact}</p>
      <p><strong>Location:</strong> {emergency.location}</p>
      <p><strong>Hospital Name:</strong> {emergency.hospitalName}</p>

      {isAdmin && (
        <div className="flex justify-between mt-4">
          <button
            className="bg-white-600 text-black border-2 px-4 py-2 rounded-lg hover:border-orange-500 hover:text-orange-600 transition w-1/2"

            onClick={() => onEdit(emergency)}
          >
            Edit
          </button> &nbsp;&nbsp;
          <button
            onClick={() => onDelete(emergency._id)}
            className="bg-black text-white px-4 py-2 rounded-lg  transition w-1/2"
            >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default EmergencyCard;
