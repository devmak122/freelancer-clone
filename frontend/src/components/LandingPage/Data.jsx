import React from 'react';

function Data({ src, title, subtitle, content, btn, reverse }) {
    return (
        <div className={`flex flex-col md:flex-row bg-gray-200 rounded-[30px] p-4 m-4 ${reverse ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex justify-center items-center w-full md:w-1/2">
                <img src={src} alt="data-dp" className="w-full max-w-xs h-auto md:w-[300px] md:h-[250px] rounded-[30px] md:rounded-none" />
            </div>
            <div className={`flex flex-col justify-center text-center md:text-left px-4 py-2 w-full md:w-1/2`}>
                <h5 className="text-blue-500 font-bold text-sm md:text-base mb-2">{title}</h5>
                <h3 className="font-bold text-lg md:text-xl mb-2">{subtitle}</h3>
                <h4 className="font-medium text-sm md:text-base mb-4">{content}</h4>
                <button className="bg-[#007fed] border-[#007fed] text-white py-2 px-4 font-bold hover:bg-[#139ff0]">
                    {btn}
                </button>
            </div>
        </div>
    );
}

export default Data;
