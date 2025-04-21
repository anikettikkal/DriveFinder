import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // If using React Router
import Emergency from "../Views/Emergency/Emergency";
import EmergencyCarForm from "../Components/Forms/EmergencyCarForm";
import TripForm from "../Components/Forms/TripForm";

const Dashboard = () => {
    const [carData, setCarData] = useState({
        CarImage: "",
        carname: "",
        OwnerName: "",
        contactNumber: "",
        CarNumber: "",
        seater: "",
        location: "",
    });

    const navigate = useNavigate(); // Redirect non-admin users
    const userRole = localStorage.getItem("role"); // Get role from local storage

    useEffect(() => {
        if (userRole !== "admin") {
            alert("Access denied! Only admins can access the dashboard.");
            navigate("/home"); // Redirect to home page or any other page
        }
    }, [userRole, navigate]);

    const handleChange = (e) => {
        setCarData({ ...carData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/api/rentalcar/RentalCar", carData);
            if (res.data.status) {
                alert("Car added successfully!");
                setCarData({
                    CarImage: "",
                    carname: "",
                    OwnerName: "",
                    contactNumber: "",
                    CarNumber: "",
                    seater: "",
                    location: "",
                });
            } else {
                alert("Error adding car.");
            }
        } catch (error) {
            console.error("Error adding car:", error);
        }
    };

    return (
        <>
        <div className="p-6 mt-7 mb-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">Add New Car</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="CarImage"
                    value={carData.CarImage}
                    onChange={handleChange}
                    placeholder="Enter image path (e.g., /Uploads/car1.jpg)"
                    className="w-full p-2 border rounded"
                    required
                />
                <input type="text" name="carname" value={carData.carname} onChange={handleChange} placeholder="Car Name" className="w-full p-2 border rounded" required />
                <input type="text" name="OwnerName" value={carData.OwnerName} onChange={handleChange} placeholder="Owner Name" className="w-full p-2 border rounded" required />
                <input type="text" name="contactNumber" value={carData.contactNumber} onChange={handleChange} placeholder="Contact Number" className="w-full p-2 border rounded" required />
                <input type="text" name="CarNumber" value={carData.CarNumber} onChange={handleChange} placeholder="Car Number" className="w-full p-2 border rounded" required />
                <input type="text" name="seater" value={carData.seater} onChange={handleChange} placeholder="Seater Capacity" className="w-full p-2 border rounded" required />
                <input type="text" name="location" value={carData.location} onChange={handleChange} placeholder="Location" className="w-full p-2 border rounded" required />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Add Car</button>
            </form>
        </div>
        <EmergencyCarForm />
        <TripForm />
        </>
    );
};

export default Dashboard;
