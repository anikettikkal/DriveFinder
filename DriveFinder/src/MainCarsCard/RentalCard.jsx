import React, { useState } from "react";
import PropTypes from "prop-types";

const RentalCard = ({ car, userRole, onDelete, onEdit }) => {
  const [showModal, setShowModal] = useState(false);
  const [updatedCar, setUpdatedCar] = useState({ ...car });

  const handleInputChange = (e) => {
    setUpdatedCar({ ...updatedCar, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    onEdit(updatedCar);
    setShowModal(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 flex flex-col">
      {/* Car Image */}
      <div style={{textAlign:'center',marginLeft:"auto",marginRight:"auto",marginTop:'20px',height:'200px',width:'300px',border:'5x solid black'}}>
        <img
          style={{aspectRatio:'3/2',objectFit:'contain'}}
          src={car.CarImage}
          alt="Car"
          onError={(e) => (e.target.src = "/Uploads/default.jpg")}
        />
      </div>

      {/* Card Content */}
      <div className="p-4 flex-grow">
        <h2 className="text-lg font-bold text-gray-900">{car.carname}</h2>
        <p className="text-gray-600">🚘 Owner: {car.OwnerName}</p>
        <p className="text-gray-600">🛋 Seats: {car.seater}</p>
        <p className="text-gray-600">📍 Location: {car.location}</p>
        <p className="text-gray-800 font-bold mt-2 flex items-center">
          📞 <span className="ml-2">{car.contactNumber}</span>
        </p>
      </div>

      {/* Admin Buttons (Edit & Delete) */}
      {userRole === "admin" && (
        <div className="p-4 flex justify-between">
          <button
            className="bg-white-600 text-black border-2 px-4 py-2 rounded-lg hover:bg-blue-800 transition w-1/2"
            onClick={() => setShowModal(true)}
          >
            Edit
          </button> &nbsp;&nbsp;
          <button
            className="bg-black text-white px-4 py-2 rounded-lg  transition w-1/2"
            onClick={() => onDelete(car._id)}
          >
            Delete
          </button>
        </div>
      )}

      {/* Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
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
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition w-1/2"
                onClick={handleUpdate}
              >
                Save
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition w-1/2"
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
