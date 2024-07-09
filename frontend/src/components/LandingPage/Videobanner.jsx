import React from 'react';
import bg from "./bg.jpg"; 
function VideoBanner() {
    return (
        <div className="relative h-[600px] bg-center">
            <img src={bg} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
            <div className="relative z-10 bg-transparent text-white pt-[18vh] pl-[50px] pr-[80px] pb-[40px] ml-[50px] w-[550px]">
                <h1 className="font-semibold text-[50px] leading-[65px] mb-[20px]">Hire the best freelancers for any job, online.</h1>
                <h4 className="font-normal text-[20px] mb-[20px]">
                    Millions of people use freelancer.com to turn their ideas into reality.
                </h4>
                <div className="flex flex-row gap-4 px-1 font-poppins">
                    <button className="bg-[#f20091] text-[#f7f7f7] font-bold py-[20x] px-[50px] hover:bg-[#d90082]">
                        Hire a Freelancer
                    </button>
                    <button className="bg-transparent border border-[#fff] text-[#f7f7f7] font-bold py-[20px] px-[38px] hover:bg-[hsla(0,0%,100%,0.2)] hover:text-[#615e5c] hover:border-[#dedede]">
                        Earn Money Freelancing
                    </button>
                </div>
            </div>
        </div>
    );
}

export default VideoBanner;
