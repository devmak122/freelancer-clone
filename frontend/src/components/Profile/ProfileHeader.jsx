import React from 'react';
import woman from "./woman.jpg"

const ProfileHeader = () => {
    return (
        <div className="relative overflow-x-hidden ">
            <img className="w-full h-60 object-cover " src={woman} alt={woman} />
            <div className="absolute top-4 right-4 flex space-x-2">
                <button className="bg-pink-500 text-white py-2 px-4 rounded">Preview New Profile</button>
                <button className="bg-primary text-white py-2 px-4 rounded">View Client Profile</button>
            </div>
        </div>
    );
};

export default ProfileHeader;
