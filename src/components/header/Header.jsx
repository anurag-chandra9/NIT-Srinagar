import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://th.bing.com/th/id/OIP.Sv-46aubHDJTRbF_6ntxYQHaHo?rs=1&pid=ImgDetMain"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop and Mobile Menu */}
                    <div
                        className={`${
                            isMobileMenuOpen ? "block" : "hidden"
                        } lg:flex flex-col lg:flex-row lg:space-x-8 w-full lg:w-auto`}
                    >
                        <ul className="flex flex-col lg:flex-row lg:space-x-8 font-medium mt-4 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/About1"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/Academics"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   Academics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Announcement"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Announcement
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
