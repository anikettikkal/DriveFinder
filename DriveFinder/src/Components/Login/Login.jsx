import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-extrabold text-center text-gray-800">Login</h2>

                <form className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="mt-2 py-3 px-4 rounded-lg border border-gray-400 focus:border-orange-500 focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            className="mt-2 py-3 px-4 rounded-lg border border-gray-400 focus:border-orange-500 focus:outline-none"
                        />
                    </div>

                    <Link to="/home"><button
                        type="submit"
                        className="w-full bg-orange-700 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition duration-300"
                    >
                        Login 
                    </button> </Link>
                </form>

                <p className="text-center text-gray-600">
                    Don't have an account? <a href="/signup" className="text-orange-600 font-bold">Sign up</a>
                </p>
            </div>
        </div>
    );
}
