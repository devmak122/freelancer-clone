import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import SearchJobs from './SearchJobs';
import Filters from './Filters';
import Rating from './Rating';
import jobListings from "../jobListings.json"; 

const JobListing = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 10;

    const [jobStates, setJobStates] = useState(
        jobListings.map(job => ({
            ...job,
            liked: false,
            unliked: false,
            userRating: 0,
        }))
    );

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); 
    };

    const handleLikeClick = (index) => {
        setJobStates(prevStates =>
            prevStates.map((job, i) =>
                i === index ? { ...job, liked: !job.liked, unliked: false } : job
            )
        );
    };

    const handleUnlikeClick = (index) => {
        setJobStates(prevStates =>
            prevStates.map((job, i) =>
                i === index ? { ...job, unliked: !job.unliked, liked: false } : job
            )
        );
    };

    const handleRatingChange = (index, newRating) => {
        setJobStates(prevStates =>
            prevStates.map((job, i) =>
                i === index ? { ...job, userRating: newRating } : job
            )
        );
    };

    const filteredJobs = jobStates.filter(job => {
        if (searchTerm && !job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return false;
        }
        if (filters.entryLevel && job.experience_level !== 'Entry Level') {
            return false;
        }
        if (filters.intermediate && job.experience_level !== 'Intermediate') {
            return false;
        }
        if (filters.expert && job.experience_level !== 'Expert') {
            return false;
        }
        if (filters.category && job.category !== filters.category) {
            return false;
        }
        if (filters.hourly && job.job_type !== 'Hourly') {
            return false;
        }
        if (filters.fixedPrice && job.job_type !== 'Fixed-Price') {
            return false;
        }
        if (filters.clientLocation && job.client_location !== filters.clientLocation) {
            return false;
        }
    
        return true;
    });

    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

    const paginate = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [filteredJobs.length, totalPages, currentPage]);

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <SearchJobs
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSearchChange={handleSearchChange}
            />
            <div className="flex flex-col laptop:flex-row space-x-0 laptop:space-x-6">
                <Filters filters={filters} setFilters={setFilters} />
                <div className="w-full laptop:w-3/4 space-y-4">
                    {currentJobs.map((job, index) => (
                        <div key={index} className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex flex-col space-y-2">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold text-xl text-blue-600">{job.title}</h3>
                                    <div className="text-gray-600">
                                        <p className="font-semibold">{job.bids} bids</p>
                                        <p className="font-semibold">{job.budget}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="text-gray-600">
                                        <p>{job.average_bid}</p>
                                        <p>{job.per_hour_rate}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700">
                                    {job.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {job.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center text-gray-600">
                                    <div className="flex items-center space-x-4">
                                        {job.rating && (
                                            <div className="flex items-center space-x-1">
                                                <span className="text-yellow-500">⭐</span>
                                                <span>{job.rating}</span>
                                            </div>
                                        )}
                                        <Rating
                                            initialRating={job.userRating}
                                            onRate={(newRating) => handleRatingChange(index, newRating)}
                                        />
                                        {job.reviews && (
                                            <div className="flex items-center space-x-1">
                                                <i className="fas fa-comments text-blue-500"></i>
                                                <span>{job.reviews} reviews</span>
                                            </div>
                                        )}
                                        <p>{job.posted_time} ago</p>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button
                                            className={`text-green-600 hover:text-green-700 ${job.liked ? 'text-green-700' : ''}`}
                                            onClick={() => handleLikeClick(index)}
                                        >
                                            <i className="fas fa-thumbs-up"></i>
                                        </button>
                                        <button
                                            className={`text-red-600 hover:text-red-700 ${job.unliked ? 'text-red-700' : ''}`}
                                            onClick={() => handleUnlikeClick(index)}
                                        >
                                            <i className="fas fa-thumbs-down"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <Pagination currentPage={currentPage} paginate={paginate} totalPages={totalPages} />
                </div>
            </div>
        </div>
    );
};

export default JobListing;
