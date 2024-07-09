import React, { useState, useEffect } from 'react';

const Filters = ({ filters, setFilters }) => {
    const [localFilters, setLocalFilters] = useState(filters);

    useEffect(() => {
        setLocalFilters(filters);
    }, [filters]);

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setLocalFilters(prevFilters => ({
            ...prevFilters,
            [name]: checked,
        }));
    };

    const handleSelectChange = (event) => {
        const { name, value } = event.target;
        setLocalFilters(prevFilters => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLocalFilters(prevFilters => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const applyFilters = () => {
        setFilters(localFilters);
    };

    return (
        <div className="w-full laptop:w-1/4 space-y-4">
            {/* Title Filter */}
            <div className="bg-white  p-4 rounded-md shadow-sm mb-4">
               <div className='flex flex-row  items-center justify-between'>
                <h2 className="font-bold mb-4">Title</h2>
                <button
                    onClick={applyFilters}
                    className="bg-primary flex justify-end w-30 mb-4 text-center text-white p-3 rounded-lg"
                >
                    Apply Filters
                    </button>
                </div>
                <input
                    type="text"
                    name="title"
                    value={localFilters.title || ''}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
                
            </div>

            {/* Budget Filter */}
            <div className="bg-white p-4 rounded-md shadow-sm mb-4">
                <div className='flex flex-row  items-center justify-between'>
                <h2 className="font-bold mb-4">Budget</h2>
                <button
                    onClick={applyFilters}
                    className="bg-primary flex justify-end w-30 mb-4 text-center text-white p-3 rounded-lg"
                >
                    Apply Filters
                </button>
            </div>
                <input
                    type="number"
                    name="budget"
                    value={localFilters.budget || ''}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Bids Filter */}
            <div className="bg-white p-4 rounded-md shadow-sm mb-4">
                <div className='flex flex-row  items-center justify-between'>
                <h2 className="font-bold mb-4">Bids</h2>
                <button
                    onClick={applyFilters}
                    className="bg-primary flex justify-end w-30 mb-4 text-center text-white p-3 rounded-lg"
                >
                    Apply Filters
                </button>
            </div>
                <input
                    type="number"
                    name="bids"
                    value={localFilters.bids || ''}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Average Bid Filter */}
            <div className="bg-white p-4 rounded-md shadow-sm mb-4">
                <div className='flex flex-row  items-center justify-between'>
                    <h2 className="font-bold mb-4">Average Bid</h2>
                    <button
                        onClick={applyFilters}
                        className="bg-primary flex justify-end w-30 mb-4 text-center text-white p-3 rounded-lg"
                    >
                        Apply Filters
                    </button>
                </div>
                <input
                    type="number"
                    name="averageBid"
                    value={localFilters.averageBid || ''}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Tags Filter */}
            <div className="bg-white p-4 rounded-md shadow-sm mb-4">
                <div className='flex flex-row  items-center justify-between'>
                <h2 className="font-bold mb-4">Tags</h2>
                    <button
                        onClick={applyFilters}
                        className="bg-primary flex justify-end w-30 mb-4 text-center text-white p-3 rounded-lg"
                    >
                        Apply Filters
                    </button>
                </div>
                <input
                    type="text"
                    name="tags"
                    value={localFilters.tags || ''}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Rating Filter */}
            <div className="bg-white p-4 rounded-md shadow-sm mb-4">
                <div className='flex flex-row  items-center justify-between'>
                    <h2 className="font-bold mb-4">Rating</h2>
                    <button
                        onClick={applyFilters}
                        className="bg-primary flex justify-end w-30 mb-4 text-center text-white p-3 rounded-lg"
                    >
                        Apply Filters
                    </button>
                </div>
                <input
                    type="number"
                    step="0.1"
                    name="rating"
                    value={localFilters.rating || ''}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Reviews Filter */}
            <div className="bg-white p-4 rounded-md shadow-sm mb-4">
                <div className='flex flex-row  items-center justify-between'>
                <h2 className="font-bold mb-4">Reviews</h2>
                    <button
                        onClick={applyFilters}
                        className="bg-primary flex justify-end w-30 mb-4 text-center text-white p-3 rounded-lg"
                    >
                        Apply Filters
                    </button>
                </div>
                <input
                    type="number"
                    name="reviews"
                    value={localFilters.reviews || ''}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Posted Time Filter */}
            <div className="bg-white p-4 rounded-md shadow-sm mb-4">

                <div className='flex flex-row  items-center justify-between'>
                <h2 className="font-bold mb-4">Posted Time</h2>
                    <button
                        onClick={applyFilters}
                        className="bg-primary flex justify-end w-30 mb-4 text-center text-white p-3 rounded-lg"
                    >
                        Apply Filters
                    </button>
                </div>
                <input
                    type="time"
                    name="postedTime"
                    value={localFilters.postedTime || ''}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Category Filter */}
            <div className="bg-white p-4 rounded-md shadow-sm mb-4">
                <div className='flex flex-row  items-center justify-between'>
                <h2 className="font-bold mb-4">Category</h2>
                    <button
                        onClick={applyFilters}
                        className="bg-primary flex justify-end w-30 mb-4 text-center text-white p-3 rounded-lg"
                    >
                        Apply Filters
                    </button>
                </div>
                <select
                    name="category"
                    value={localFilters.category || ''}
                    onChange={handleSelectChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                >
                    <option value="">Select Category</option>
                    <option value="Web Development">Web Development</option>
                    <option value="backend_dev"> backend_dev</option>
                    <option value="front_dev">front_dev</option>
                </select>
            </div>

            {/* Experience Level Filter */}
            <div className="bg-white p-4 rounded-md shadow-sm mb-4">
                <div className='flex flex-row  items-center justify-between'>
                <h2 className="font-bold mb-4">Experience Level</h2>
                    <button
                        onClick={applyFilters}
                        className="bg-primary flex justify-end w-30 mb-4 text-center text-white p-3 rounded-lg"
                    >
                        Apply Filters
                    </button>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="entryLevel"
                            checked={localFilters.entryLevel || false}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                        />
                        Entry Level
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="intermediate"
                            checked={localFilters.intermediate || false}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                        />
                        Intermediate
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="expert"
                            checked={localFilters.expert || false}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                        />
                        Expert
                    </label>
                </div>
            </div>

            {/* Job Type Filter */}
            <div className="bg-white p-4 rounded-md shadow-sm mb-4">
                <div className='flex flex-row  items-center justify-between'>
                <h2 className="font-bold mb-4">Job Type</h2>
                    <button
                        onClick={applyFilters}
                        className="bg-primary flex justify-end w-30 mb-4 text-center text-white p-3 rounded-lg"
                    >
                        Apply Filters
                    </button>
                </div>
                <select
                    name="jobType"
                    value={localFilters.jobType || ''}
                    onChange={handleSelectChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                >
                    <option value="">Select Job Type</option>
                    <option value="Hourly">Hourly</option>
                    <option value="Fixed-Price">Fixed-Price</option>
                </select>
            </div>

            {/* Client Info Filter */}
            <div className="bg-white p-4 rounded-md shadow-sm mb-4">
                <div className='flex flex-row  items-center justify-between'>
                <h2 className="font-bold mb-4">Client Info</h2>
                    <button
                        onClick={applyFilters}
                        className="bg-primary flex justify-end w-30 mb-4 text-center text-white p-3 rounded-lg"
                    >
                        Apply Filters
                    </button>
                </div>
                <input
                    type="text"
                    name="clientInfo"
                    value={localFilters.clientInfo || ''}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Client History Filter */}
            <div className="bg-white p-4 rounded-md shadow-sm mb-4">
                <div className='flex flex-row  items-center justify-between'>
                <h2 className="font-bold mb-4">Client History</h2>
                    <button
                        onClick={applyFilters}
                        className="bg-primary flex justify-end w-30 mb-4 text-center text-white p-3 rounded-lg"
                    >
                        Apply Filters
                    </button>
                </div>
                <select
                    name="clientHistory"
                    value={localFilters.clientHistory || ''}
                    onChange={handleSelectChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                >
                    <option value="">Select Client History</option>
                    <option value="No hires">No hires</option>
                    <option value="1 to 9 hires">1 to 9 hires</option>
                    <option value="10+ hires">10+ hires</option>
                </select>
            </div>

            {/* Client Location Filter */}
            <div className="bg-white p-4 rounded-md shadow-sm mb-4">
                <div className='flex flex-row  items-center justify-between'>
                <h2 className="font-bold mb-4">Client Location</h2>
                    <button
                        onClick={applyFilters}
                        className="bg-primary flex justify-end w-30 mb-4 text-center text-white p-3 rounded-lg"
                    >
                        Apply Filters
                    </button>
                </div>
               
                <select
                    name="clientLocation"
                    value={localFilters.clientLocation || ''}
                    onChange={handleSelectChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                >
                    <option value="">clientLocation</option>
                    <option value="UK">UK</option>
                    <option value="USA"> USA</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                </select>
            </div>

            {/* Project Length Filter */}
            <div className="bg-white p-4 rounded-md shadow-sm mb-4">
                <div className='flex flex-row  items-center justify-between'>
                <h2 className="font-bold mb-4">Project Length</h2>
                    <button
                        onClick={applyFilters}
                        className="bg-primary flex justify-end w-30 mb-4 text-center text-white p-3 rounded-lg"
                    >
                        Apply Filters
                    </button>
                </div>
                <select
                    name="projectLength"
                    value={localFilters.projectLength || ''}
                    onChange={handleSelectChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                >
                    <option value="">Select Project Length</option>
                    <option value="Less than 1 month">Less than 1 month</option>
                    <option value="1 to 3 months">1 to 3 months</option>
                    <option value="3 to 6 months">3 to 6 months</option>
                    <option value="More than 6 months">More than 6 months</option>
                </select>
            </div>

            {/* Hours per Week Filter */}
            <div className="bg-white p-4 rounded-md shadow-sm mb-4">
                <div className='flex flex-row  items-center justify-between'>
                <h2 className="font-bold mb-4">Hours per Week</h2>
                    <button
                        onClick={applyFilters}
                        className="bg-primary flex justify-end w-30 mb-4 text-center text-white p-3 rounded-lg"
                    >
                        Apply Filters
                    </button>
                </div>
                <select
                    name="hoursPerWeek"
                    value={localFilters.hoursPerWeek || ''}
                    onChange={handleSelectChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                >
                    <option value="">Select Hours per Week</option>
                    <option value="Less than 30 hrs/week">Less than 30 hrs/week</option>
                    <option value="More than 30 hrs/week">More than 30 hrs/week</option>
                </select>
            </div>

           
        </div>
    );
};

export default Filters;
