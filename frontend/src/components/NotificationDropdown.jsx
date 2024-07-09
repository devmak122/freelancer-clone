import React from 'react';
import { Link } from "react-router-dom";

const NotificationDropdown = ({ isOpen, onClose }) => {
    return (
        <div className={`dropdown ${isOpen ? "block" : "hidden"} absolute top-full right-0 w-[300px] bg-white shadow-lg rounded-lg mt-2 p-4 z-10`}>
            <div className="border-b pb-2 mb-2">
                <h4 className="font-bold text-lg">Notifications</h4>
            </div>
            <div className="flex flex-col items-center">
                <i className="bi bi-bell text-4xl text-blue-500 mb-2"></i>
                <p className="text-gray-600 text-center mb-2">
                    You don't have any notifications as of this moment.
                </p>
                <Link to="/search-project" className="text-blue-500 border rounded px-3 py-2 bg-gray-100" onClick={onClose}>
                    Search Project
                </Link>
            </div>
        </div>
    );
};

export default NotificationDropdown;
