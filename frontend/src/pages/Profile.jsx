import React from 'react';

const Profile = () => {
  return (
    <div className="bg-gray-100 p-4">
      {/* Profile Header */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        <div className="relative">
          <img className="w-full h-48 object-cover" src="https://via.placeholder.com/1200x300" alt="Profile Banner" />
          <div className="absolute top-4 right-4 flex space-x-2">
            <button className="bg-pink-500 text-white py-2 px-4 rounded">Preview New Profile</button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">View Client Profile</button>
          </div>
          <div className="absolute top-20 left-4 transform -translate-y-1/2">
            <img className="w-24 h-24 rounded-full border-4 border-white" src="https://via.placeholder.com/150" alt="Profile" />
          </div>
        </div>
        <div className="p-4 pt-12">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold">Ritu M.</h2>
              <p className="text-gray-600">@Ritu217</p>
              <p className="text-gray-600">UI/UX Design, Frontend Web Developer</p>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Edit Profile</button>
          </div>
          <div className="mt-4">
            <p className="text-gray-700">I most like UI/UX design and have created so many app/web designs. Freelancer seems like a great place to work and the benefits look incredible. Also, I am creating a mobile-friendly website using HTML, CSS, JS, and Bootstrap. I would like to develop a wonderful mobile-friendly responsive website. I will be glad if you will hire me for website developing and designing UI/UX.</p>
          </div>
        </div>
      </div>

      {/* Verification and Certifications */}
      <div className="flex flex-col md:flex-row mb-6">
        <div className="bg-white shadow-lg rounded-lg p-4 flex-1 mr-0 md:mr-4 mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Verifications</h3>
          <ul className="space-y-2">
            <li className="flex items-center"><i className="bi bi-check-circle text-green-500 mr-2"></i> Preferred Freelancer</li>
            <li className="flex items-center"><i className="bi bi-check-circle text-green-500 mr-2"></i> Identity Verified</li>
            <li className="flex items-center"><i className="bi bi-check-circle text-green-500 mr-2"></i> Payment Verified</li>
            <li className="flex items-center"><i className="bi bi-check-circle text-green-500 mr-2"></i> Phone Verified</li>
            <li className="flex items-center"><i className="bi bi-check-circle text-green-500 mr-2"></i> Email Verified</li>
            <li className="flex items-center"><i className="bi bi-check-circle text-green-500 mr-2"></i> Facebook Connected</li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 flex-1">
          <h3 className="text-xl font-semibold mb-4">Certifications</h3>
          <div className="flex items-center justify-center h-24">
            <p className="text-gray-600">You don't have any certifications yet.</p>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded w-full mt-4">Get Certified</button>
        </div>
      </div>

      {/* Portfolio */}
      <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
        <h3 className="text-xl font-semibold mb-4">Portfolio</h3>
        <div className="flex items-center justify-center h-24">
          <p className="text-gray-600">No portfolio items have been added yet.</p>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded w-full mt-4">Edit Layout</button>
      </div>

      {/* Reviews */}
      <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
        <h3 className="text-xl font-semibold mb-4">Reviews</h3>
        <div className="flex items-center justify-center h-24">
          <p className="text-gray-600">No reviews to see here!</p>
        </div>
      </div>

      {/* Experience */}
      <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
        <h3 className="text-xl font-semibold mb-4">Experience</h3>
        <div className="border-t border-gray-200 mt-2 pt-2">
          <p className="text-gray-700"><strong>Frontend Developer</strong></p>
          <p className="text-gray-600">Inbox Infotech Pvt Ltd</p>
          <p className="text-gray-600">May 2022 - Present</p>
          <p className="text-gray-600">Creating various websites and posts over here.</p>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded w-full mt-4">Add Experience</button>
      </div>

      {/* Education */}
      <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
        <h3 className="text-xl font-semibold mb-4">Education</h3>
        <div className="border-t border-gray-200 mt-2 pt-2">
          <p className="text-gray-700"><strong>Bachelor of Technology</strong></p>
          <p className="text-gray-600">Parul University, India</p>
          <p className="text-gray-600">2019 - 2022 (3 years)</p>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded w-full mt-4">Add Education</button>
      </div>

      {/* Qualifications */}
      <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
        <h3 className="text-xl font-semibold mb-4">Qualifications</h3>
        <div className="flex items-center justify-center h-24">
          <p className="text-gray-600">No qualifications have been added.</p>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded w-full mt-4">Add Qualification</button>
      </div>

      {/* Publications */}
      <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
        <h3 className="text-xl font-semibold mb-4">Publications</h3>
        <div className="flex items-center justify-center h-24">
          <p className="text-gray-600">No publications have been added.</p>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded w-full mt-4">Add Publication</button>
      </div>
    </div>
  );
};

export default Profile;
