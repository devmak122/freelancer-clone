import React from 'react';


const SearchJobs = ({ searchTerm, setSearchTerm, handleSearchChange }) => {
    return (
        <div className="mb-6 flex items-center">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full p-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <span className="mr-20">
                <i className="fa fa-search ml-20"></i>
            </span>
        </div>
    );
};

export default SearchJobs;
