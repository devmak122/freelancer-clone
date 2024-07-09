import React from 'react';
import { Link } from 'react-router-dom';
const HeroSection = () => {
    return (
        <div className="bg-white-100 flex flex-col items-center py-3">
            <div className="flex flex-col lg:flex-row lg:space-x-8   mb-5 ml-10">
                <div className="bg-[#EAF2FD]  shadow-md rounded-lg   p-6 w-full lg:w-1/2 mb-6 lg:mb-0 font-poppins" >
                    <p className="text-primary  mb-4">
                        You are almost ready to start earning money as a freelancer, simply complete the following steps:
                    </p>
                    <div className=' text-primary  p-7'>
                    <StepItem
                        icon="✉️"
                        title="Email Address"
                        description="Verify your email address to make your profile more secure"
                        buttonText="Already Verified"
                        buttonDisabled
                    />
                    <StepItem
                        icon="👤"
                        title="Update your profile"
                        description="A complete profile increases your chance of getting hired"
                        buttonText="Profile Page"
                    />
                  <Link to="/job-listing">
                  <StepItem
                        icon="💼"
                        title="Place your first bid"
                        description="Browse through projects and place your first bid"
                        buttonText="Browse Projects"
                        /></Link>
                    </div>
                </div>

                <div className="flex flex-col  space-y-6  lg:w-1/2">
                    <div className="bg-white  text-primary w-[80%] rounded-lg p-6">
                        <div className="flex items-center justify-between mx-10 mb-2">
                            <span className="font-semibold">Set up your account</span>
                            <span>50% done</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: '50%' }}></div>
                        </div>
                        <button className="w-full bg-primary text-white py-2 rounded">Add your address +5%</button>
                    </div>

                    <div className="bg-white text-primary  font-bold w-[80%] rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <span className="flex items-center">
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="INR" className="w-6 h-6 mr-2" />
                                Indian Rupee
                            </span>
                            <span className="font-bold">₹0.00 INR</span>
                        </div>
                        <button className="w-full bg-primary text-white py-2 rounded mt-4">Add funds</button>
                    </div>

                    <div className="bg-white  text-primary  shadow-md  w-[73%] ml-6 rounded-lg p-6">

                        <span>
                            <h3 className="text-lg font-semibold mb-2">0% Project fees</h3>
                            <p className="text-gray-500">Close deals faster with 0% for clients. Pay only 3% on quotes sent to clients outside Freelancer!</p></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const StepItem = ({ icon, title, description, buttonText, buttonDisabled }) => {
    return (
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
                <span className="text-2xl mr-3">{icon}</span>
                <div>
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-gray-500">{description}</p>
                </div>
            </div>
            <button
                className={`px-4 py-2 rounded ${buttonDisabled ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-primary text-white'}`}
                disabled={buttonDisabled}
            >
                {buttonText}
            </button>
        </div>
    );
}

export default HeroSection;
