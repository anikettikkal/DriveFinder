import React, { useState } from "react";
import axios from "axios";

const EmergencyForm = () => {
  const [emergencyData, setEmergencyData] = useState({
    ownerName: "",
    ownerContact: "",
    carNumber: "",
    carImage: null,
    location: "",
    hospitalName: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "carImage") {
      setEmergencyData({ ...emergencyData, carImage: files[0] }); // For file input
    } else {
      setEmergencyData({ ...emergencyData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("ownerName", emergencyData.ownerName);
    formData.append("ownerContact", emergencyData.ownerContact);
    formData.append("carNumber", emergencyData.carNumber);
    formData.append("location", emergencyData.location);
    formData.append("hospitalName", emergencyData.hospitalName);
    formData.append("carImage", emergencyData.carImage); // File from input

    try {
      const res = await axios.post("http://localhost:3000/api/emergency", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.status) {
        alert("Emergency car added successfully!");
      }
    } catch (error) {
      console.error("Error adding emergency car:", error);
    }
  };

  return (
    <div className="p-6 mt-7 mb-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Emergency Ambulance</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">
              Owner Name
            </label>
            <input
              type="text"
              name="ownerName"
              value={emergencyData.ownerName}
              onChange={handleChange}
              placeholder="Enter owner's name"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="ownerContact" className="block text-sm font-medium text-gray-700">
              Owner Contact
            </label>
            <input
              type="text"
              name="ownerContact"
              value={emergencyData.ownerContact}
              onChange={handleChange}
              placeholder="Enter owner's contact"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="carNumber" className="block text-sm font-medium text-gray-700">
              Car Number
            </label>
            <input
              type="text"
              name="carNumber"
              value={emergencyData.carNumber}
              onChange={handleChange}
              placeholder="Enter car number"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="carImage" className="block text-sm font-medium text-gray-700">
              Upload Car Image
            </label>
            <input
              type="file"
              name="carImage"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={emergencyData.location}
              onChange={handleChange}
              placeholder="Enter location"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-700">
              Hospital Name
            </label>
            <input
              type="text"
              name="hospitalName"
              value={emergencyData.hospitalName}
              onChange={handleChange}
              placeholder="Enter hospital name"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md w-full sm:w-auto"
          >
            Add Emergency Ambulance
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmergencyForm;
