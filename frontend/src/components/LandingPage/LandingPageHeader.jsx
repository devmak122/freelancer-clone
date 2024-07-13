import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

   

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to="/">
                            <img
                                className="h-16 object-contain"
                                src="https://s3.amazonaws.com/fjds/gig_company/original/20/freelancer-logo.png?1587072521"
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 ${isOpen ? 'bg-gray-100' : ''}`}
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <FaTimes className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <FaBars className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <Link to="/">
                            <button className="ml-8 font-semibold font-poppins">How to use it</button>
                        </Link>
                        <Link to="/">
                            <button className="ml-8 font-semibold font-poppins">Examples</button>
                        </Link>
                        <h4 className="ml-8 font-semibold font-poppins">
                            <Link to="/login">Log In</Link>
                        </h4>
                        <h4 className="ml-8 font-semibold font-poppins">
                            <Link to="/signup">Sign Up</Link>
                        </h4>
                        <button className="ml-8 bg-primary font-lora text-white py-2 px-4 font-bold">
                            Post a Project
                        </button>
                       
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white px-4 py-2">
                    <div className="space-y-2">
                        <Link to="/">
                            <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                                How to use it
                            </button>
                        </Link>
                        <Link to="/">
                            <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                                Examples
                            </button>
                        </Link>
                        <Link to="/login">
                            <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                                Log In
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                                Sign Up
                            </button>
                        </Link>
                        <button
                            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-gray-900"
                            onClick={() => navigate('/post-project')}
                        >
                            Post a Project
                        </button>
                      
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
