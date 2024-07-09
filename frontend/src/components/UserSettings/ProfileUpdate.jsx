import React, { useState } from 'react';
import SettingsHeroSection from './SettingsHeroSection';
import EmailNotifications from './EmailNotifications';
import Membership from './Membership';
import Password from './Password';
import PaymentFinancials from './PaymentFinancials';
import AccountSecurity from './AccountSecurity';
import TrustVerification from './TrustVerification';
import Account from './Account';

const ProfileUpdate = () => {
  const [activeTab, setActiveTab] = useState('Profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'Profile':
        return <SettingsHeroSection />;
      case 'Email & Notifications':
        return <EmailNotifications />;
      case 'Membership':
        return <Membership />;
      case 'Password':
        return <Password />;
      case 'Payment & Financials':
        return <PaymentFinancials />;
      case 'Account Security':
        return <AccountSecurity />;
      case 'Trust & Verification':
        return <TrustVerification />;
      case 'Account':
        return <Account />;
      default:
        return <SettingsHeroSection />;
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white  min-h-screen">
      <div className="bg-white shadow-lg font-poppins rounded-lg flex">
        {/* Left Sidebar */}
        <div className="w-1/4 p-6 border-r">
          <ul className="space-y-4">
            <li className={`cursor-pointer ${activeTab === 'Profile' ? 'font-semibold text-blue-500' : 'text-gray-600'}`} onClick={() => setActiveTab('Profile')}>Profile</li>
            <li className={`cursor-pointer ${activeTab === 'Email & Notifications' ? 'font-semibold text-blue-500' : 'text-gray-600'}`} onClick={() => setActiveTab('Email & Notifications')}>Email & Notifications</li>
            <li className={`cursor-pointer ${activeTab === 'Membership' ? 'font-semibold text-blue-500' : 'text-gray-600'}`} onClick={() => setActiveTab('Membership')}>Membership</li>
            <li className={`cursor-pointer ${activeTab === 'Password' ? 'font-semibold text-blue-500' : 'text-gray-600'}`} onClick={() => setActiveTab('Password')}>Password</li>
            <li className={`cursor-pointer ${activeTab === 'Payment & Financials' ? 'font-semibold text-blue-500' : 'text-gray-600'}`} onClick={() => setActiveTab('Payment & Financials')}>Payment & Financials</li>
            <li className={`cursor-pointer ${activeTab === 'Account Security' ? 'font-semibold text-blue-500' : 'text-gray-600'}`} onClick={() => setActiveTab('Account Security')}>Account Security</li>
            <li className={`cursor-pointer ${activeTab === 'Trust & Verification' ? 'font-semibold text-blue-500' : 'text-gray-600'}`} onClick={() => setActiveTab('Trust & Verification')}>Trust & Verification</li>
            <li className={`cursor-pointer ${activeTab === 'Account' ? 'font-semibold text-blue-500' : 'text-gray-600'}`} onClick={() => setActiveTab('Account')}>Account</li>
          </ul>
        </div>
        {/* Right Content */}
        <div className="w-3/4 p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
