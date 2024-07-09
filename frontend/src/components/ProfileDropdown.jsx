import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from "react-router-dom";
import yt from "../Images/yt.svg";

const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState('');
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve the username from local storage or application state
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.username) {
            setUsername(user.username);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen]);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div className='flex flex-row justify-center items-center'>
                <button
                    onClick={toggleDropdown}
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-50"
                >
                    <img className="ml-1" src={yt} alt="yt" />
                    <span className="ml-5 text-white text-sm">
                        {username ? (
                            <>
                                {username} <br />
                                INR
                            </>
                        ) : (
                            "soory" // Fallback if username is not available
                        )}
                    </span>
                </button>
            </div>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-64 text-center rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <p className='text-[19px] p-3 font-semibold'>Account</p>
                        <Link to="/Projectsfilter" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">View profile</Link>
                        <Link to="/membership" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Membership</Link>
                        <Link to="/ProfileAnalytics" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Account analytics</Link>
                        <Link to="/bid-insights" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Bid Insights</Link>
                        <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Settings</Link>
                        <p className='text-[19px] p-3 font-semibold'>Finances</p>
                        <div className="border-t border-gray-100"></div>
                        <Link to="/balance" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Balance ₹0.00 INR</Link>
                        <Link to="/add-funds" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Add funds</Link>
                        <Link to="/withdraw-funds" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Withdraw funds</Link>
                        <Link to="/transaction-history" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Transaction history</Link>
                        <Link to="/financial-dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Financial dashboard</Link>
                        <Link to="/payment-sharing" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Payment sharing</Link>
                        <div className="border-t border-gray-100"></div>
                        <Link to="/support" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">Support</Link>
                        <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700" role="menuitem">
                            <button className="btn btn-success" onClick={handleLogout}>Logout</button>
                        </Link>
                        <div className="border-t border-gray-100"></div>
                        <p className="block px-4 py-2 text-xs text-gray-500">App: 839efb (1719561748 / 2024-06-28)</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
