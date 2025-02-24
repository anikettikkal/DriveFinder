import React from 'react'
import { Link } from 'react-router-dom';
import Cards from '../Cards/Cards';
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Get Quick Rides
                            <span className="hidden sm:block text-4xl">We Are Here <br /> तो किस बात का Fear</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/contact"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Connect With-Us
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-150" src="https://img.freepik.com/premium-vector/car-sharing-service_179970-972.jpg?w=1800" alt="image1" />
                </div>
            </aside>
            <div>
                <h2 style={{ fontWeight: 'bold', fontFamily: "revert" }} className="hidden sm:block text-4xl ">Suggestions</h2>
                <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                    <Cards image="https://img.freepik.com/free-vector/
                    small-car-concept-illustration_114360-29987.jpg?
                    t=st=1740158368~exp=1740161968~hmac=39188f76efcb33f10f94a3ca307ae1aeea5b9fbcd45345abbd205155ca462a44&w=900" title="Cars ! Your Perfect Ride for Every Journey" 
                    paragraph="For Family Trips: Spacious cars with ample luggage space for a comfortable journey." navigate="/RentalCars"/>
                    <Cards image="https://img.freepik.com/premium-vector/ambulance-travels-call-sick-patient-flat-illustration_124715-541.jpg?w=996" 
                    title="Emergency Ambulance Service!" navigate="/Emergency" paragraph="For Medical Emergencies: Fast and reliable ambulance service available 24/7." />
                    <Cards image="https://img.freepik.com/free-vector/dad-mom-children-traveling-camper_74855-7139.jpg?t=st=1740160754~exp=1740164354~hmac=2c6133b544f820b1982c81cb8337e5a927aac3ede0be02c342494c3dd57f8ee2&w=1380"
                    title="Mini Bus for Group Travel Made Easy!" navigate="/Trip" paragraph="Comfort & Convenience: Ideal for city tours, events, and long-distance travel."/>
                </div>
            </div>
        </div>
    );
}
