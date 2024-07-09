import React from 'react';

function Feature({ src, title, content }) {
    return (
        <div className="flex flex-col mx-6 mb-10">
            <img src={src} alt="" className="h-[140px] w-full" />
            <div className="mt-[-9px] rounded-[10px] p-5">
                <h4 className="text-[25px] font-extrabold text-center">{title}</h4>
                <h6 className="text-[18px] font-medium mt-4 mb-2 text-center">{content}</h6>
            </div>
        </div>
    )
}

export default Feature;
