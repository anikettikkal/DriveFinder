import React, { useState } from "react";
import PropTypes from "prop-types";

const TripCard = ({ trip, userRole, onDelete, onEdit }) => {
  const [showModal, setShowModal] = useState(false);
  const [updatedTrip, setUpdatedTrip] = useState({ ...trip });

  const handleInputChange = (e) => {
    setUpdatedTrip({ ...updatedTrip, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    onEdit(updatedTrip);
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-white border-2 shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 flex flex-col">
        <div style={{ textAlign: 'center', margin: '20px auto', height: '250px', width: '350px' }}>
          <img
            style={{ aspectRatio: '3/2', objectFit: 'contain' }}
            src={`http://localhost:3000${trip.busimage}`} // Full image path from backend
            alt="Trip Bus"
            onError={(e) => (e.target.src = "/uploads/default.jpg")} // Fallback image
          />
        </div>

        <div className="p-4 flex-grow">
          <h2 className="text-lg font-bold text-gray-900">{trip.busname}</h2>
          <p className="text-gray-600">🚌 Type: {trip.bustype}</p>
          <p className="text-gray-600">🛋 Seater: {trip.seater}</p>
          <p className="text-gray-600">📍 Location: {trip.location}</p>
          <p className="text-gray-600">👤 Owner: {trip.ownername}</p>
          <p className="text-gray-800 font-bold mt-2 flex items-center">📞 <span className="ml-2">{trip.ownercontact}</span></p>
        </div>

        {userRole === "admin" && (
          <div className="p-4 flex justify-between">
            <button className="border-2 px-4 py-2 rounded-lg hover:border-orange-500 hover:text-orange-600 transition w-1/2" onClick={() => setShowModal(true)}>Edit</button>&nbsp;&nbsp;
            <button className="bg-black text-white px-4 py-2 rounded-lg w-1/2" onClick={() => onDelete(trip._id)}>Delete</button>
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4">Edit Trip</h2>
              {["busname", "bustype", "seater", "ownername", "busnumber", "ownercontact", "location"].map((field) => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  value={updatedTrip[field]}
                  onChange={handleInputChange}
                  className="w-full mb-2 p-2 border rounded"
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                />
              ))}
              <div className="flex gap-3 mt-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-1/2" onClick={handleUpdate}>Save</button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded-lg w-1/2" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

TripCard.propTypes = {
  trip: PropTypes.object.isRequired,
  userRole: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TripCard;
