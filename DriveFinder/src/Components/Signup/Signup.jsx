import React from "react";

export default function Signup() {



    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-extrabold text-center text-gray-800">Sign Up</h2>

                <form className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-gray-700 font-medium">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your full name"
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
