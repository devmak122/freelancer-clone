import React from 'react';

const JobSkeletonLoader = () => {
    return (
        <div className="bg-white p-6 rounded-md shadow-md">
            <div className="flex flex-col space-y-2 animate-pulse">
                <div className="flex justify-between items-center">
                    <div className="bg-green-200 rounded h-6 w-3/4"></div>
                    <div className="space-y-1">
                        <div className="bg-green-200 rounded h-6 w-16"></div>
                        <div className="bg-green-200 rounded h-6 w-20"></div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="space-y-1">
                        <div className="bg-green-200 rounded h-6 w-16"></div>
                        <div className="bg-green-200 rounded h-6 w-12"></div>
                    </div>
                </div>
                <div className="bg-green-200 rounded h-6 w-3/4"></div>
                <div className="flex flex-wrap gap-2">
                    <div className="bg-green-200 rounded h-6 w-16"></div>
                    <div className="bg-green-200 rounded h-6 w-16"></div>
                    <div className="bg-green-200 rounded h-6 w-16"></div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                       
                    </div>
                    <div className="flex space-x-2">
                        <div className="bg-green-200 rounded h-6 w-6"></div>
                        <div className="bg-green-200 rounded h-6 w-6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobSkeletonLoader;
