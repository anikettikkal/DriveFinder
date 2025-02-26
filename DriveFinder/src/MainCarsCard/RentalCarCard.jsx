import React from 'react';

const RentalCarCard = ({ car }) => {
    return (
        <div className="flex flex-col  md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden w-full md:w-[600px] transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200 m-4 md:m-6 gap-4">
            {/* Image Section */}
            <div className="w-full md:w-1/3 h-48 md:h-auto">
                <img 
                    src={car.image} 
                    alt={car.carName} 
                    className="w-full h-full object-cover rounded-l-2xl"
                />
            </div>

            {/* Info Section */}
            <div className="p-4 w-full md:w-2/3 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{car.carName}</h2>
                <p className="text-gray-600 mb-1"><strong>Owner:</strong> {car.ownerName}</p>
                <p className="text-gray-600 mb-1"><strong>Contact:</strong> {car.ownerContact}</p>
                <p className="text-gray-600 mb-1"><strong>Location:</strong> {car.location}</p>
                <p className="text-gray-600 mb-1"><strong>Seater:</strong> {car.seater}</p>
                <p className="text-gray-600"><strong>Car Number:</strong> {car.carNumber}</p>
            </div>
        </div>
    );
};

export default RentalCarCard;