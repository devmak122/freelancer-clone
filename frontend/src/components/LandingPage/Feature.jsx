import React from 'react';

function Feature({ src, title, content }) {
    return (
        <div className="flex flex-col mx-4 sm:mx-6 mb-8">
            <img src={src} alt="" className="h-auto w-full object-cover rounded-t-2xl sm:rounded-t-[10px] sm:h-[140px]" />
            <div className="bg-white rounded-b-2xl sm:rounded-b-[10px] p-4 sm:p-5">
                <h4 className="text-xl sm:text-2xl font-extrabold text-center">{title}</h4>
                <h6 className="text-base sm:text-lg font-medium mt-2 sm:mt-4 mb-2 text-center">{content}</h6>
            </div>
        </div>
    );
}

export default Feature;
