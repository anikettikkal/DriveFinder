import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RentalCarCard from '../../MainCarsCard/RentalCarCard';

const RentalCars = () => {
    const [rentalCars, setRentalCars] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/RentalCar', {
                    withCredentials: true, // Use if your server requires cookies
                });

                setRentalCars(response.data); // Axios parses JSON automatically
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-6 grid gap-6 md:grid-cols-2">
            {rentalCars.map((car, index) => (
                <RentalCarCard key={index} car={car} />
            ))}
        </div>
    );
};

export default RentalCars;