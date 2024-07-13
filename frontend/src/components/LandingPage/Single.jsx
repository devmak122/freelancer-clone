import React from 'react';

function Single({ src, title, content }) {
    return (
        <div className="flex flex-col mb-6 sm:mb-4 md:mb-0 w-full sm:w-1/2 md:w-2/3 px-2">
            <div className="flex items-center p-2">
                <img src={src} alt="single" className="h-8 sm:h-10 md:h-12" />
                <h3 className="ml-3 sm:ml-4 text-base sm:text-lg md:text-xl font-semibold">{title}</h3>
            </div>
            <div className="mt-2 mx-2">
                <h6 className="text-sm sm:text-base md:text-lg font-normal">{content}</h6>
            </div>
        </div>
    );
}

export default Single;
