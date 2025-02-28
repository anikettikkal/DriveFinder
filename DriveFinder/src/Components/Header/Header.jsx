import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./../../assets/Logo/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const [username, setUsername] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const storedUsername = localStorage.getItem('name');
        setUsername(storedUsername || "Guest");
    }, []);

    function logOut() {
        localStorage.removeItem('currentUser');
        window.location.href = '/login';
    }

    return (
        <header className="shadow sticky z-50 top-0 w-full bg-white">
            <nav className="border-gray-200 px-4 lg:px-6 py-3 flex justify-between items-center mx-auto max-w-screen-xl">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={Logo} className="mr-3 h-10" alt="Logo" />
                    <span className="text-2xl font-extrabold text-gray-800 tracking-wide">
                        <span className="text-orange-600">Drive</span>Finder
                    </span>
                </div>

                {/* Mobile Menu Toggle */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-gray-800 text-2xl">
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Nav Links */}
                <div className={`lg:flex items-center w-full lg:w-auto ${menuOpen ? "block" : "hidden"}`}>
                    <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 lg:items-center">
                        <li><NavLink to='/home' className="block py-2 px-4 hover:text-orange-700">Home</NavLink></li>
                        <li><NavLink to='/contact' className="block py-2 px-4 hover:text-orange-700">Contact</NavLink></li>
                        <li><NavLink to='/about' className="block py-2 px-4 hover:text-orange-700">About</NavLink></li>
                        <li><NavLink to='/dashboard' className="block py-2 px-4 hover:text-orange-700">DashBoard</NavLink></li>
                    </ul>
                </div>

                {/* User Info and Logout */}
                <div className="hidden lg:flex items-center space-x-4">
                    <span className="text-gray-800 font-medium">{username}</span>
                    <button onClick={logOut} className="bg-orange-700 text-white rounded-lg px-4 py-2 hover:bg-orange-800">
                        Logout
                    </button>
                </div>
            </nav>

            {/* Mobile User Info & Logout */}
            {menuOpen && (
                <div className="lg:hidden text-center py-2 border-t">
                    <span className="block text-gray-800 font-medium py-2">{username}</span>
                    <button onClick={logOut} className="bg-orange-700 text-white rounded-lg px-4 py-2 hover:bg-orange-800">
                        Logout
                    </button>
                </div>
            )}
        </header>
    );
}
