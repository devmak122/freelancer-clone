import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const categories = [
    { icon: 'bi bi-check-circle', title: 'Projects', description: 'Explore exciting new project opportunities now!' },
    { icon: 'bi bi-trophy', title: 'Contests', description: 'Unleash your talent and win Freelancer contests!' },
    { icon: 'bi bi-person', title: 'Freelancers', description: 'Find top-rated freelancers for your project' },
    { icon: 'bi bi-bookmark', title: 'Bookmarks', description: 'Access your saved project and contest opportunities' },
    { icon: 'bi bi-shield-check', title: 'Verified by Freelancer', description: 'Increase your chances of winning projects' },
    { icon: 'bi bi-star', title: 'Preferred Freelancer', description: 'Access exclusive projects and stand out' },
    { icon: 'bi bi-journal', title: 'Memberships', description: 'Get earning opportunities and savings' },
    { icon: 'bi bi-award', title: 'Exams', description: 'Prove your skills to win more work' },
    { icon: 'bi bi-briefcase', title: 'Recruiter', description: 'Get assistance finding the perfect freelancer' },
    { icon: 'bi bi-gear', title: 'Technical Co-pilot', description: 'Our staff will ensure your project is a success' },
    { icon: 'bi bi-globe', title: 'Enterprise', description: 'Turn your organization’s ideas into reality' },
    { icon: 'bi bi-geo-alt', title: 'Local Jobs', description: 'Get help in any location, anywhere in the world' },
    { icon: 'bi bi-emoji-smile', title: 'Showcase', description: 'Get inspiration from the world\'s best' },
    { icon: 'bi bi-people', title: 'Community', description: 'Browse resources for your business and career' },
    { icon: 'bi bi-search', title: 'Discover', description: 'Discover featured work from our best freelancers' },
    { icon: 'bi bi-question-circle', title: 'Customer Support', description: 'Browse the Help Center or get in touch with us' },
];

const BrowseDropdown = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setLoading(true);
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 500); 

        return () => clearTimeout(timeout);
    }, [searchTerm]);

    const filteredCategories = categories.filter(category =>
        category.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCategoryClick = (title) => {
        if (title === "Projects") {
            navigate("/job-listing");
        }
    };

    return (
        <div className="absolute left-96 mt-2 w-[800px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="p-4">
                <input
                    type="text"
                    placeholder="Search Freelancer.com"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {filteredCategories.length === 0 ? (
                    <p className="text-gray-600 text-center">No categories found.</p>
                ) : (
                    filteredCategories.map((category, index) => (
                        <button
                            key={index}
                            className="flex items-start p-2 hover:bg-gray-100 rounded-md cursor-pointer w-full text-left"
                            onClick={() => handleCategoryClick(category.title)}
                        >
                            {loading ? (
                                <Skeleton circle={true} height={40} width={40} className="mr-4" />
                            ) : (
                                <i className={`${category.icon} text-2xl text-gray-700 mr-4`}></i>
                            )}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {loading ? <Skeleton width={150} /> : category.title}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {loading ? <Skeleton count={2} width={200} /> : category.description}
                                </p>
                            </div>
                        </button>
                    ))
                )}
            </div>
        </div>
    );
};

export default BrowseDropdown;
