import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3000/Signup', formData)
            .then((response) => {
                alert(response.data.message);
                localStorage.setItem('name', response.data.data.name); 
                navigate('/login');
            })
            .catch(() => alert('Signup failed'));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-extrabold text-center text-gray-800">Sign Up</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-gray-700 font-medium">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-2 py-3 px-4 rounded-lg border border-gray-400 focus:border-orange-500 focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-2 py-3 px-4 rounded-lg border border-gray-400 focus:border-orange-500 focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-2 py-3 px-4 rounded-lg border border-gray-400 focus:border-orange-500 focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-700 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-gray-600">
                    Already have an account? <a href="/login" className="text-orange-600 font-bold">Login</a>
                </p>
            </div>
        </div>
    );
}
