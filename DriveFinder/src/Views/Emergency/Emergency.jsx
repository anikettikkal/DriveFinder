// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import EmergencyCard from "../../MainCarsCard/EmergencyCard"

// const Emergency = () => {
//   const [emergencies, setEmergencies] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/api/emergency")
//       .then((res) => {
//         setEmergencies(res.data);
//       })
//       .catch((error) => console.error("Error fetching emergency data:", error));
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Emergency Ambulance List</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {emergencies.map((emergency) => (
//           <EmergencyCard key={emergency._id} emergency={emergency} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Emergency;

import React, { useState, useEffect } from "react";
import axios from "axios";
import EmergencyCard from "../../MainCarsCard/EmergencyCard";

const Emergency = () => {
  const [emergencies, setEmergencies] = useState([]); // Set initial state to empty array

  useEffect(() => {
    // Fetch emergency data
    axios
      .get("http://localhost:3000/api/emergency")
      .then((res) => {
        if (res.data.status) {
          setEmergencies(res.data.data); // Ensure the data is an array
        }
      })
      .catch((error) => console.error("Error fetching emergency data:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Emergency Ambulance List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Check if emergencies is an array before using map */}
        {Array.isArray(emergencies) && emergencies.length > 0 ? (
          emergencies.map((emergency) => (
            <EmergencyCard key={emergency._id} emergency={emergency} />
          ))
        ) : (
          <p>No emergency cars available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Emergency;
