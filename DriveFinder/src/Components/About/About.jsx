import React from "react";

export default function About() {
    return (
        <div className="relative flex items-center justify-center min-h-[700px] bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">About DriveFinder</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        DriveFinder is your reliable platform to find cars for trips, emergencies, and everyday needs. Our goal is to provide an efficient and seamless car search experience, ensuring that you find the perfect vehicle whenever you need it.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                            <img src="https://img.freepik.com/premium-vector/online-car-rent-service-flat-design-concept-vector-illustration_7087-2068.jpg?w=1380" alt="Wide Selection" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h3 className="text-2xl font-bold text-orange-600 mb-2">Wide Selection</h3>
                            <p className="text-gray-600">Choose from a variety of vehicles to suit your needs, from compact cars to spacious SUVs.</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                            <img src="https://img.freepik.com/free-vector/seller-talking-customer-about-car-dealer-future-vehicle-owner-rental-center-service_575670-280.jpg?t=st=1740407734~exp=1740411334~hmac=b857932d11e6a4008713a014a6bb336900647c7a681661248070f8743feaaa2e&w=1380" alt="Easy Booking" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h3 className="text-2xl font-bold text-orange-600 mb-2">Easy Booking</h3>
                            <p className="text-gray-600">Our user-friendly platform makes booking a vehicle quick and simple, saving you time and hassle.</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                            <img src="https://img.freepik.com/free-vector/ambulance-doctors-concept-emergency-doctor-uniform-paramedics-urgent-care-healthcare-modern-medicine-treatment-isolated-vector-illustration_613284-2665.jpg?t=st=1740407822~exp=1740411422~hmac=4079fce5f4d8337f64be7e57c9cc48bad5ce60ab703e467f52bb6a212fe0563c&w=1380" alt="24/7 Support" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h3 className="text-2xl font-bold text-orange-600 mb-2">24/7 Support</h3>
                            <p className="text-gray-600">We’re here to help anytime, ensuring you have assistance whenever you need it.</p>
                        </div>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose DriveFinder?</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Whether you're planning a weekend getaway or need a quick ride to your destination, DriveFinder ensures you get the best vehicle at competitive rates. Experience the convenience of instant bookings, reliable support, and a wide selection of cars to choose from.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <img src="https://img.freepik.com/free-vector/family-road-trip-children-parents-packing-car-vacation-travel-holiday-automobile-voyage_575670-778.jpg?t=st=1740407903~exp=1740411503~hmac=9f68ad94cd69bffcc80c07c7a0ebff2c1b2af59ae12c2b58a70d241a979cd1b2&w=1480" alt="Road Trip" className="w-full h-64 object-cover rounded-lg mb-4" />
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Perfect for Road Trips</h3>
                                <p className="text-gray-600">Explore new destinations with confidence, knowing you have a reliable vehicle at your service.</p>
                            </div>
                            <div>
                                <img src="https://img.freepik.com/free-vector/transportation-means-emitting-smoke-clouds-cityscape-background-people-wearing-protective-face-masks_575670-149.jpg?t=st=1740408098~exp=1740411698~hmac=c857bd11c2bb6e86aa11efab5449a059fdcdc734e93a7b2f2d72e7660b670a6c&w=1480" alt="City Car" className="w-full h-64 object-cover rounded-lg mb-4" />
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Convenient City Rides</h3>
                                <p className="text-gray-600">Navigate through the city hassle-free with our range of compact and fuel-efficient cars.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
