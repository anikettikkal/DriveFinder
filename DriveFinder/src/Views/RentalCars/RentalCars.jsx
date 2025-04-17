import React, { useEffect, useState } from "react";
import axios from "axios";
import RentalCard from "../../MainCarsCard/RentalCard";

const RentalCars = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState(""); // 🔍 Search state

  const userRole = localStorage.getItem("role");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/rentalcar/RentalCar")
      .then((res) => {
        if (res.data.status) setCars(res.data.data);
      })
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this car?")) return;

    try {
      const res = await axios.delete(`http://localhost:3000/api/rentalcar/RentalCar/${id}`);
      if (res.data.status) {
        setCars(cars.filter((car) => car._id !== id));
      } else {
        alert("Error deleting car");
      }
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  const handleEdit = async (updatedCar) => {
    try {
      const res = await axios.put(`http://localhost:3000/api/rentalcar/RentalCar/${updatedCar._id}`, updatedCar);
      if (res.data.status) {
        setCars(cars.map((car) => (car._id === updatedCar._id ? updatedCar : car)));
      } else {
        alert("Error updating car");
      }
    } catch (error) {
      console.error("Error updating car:", error);
    }
  };

  // 🔍 Filter cars by location, car name, or seater
  const filteredCars = cars.filter((car) =>
    `${car.name} ${car.location} ${car.seater}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Available Cars</h1>

      {/* 🔍 Search Input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by location, car name, or seater..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCars.map((car) => (
          <RentalCard
            key={car._id}
            car={car}
            userRole={userRole}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default RentalCars;
