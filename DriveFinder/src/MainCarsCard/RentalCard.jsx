import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const RentalCard = ({ car, userRole, onDelete, onEdit }) => {
  const [showModal, setShowModal] = useState(false);
  const [updatedCar, setUpdatedCar] = useState({ ...car });

  const handleInputChange = (e) => {
    setUpdatedCar({ ...updatedCar, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    onEdit(updatedCar);
    setShowModal(false); // Close modal after update
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      <img
        src={car.CarImage}
        alt={car.carname}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold mt-3">{car.carname}</h2>
      <p className="text-gray-600">Owner: {car.OwnerName}</p>
      <p className="text-gray-600">Seats: {car.seater}</p>
      <p className="text-gray-600">Location: {car.location}</p>
      <p className="text-gray-800 font-bold mt-2">📞 {car.contactNumber}</p>

      {/* Only show buttons if user is admin */}
      {userRole === "admin" && (
        <div className="mt-4 flex gap-3">
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded-md"
            onClick={() => setShowModal(true)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded-md"
            onClick={() => onDelete(car._id)}
          >
            Delete
          </button>
        </div>
      )}

      {/* Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Edit Car</h2>
            <input
              type="text"
              name="carname"
              value={updatedCar.carname}
              onChange={handleInputChange}
              className="w-full mb-2 p-2 border rounded"
              placeholder="Car Name"
            />
            <input
              type="text"
              name="OwnerName"
              value={updatedCar.OwnerName}
              onChange={handleInputChange}
              className="w-full mb-2 p-2 border rounded"
              placeholder="Owner Name"
            />
            <input
              type="text"
              name="contactNumber"
              value={updatedCar.contactNumber}
              onChange={handleInputChange}
              className="w-full mb-2 p-2 border rounded"
              placeholder="Contact Number"
            />
            <input
              type="text"
              name="CarNumber"
              value={updatedCar.CarNumber}
              onChange={handleInputChange}
              className="w-full mb-2 p-2 border rounded"
              placeholder="Car Number"
            />
            <input
              type="text"
              name="seater"
              value={updatedCar.seater}
              onChange={handleInputChange}
              className="w-full mb-2 p-2 border rounded"
              placeholder="Seater"
            />
            <input
              type="text"
              name="location"
              value={updatedCar.location}
              onChange={handleInputChange}
              className="w-full mb-2 p-2 border rounded"
              placeholder="Location"
            />
            <div className="flex gap-3 mt-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                onClick={handleUpdate}
              >
                Save
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

RentalCard.propTypes = {
  car: PropTypes.object.isRequired,
  userRole: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default RentalCard;
