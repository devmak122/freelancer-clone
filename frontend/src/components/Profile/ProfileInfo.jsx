import React, { useState } from 'react';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileHeadline, setProfileHeadline] = useState("UI/UX Design, Frontend Web Developer");
    const [summary, setSummary] = useState(
        "I most like UI/UX design and have created so many app/web designs. Freelancer seems like a great place to work and the benefits look incredible. Also, I am creating a mobile-friendly website using HTML, CSS, JS, and Bootstrap. I would like to develop a wonderful mobile-friendly responsive website. I will be glad if you will hire me for website developing and designing UI/UX."
    );

    const handleSave = () => {
        setIsEditing(false);
    };

    return (
        <div className="bg-tertiary">
            <div className="max-w-7xl mx-auto font-Montserrat overflow-hidden   px-4">
                <div className="flex flex-wrap justify-start overflow-hidden mt-10  gap-4items-start">
                    {/* Left Section - 80% */}
                    <div className='w-full lg:w-9/12 '>
                        <div className="mx-auto bg-teal-100 shadow-md rounded-lg mb-6 mr-5 p-4 flex flex-wrap lg:flex-nowrap">
                            {/* Left Section - 30% */}
                            <div className="w-full lg:w-2/6 p-4 flex flex-col items-center">
                                <div className="relative">
                                    <img className="w-64 h-64 border-4 border-white" src="https://via.placeholder.com/150" alt="Profile" />
                                </div>
                                <div className="mt-4 flex items-start flex-col text-center">
                                    <span className="flex items-center text-green-500">
                                        <i className="bi bi-dot"></i> I'm online!
                                    </span>
                                    <span className="text-black-700 mt-2">$40 USD / hour</span>
                                    <span className="text-black-600 mt-2">
                                        <i className="bi bi-geo-alt-fill text-orange-500 mr-1"></i>Vadodara, India
                                    </span>
                                    <span className="text-black-600 mt-2">
                                        <i className="bi bi-clock-fill text-blue-500 mr-1"></i> It's currently 8:55 PM here
                                    </span>
                                    <span className="text-black-600 mt-2">
                                        <i className="bi bi-calendar-fill text-yellow-500 mr-1"></i>Joined August 21, 2021
                                    </span>
                                    <span className="text-black-600 mt-2">
                                        <i className="bi bi-star-fill text-yellow-500 mr-1"></i> 0 Recommendations
                                    </span>
                                </div>
                            </div>

                            {/* Right Section - 70% */}
                            <div className={`w-full lg:w-4/6 p-4 flex flex-col items-center`}>
                                <div className="flex justify-between items-center mb-4 w-full">
                                    <div>
                                        <h2 className="text-2xl font-semibold">Ritu M.</h2>
                                        <p className="text-black-600">@Ritu217</p>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                className="border rounded p-2 mt-2 w-full"
                                                value={profileHeadline}
                                                onChange={(e) => setProfileHeadline(e.target.value)}
                                            />
                                        ) : (
                                            <p className="text-black-600">{profileHeadline}</p>
                                        )}
                                    </div>
                                    <button className="bg-primary text-white py-2 px-4 rounded" onClick={() => setIsEditing(!isEditing)}>
                                        {isEditing ? 'Cancel' : 'Edit Profile'}
                                    </button>
                                </div>

                                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                                    <div className="text-center">
                                        <p className="font-semibold text-lg">N/A</p>
                                        <p className="text-black-600">Jobs Completed</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="font-semibold text-lg">N/A</p>
                                        <p className="text-black-600">On Time</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="font-semibold text-lg">N/A</p>
                                        <p className="text-black-600">On Budget</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="font-semibold text-lg">N/A</p>
                                        <p className="text-black-600">Repeat Hire Rate</p>
                                    </div>
                                </div>

                                {isEditing ? (
                                    <div className="mt-4 w-full">
                                        <textarea
                                            className="border rounded p-2 h-32 w-full"
                                            value={summary}
                                            onChange={(e) => setSummary(e.target.value)}
                                        />
                                        <div className="flex justify-end mt-4">
                                            <button className="bg-red-500 text-white py-2 px-4 rounded mr-2" onClick={() => setIsEditing(false)}>
                                                Cancel
                                            </button>
                                            <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleSave}>
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mt-4 w-full">
                                        <p className="text-black-700">{summary}</p>
                                    </div>
                                )}

                                <div className="mt-4 flex gap-4">
                                    <button className="underline text-black-700 py-2 px-4 rounded">+ Add</button>
                                    <button className="underline text-primary py-2 px-4 font-normal">General</button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-teal-100 shadow-lg  mr-5 rounded-lg p-4 mt-6">
                            <h3 className="text-xl font-semibold mb-4">Portfolio</h3>
                            <div className="flex items-center justify-center h-24">
                                <p className="text-gray-600">No portfolio items have been added yet.</p>
                            </div>
                            <button className="bg-primary text-white py-2 px-4 rounded w-full mt-4">Edit Layout</button>
                        </div>
                        <div className="bg-teal-100 shadow-lg mr-5 rounded-lg p-4 mt-6">
                            <h3 className="text-xl font-semibold mb-4">Reviews</h3>
                            <div className="flex items-center justify-center h-24">
                                <p className="text-gray-600">No reviews to see here!</p>
                            </div>
                        </div>
                        <div className="bg-teal-100 shadow-lg mr-5 rounded-lg p-4 mt-6">
                            <h3 className="text-xl font-semibold mb-4">Education</h3>
                            <div className="border-t border-gray-200 mt-2 pt-2">
                                <p className="text-gray-700"><strong>Bachelor of Technology</strong></p>
                                <p className="text-gray-600">Parul University, India</p>
                                <p className="text-gray-600">2019 - 2022 (3 years)</p>
                            </div>
                            <button className="bg-primary text-white py-2 px-4 rounded w-full mt-4">Add Education</button>
                        </div>
                        <div className="bg-teal-100 shadow-lg mr-5  rounded-lg p-4 mt-6">
                            <h3 className="text-xl font-semibold mb-4">Experience</h3>
                            <div className="border-t border-gray-200 mt-2 pt-2">
                                <p className="text-gray-700"><strong>Frontend Developer</strong></p>
                                <p className="text-gray-600">Inbox Infotech Pvt Ltd</p>
                                <p className="text-gray-600">May 2022 - Present</p>
                                <p className="text-gray-600">Creating various websites and posts over here.</p>
                            </div>
                            <button className="bg-primary text-white py-2 px-4 rounded w-full mt-4">Add Experience</button>
                        </div>
                        <div className="bg-teal-100 shadow-lg mr-5 rounded-lg p-4 mt-6">
                            <h3 className="text-xl font-semibold mb-4">Qualifications</h3>
                            <div className="flex items-center justify-center h-24">
                                <p className="text-gray-600">No qualifications have been added.</p>
                            </div>
                            <button className="bg-primary text-white py-2 px-4 rounded w-full mt-4">Add Qualification</button>
                        </div>
                        <div className="bg-teal-100 shadow-lg mr-5 mb-5 rounded-lg p-4 mt-6">
                            <h3 className="text-xl font-semibold mb-4">Publications</h3>
                            <div className="flex items-center justify-center h-24">
                                <p className="text-gray-600">No publications have been added.</p>
                            </div>
                            <button className="bg-primary text-white py-2 px-4 rounded w-full mt-4">Add Publication</button>
                        </div>
                    </div>

                    {/* Right Section - 20% */}
                    <div className="w-full lg:w-3/12 flex flex-col space-y-4">
                        <div className="bg-teal-100 shadow-lg mr-5 rounded-lg p-4">
                            <h3 className="text-xl font-semibold mb-4">Verifications</h3>
                            <div className="border-t border-gray-200 mt-2 pt-2">
                                <p className="text-gray-700"><i className="bi bi-check-circle-fill text-green-500 mr-2"></i>Email Verified</p>
                                <p className="text-gray-700"><i className="bi bi-check-circle-fill text-green-500 mr-2"></i>Identity Verified</p>
                                <p className="text-gray-700"><i className="bi bi-check-circle-fill text-green-500 mr-2"></i>Payment Verified</p>
                            </div>
                        </div>
                        <div className="bg-teal-100 shadow-lg mr-5 rounded-lg p-4">
                            <h3 className="text-xl font-semibold mb-4">Top Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {["React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Figma"].map(skill => (
                                    <span key={skill} className="bg-primary text-white px-3 py-1 rounded-full text-sm">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-teal-100 shadow-lg  mr-5 rounded-lg p-4">
                            <h3 className="text-xl font-semibold mb-4">Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {["English", "Hindi", "Gujarati"].map(language => (
                                    <span key={language} className="bg-primary text-white px-3 py-1 rounded-full text-sm">{language}</span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-teal-100 shadow-lg mr-5 rounded-lg p-4">
                            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                            <div className="flex items-center justify-center h-24">
                                <p className="text-gray-600">No certifications have been added.</p>
                            </div>
                            <button className="bg-primary text-white py-2 px-4 rounded w-full mt-4">Add Certification</button>
                        </div>
                        <div className="bg-teal-100 shadow-lg  mr-5 rounded-lg p-4">
                            <h3 className="text-xl font-semibold mb-4">Social Accounts</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(account => (
                                    <span key={account} className="bg-primary text-white px-3 py-1 rounded-full text-sm">{account}</span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-teal-100 shadow-lg mr-5 rounded-lg p-4">
                            <h3 className="text-xl font-semibold mb-4">Memberships</h3>
                            <div className="flex items-center justify-center h-24">
                                <p className="text-gray-600">No memberships have been added.</p>
                            </div>
                            <button className="bg-primary text-white py-2 px-4 rounded w-full mt-4">Add Membership</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
