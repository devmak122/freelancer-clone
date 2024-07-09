import React, { useState } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement);

const ProfileAnalysis = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "Why should I upgrade?",
            answer: "Upgrading to a membership plan provides you with additional bids, skills, and various tools to enhance your freelancing success.",
            open: false
        },
        {
            question: "Can I change plans?",
            answer: "Yes, you can change your membership plan at any time through your account settings.",
            open: false
        },
        {
            question: "What is the Preferred Freelancer Program?",
            answer: "The Preferred Freelancer Program gives you access to higher value projects and preferred freelancer benefits.",
            open: false
        },
        {
            question: "Can I cancel my membership?",
            answer: "Yes, you can cancel your membership at any time. Note that benefits will be lost upon cancellation.",
            open: false
        }
    ]);

    const toggleFAQ = (index) => {
        setFaqs(faqs.map((faq, i) => (i === index ? { ...faq, open: !faq.open } : faq)));
    };

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Amount Earned (INR)',
                data: [0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    const bidData = {
        datasets: [
            {
                data: [6, 0],
                backgroundColor: ['#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#36A2EB', '#FFCE56'],
            },
        ],
        labels: ['Bids Remaining', 'Unanswered Bids'],
    };

    return (
        <div>
            {/* Hero Section */}
            <div className="bg-primary py-12">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-4xl  text-secondary font-bold mb-4">User Statistics</h1>
                        <p className="text-lg text-white mb-6">
                            Monitor your activity and performance while using Freelancer.
                        </p>
                       
                    </div>
                </div>
            </div>

            {/* User Statistics Content */}
            <div className="bg-teal-100 py-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/3 px-4 mb-6">
                            <div className="bg-teal-200 p-6 rounded-lg shadow-md text-center">
                                <h2 className="text-xl font-bold mb-4">Total earnings</h2>
                                <p className="text-3xl font-bold mb-2">₹0.00</p>
                                <p className="text-primary">Your total earnings since joining Freelancer</p>
                                <p className="text-3xl font-bold mt-4">₹0.00</p>
                                <p className="text-primary">Your total earnings from the past 30 days</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-6">
                            <div className="bg-teal-200 p-6 rounded-lg shadow-md text-center">
                                <h2 className="text-xl font-bold mb-4">Job proficiency</h2>
                                <ul className="text-left">
                                    <li className="mb-2">Completed jobs: N/A</li>
                                    <li className="mb-2">On time jobs: N/A</li>
                                    <li className="mb-2">On budget jobs: N/A</li>
                                    <li className="mb-2">Rehire rate: N/A</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-6">
                            <div className="bg-teal-200 p-6 rounded-lg shadow-md text-center">
                                <h2 className="text-xl font-bold mb-4">Bid conversion</h2>
                                <Bar data={data} options={options} />
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-6">
                            <div className="bg-teal-200 p-6 rounded-lg shadow-md text-center">
                                <h2 className="text-xl font-bold mb-4">Earnings over time</h2>
                                <Line data={data} options={options} />
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-6">
                            <div className="bg-teal-200 p-6 rounded-lg shadow-md text-center">
                                <h2 className="text-xl font-bold mb-4">Earnings per skill</h2>
                                <p className="text-primary">It looks like you have not earned yet on Freelancer.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-6">
                            <div className="bg-teal-200 p-6 rounded-lg shadow-md text-center">
                                <h2 className="text-xl font-bold mb-4">Earnings per client</h2>
                                <p className="text-primary">It looks like you have not earned yet on Freelancer.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-6">
                            <div className="bg-teal-200 p-6 rounded-lg shadow-md text-center">
                                <h2 className="text-xl font-bold mb-4">Rating per skill</h2>
                                <p className="text-primary">It looks like you have not completed any jobs or received any ratings yet on Freelancer.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-6">
                            <div className="bg-teal-200 p-6 rounded-lg shadow-md text-center">
                                <h2 className="text-xl font-bold mb-4">Bid summary</h2>
                                <Doughnut data={bidData} />
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-6">
                            <div className="bg-teal-200 p-6 rounded-lg shadow-md text-center">
                                <h2 className="text-xl font-bold mb-4">Bids per milestone</h2>
                                <p className="text-primary">You have not received a milestone recently. Keep bidding.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-tertiary py-12">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <div className="max-w-2xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-4">
                                <button className="w-full text-left py-2 px-4 bg-teal-200 shadow-md rounded-lg focus:outline-none" onClick={() => toggleFAQ(index)}>
                                    {faq.question}
                                </button>
                                {faq.open && (
                                    <div className="p-4 bg-teal-200 shadow-md rounded-lg mt-2">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileAnalysis;
