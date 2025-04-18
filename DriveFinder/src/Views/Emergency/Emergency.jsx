import React, { useState, useEffect } from "react";
import axios from "axios";
import EmergencyCard from "../../MainCarsCard/EmergencyCard";
import EditForm from "../../EditForm";

const Emergency = () => {
  const [emergencies, setEmergencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingEmergency, setEditingEmergency] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Track the search query
  const userRole = localStorage.getItem("role");

  useEffect(() => {
    fetchEmergencies();
  }, []);

  const fetchEmergencies = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/emergency");
      if (res.data.status && Array.isArray(res.data.data)) {
        setEmergencies(res.data.data);
      } else {
        console.error("Unexpected data format:", res.data);
      }
    } catch (error) {
      setError("Error fetching emergency data.");
      console.error("Error fetching emergency data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/emergency/${id}`);
      setEmergencies((prev) => prev.filter((e) => e._id !== id));
    } catch (error) {
      console.error("Error deleting emergency:", error);
    }
  };

  const handleEdit = (emergency) => {
    if (emergency && emergency._id) {
      setEditingEmergency(emergency);
    } else {
      console.error("Invalid emergency data for editing:", emergency);
    }
  };

  const handleSave = async () => {
    await fetchEmergencies(); // refresh after save
    setEditingEmergency(null);
  };

  const handleCancelEdit = () => {
    setEditingEmergency(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter emergencies by search query (location)
  const filteredEmergencies = emergencies.filter((emergency) =>
    emergency.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading emergencies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Emergency Ambulance List
      </h1>

      {/* Search Box */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by location..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border p-2 w-2xl rounded"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredEmergencies &&
          filteredEmergencies.map((emergency) =>
            emergency && emergency._id ? (
              <EmergencyCard
                key={emergency._id}
                emergency={emergency}
                onDelete={handleDelete}
                onEdit={handleEdit}
                isAdmin={userRole === "admin"}
              />
            ) : null
          )}
      </div>

      {editingEmergency && editingEmergency._id && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <EditForm
              emergency={editingEmergency}
              onSave={handleSave}
              onClose={handleCancelEdit}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Emergency;
