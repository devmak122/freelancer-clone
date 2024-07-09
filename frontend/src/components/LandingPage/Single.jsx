import React from 'react';

function Single({ src, title, content }) {
    return (
        <div className="flex flex-col mr-4 w-full mb-4">
            <div className="flex items-center p-2">
                <img src={src} alt="single" className="h-12" />
                <h3 className="ml-4 text-xl font-semibold">{title}</h3>
            </div>
            <div className="flex mx-2">
                <h6 className="text-lg font-normal">{content}</h6>
            </div>
        </div>
    )
}

export default Single;
