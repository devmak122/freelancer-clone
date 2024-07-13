import React from 'react';
import bg from "./bg.jpg";

function VideoBanner() {
    return (
        <div className="relative h-[600px] bg-center">
            <img src={bg} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
            <div className="relative z-10 bg-transparent text-white pt-[18vh] px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
                <h1 className="font-semibold text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[50px] leading-tight mb-4">
                    Hire the best freelancers for any job, online.
                </h1>
                <h4 className="font-normal text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] mb-6">
                    Millions of people use freelancer.com to turn their ideas into reality.
                </h4>
                <div className="flex flex-col sm:flex-row gap-4 px-1 font-poppins">
                    <button className="bg-[#f20091] text-[#f7f7f7] font-bold py-2 sm:py-3 md:py-4 px-6 sm:px-8 md:px-10 hover:bg-[#d90082]">
                        Hire a Freelancer
                    </button>
                    <button className="bg-transparent border border-[#fff] text-[#f7f7f7] font-bold py-2 sm:py-3 md:py-4 px-6 sm:px-8 md:px-10 hover:bg-[hsla(0,0%,100%,0.2)] hover:text-[#615e5c] hover:border-[#dedede]">
                        Earn Money Freelancing
                    </button>
                </div>
            </div>
        </div>
    );
}

export default VideoBanner;
