import React from 'react';

function Project({ src, title, price }) {
    return (
        <div className="project shadow-md overflow-hidden transition-transform duration-100 ease-in cursor-pointer">
            <img src={src} alt="project-logo" className="object-fill w-full h-48 transition-transform duration-100 ease-in hover:scale-107" />
            {/* <button>Post a project like this.</button> */}
            <div className="project__bottom mt-4 mb-2 px-2">
                <h2 className="font-bold text-2xl mb-2">{title}</h2>
                <h4 className="font-medium text-base">{price}</h4>
            </div>
        </div>
    )
}

export default Project;
