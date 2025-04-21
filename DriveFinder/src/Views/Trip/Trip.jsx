import React, { useEffect, useState } from "react";
import axios from "axios";
import TripCard from "../../MainCarsCard/TripCard";

const TripSection = () => {
  const [trips, setTrips] = useState([]);
  const [search, setSearch] = useState("");
  const userRole = localStorage.getItem("role");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/trip") // Fixed endpoint
      .then((res) => {
        if (res.data) {
          setTrips(res.data); // Assuming the response is an array of trips
        }
      })
      .catch((err) => {
        console.error("Error fetching trips:", err);
      });
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this trip?")) return;

    try {
      const res = await axios.delete(`http://localhost:3000/api/trip/${id}`); // Correct endpoint for deletion
      if (res.data) {
        setTrips(trips.filter((trip) => trip._id !== id));
      } else {
        alert("Error deleting trip");
      }
    } catch (err) {
      console.error("Error deleting trip:", err);
    }
  };

  const handleEdit = async (updatedTrip) => {
    try {
      const res = await axios.put(
        `http://localhost:3000/api/trip/${updatedTrip._id}`, // Correct endpoint for update
        updatedTrip
      );
      if (res.data) {
        setTrips(
          trips.map((trip) => (trip._id === updatedTrip._id ? updatedTrip : trip))
        );
      } else {
        alert("Error updating trip");
      }
    } catch (err) {
      console.error("Error updating trip:", err);
    }
  };

  const filteredTrips = trips.filter((trip) =>
    `${trip.busname} ${trip.bustype} ${trip.location} ${trip.seater}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Trip Vehicles</h1>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by location, bus name, or seater..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTrips.map((trip) => (
          <TripCard
            key={trip._id}
            trip={trip}
            userRole={userRole}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default TripSection;
