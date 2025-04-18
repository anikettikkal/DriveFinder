import React, { useState } from "react";
import axios from "axios";

const EditForm = ({ emergency, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    carNumber: emergency.carNumber || "",
    ownerName: emergency.ownerName || "",
    ownerContact: emergency.ownerContact || "",
    location: emergency.location || "",
    hospitalName: emergency.hospitalName || "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:3000/api/emergency/${emergency._id}`,
        formData
      );
      onSave(); // Refresh list after save
      onClose(); // Close modal
    } catch (err) {
      console.error("Error updating emergency data:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold">Edit Emergency Car</h2>

      <div>
        <label>Owner Name</label>
        <input
          type="text"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label>Owner Contact</label>
        <input
          type="text"
          name="ownerContact"
          value={formData.ownerContact}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label>Car Number</label>
        <input
          type="text"
          name="carNumber"
          value={formData.carNumber}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label>Hospital Name</label>
        <input
          type="text"
          name="hospitalName"
          value={formData.hospitalName}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="flex justify-end gap-2">
        <button type="button" onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-red-500">
          Cancel
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-black">
          Save
        </button>
      </div>
    </form>
  );
};

export default EditForm;
