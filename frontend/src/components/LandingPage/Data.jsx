import React from 'react';

function Data({ src, title, subtitle, content, btn, reverse }) {
    return (
        <div className={`flex w-1/2 bg-gray-200  rounded-[30px] p-4 m-4 ${reverse ? 'flex-row-reverse' : ''}`}>
            <div className="flex">
                <img src={src} alt="data-dp" className="w-[300px] h-[250px]" />
            </div>
            <div className={`text-right pr-2 ${reverse ? 'text-left' : ''} ml-4 mt-4`}>
                <h5 className="text-blue-500 font-bold text-[15px] mb-4">{title}</h5>
                <h3 className="font-bold text-[20px] mb-4">{subtitle}</h3>
                <h4 className="font-medium mb-9">{content}</h4>
                <button className="bg-[#007fed] border-[#007fed] text-white py-2 px-4 font-bold hover:bg-[#139ff0]">
                    {btn}
                </button>
            </div>
        </div>
    );
}

export default Data;
