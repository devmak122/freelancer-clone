import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "./Pagination";
import SearchJobs from './SearchJobs';
import Filters from "./Filters";
import JobSkeletonLoader from './JobSkeletonLoader';
import { fetchJobsRequest, setSearchTerm, setFilters } from '../store/actions/jobActions';

const JobListing = () => {
    const dispatch = useDispatch();
    const jobs = useSelector(state => state.job.jobs);
    const isLoading = useSelector(state => state.job.isLoading);
    const searchTerm = useSelector(state => state.job.searchTerm);
    const filters = useSelector(state => state.job.filters);
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 10;

    useEffect(() => {
        dispatch(fetchJobsRequest());
    }, [dispatch, searchTerm, filters]);

    const handleSearchChange = (event) => {
        dispatch(setSearchTerm(event.target.value));
        setCurrentPage(1);
    };

    const handleFilterChange = (newFilters) => {
        dispatch(setFilters(newFilters));
        setCurrentPage(1);
    };

    const filteredJobs = jobs.filter(job => {
        if (searchTerm && !job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return false;
        }
        if (filters.budget) {
            const [minBudget, maxBudget] = filters.budget.split(' – ').map(b => parseInt(b.replace('$', '').replace(' USD', '')));
            const [jobMinBudget, jobMaxBudget] = job.budget.split(' – ').map(b => parseInt(b.replace('$', '').replace(' USD', '')));
            if (jobMinBudget < minBudget || jobMaxBudget > maxBudget) {
                return false;
            }
        }
        if (filters.bids && job.bids !== parseInt(filters.bids)) {
            return false;
        }
        if (filters.averageBid && parseInt(job.average_bid.replace('$', '').replace(' USD', '')) !== parseInt(filters.averageBid.replace('$', '').replace(' USD', ''))) {
            return false;
        }
        if (filters.tags && !filters.tags.split(',').every(tag => job.tags.includes(tag.trim()))) {
            return false;
        }
        if (filters.rating && job.rating !== parseFloat(filters.rating)) {
            return false;
        }
        if (filters.reviews && job.reviews !== parseInt(filters.reviews)) {
            return false;
        }
        if (filters.postedTime && job.posted_time !== filters.postedTime) {
            return false;
        }
        if (filters.category && filters.category !== job.category) {
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
        if (filters.jobType && filters.jobType !== job.job_type) {
            return false;
        }
        if (filters.clientInfo && !job.client_info.toLowerCase().includes(filters.clientInfo.toLowerCase())) {
            return false;
        }
        if (filters.clientHistory && filters.clientHistory !== job.client_history) {
            return false;
        }
        if (filters.clientLocation && !job.client_location.toLowerCase().includes(filters.clientLocation.toLowerCase())) {
            return false;
        }
        if (filters.projectLength && filters.projectLength !== job.project_length) {
            return false;
        }
        if (filters.hoursPerWeek && filters.hoursPerWeek !== job.hours_per_week) {
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

    return (
        <div className="p-8 bg-green-100 min-h-screen">
            <SearchJobs
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSearchChange={handleSearchChange}
            />

            <div className="flex flex-col laptop:flex-row space-x-0 laptop:space-x-6">
                <Filters filters={filters} setFilters={handleFilterChange} />

                <div className="w-full laptop:w-3/4 space-y-4">
                    {isLoading ? (
                        Array.from({ length: jobsPerPage }).map((_, index) => (
                            <JobSkeletonLoader key={index} />
                        ))
                    ) : (
                        currentJobs.map((job, index) => (
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
                                            {job.reviews && (
                                                <div className="flex items-center space-x-1">
                                                    <i className="fa fa-comments text-blue-500"></i>
                                                    <span>{job.reviews} reviews</span>
                                                </div>
                                            )}
                                            <p>{job.posted_time} ago</p>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button className={`text-green-600 hover:text-green-700 ${job.liked ? 'text-green-700' : ''}`}>
                                                <i className="fa fa-thumbs-up"></i>
                                            </button>
                                            <button className={`text-red-600 hover:text-red-700 ${job.unliked ? 'text-red-700' : ''}`}>
                                                <i className="fa fa-thumbs-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}

                    <Pagination currentPage={currentPage} paginate={paginate} totalPages={totalPages} />
                </div>
            </div>
        </div>
    );
};

export default JobListing;