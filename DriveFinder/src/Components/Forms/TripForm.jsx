import React, { useState } from "react";
import axios from "axios";

const TripDashboard = () => {
  const [formData, setFormData] = useState({
    busname: "",
    bustype: "",
    seater: "",
    ownername: "",
    ownercontact: "",
    busnumber: "",
    location: "",
    busImage: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "busImage") {
      setFormData({ ...formData, busImage: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const role = localStorage.getItem("role");
    if (role !== "admin") {
      return alert("Access denied. Admins only!");
    }

    const tripData = new FormData();
    // Ensure all fields are appended correctly
    for (let key in formData) {
      // If busImage exists, append it
      if (formData[key] !== null) {
        tripData.append(key, formData[key]);
      }
    }

    try {
      const res = await axios.post("http://localhost:3000/api/trip/add", tripData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file upload
        },
      });
      if (res.status === 200) {
        alert("Trip vehicle added successfully!");
        setFormData({
          busname: "",
          bustype: "",
          seater: "",
          ownername: "",
          ownercontact: "",
          busnumber: "",
          location: "",
          busImage: null,
        });
      } else {
        alert("Failed to add trip vehicle. Please try again.");
      }
    } catch (err) {
      console.error("Error adding trip:", err);
      alert("Upload failed. Please check the console for errors.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Trip Vehicle</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["busname", "bustype", "seater", "ownername", "ownercontact", "busnumber", "location"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        ))}

        <input
          type="file"
          name="busImage"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
        >
          Add Trip Vehicle
        </button>
      </form>
    </div>
  );
};

export default TripDashboard;
