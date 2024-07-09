import React from 'react';

const Pagination = ({ currentPage, paginate, totalPages }) => {
    const maxPagesToShow = 10;
    const startPage = Math.floor((currentPage - 1) / maxPagesToShow) * maxPagesToShow + 1;
    const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    const handlePrevious = () => {
        if (currentPage > 1) paginate(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) paginate(currentPage + 1);
    };

    return (
        <div className="mt-4">
            <nav className="relative z-0 font-mono text-center justify-center -space-x-px" aria-label="Pagination">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`relative inline-flex items-center px-2 py-2 font-medium text-gray-500 ${currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-gray-100'}`}
                >
                    Previous
                </button>
                {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
                    const pageNumber = startPage + index;
                    return (
                        <button
                            key={index}
                            onClick={() => paginate(pageNumber)}
                            className={`relative inline-flex items-center px-4 py-2 font-medium text-gray-700 ${currentPage === pageNumber ? 'z-10 bg-primary text-white border-primary' : 'hover:bg-gray-100'}`}
                        >
                            {pageNumber}
                        </button>
                    );
                })}
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`relative inline-flex items-center px-2 py-2 font-medium text-gray-500 ${currentPage === totalPages ? 'cursor-not-allowed' : 'hover:bg-gray-100'}`}
                >
                    Next
                </button>
            </nav>
        </div>
    );
};

export default Pagination;
