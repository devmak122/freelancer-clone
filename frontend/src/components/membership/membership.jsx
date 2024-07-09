import React, { useState } from 'react';

const MembershipPlans = () => {
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
        setFaqs(faqs.map((faq, i) => (
            i === index ? { ...faq, open: !faq.open } : faq
        )));
    };

    const plans = [
        {
            name: "Basic",
            price: "₹349.92/month",
            billing: "₹4199.00 billed annually",
            savings: "₹599.00",
            features: [
                "50 Bids per month",
                "50 Skills",
                "Client Engagement",
                "Unlimited project bookmarks",
                "Preferred Freelancer eligible*",
                "Custom cover photo",
                "3 Free highlighted contest entries / month",
                "12 Free sealed contest entries / month",
                "5 Employer followings"
            ],
            buttonText: "Upgrade"
        },
        {
            name: "Plus",
            price: "₹749.92/month",
            billing: "Try one month FREE",
            savings: "",
            features: [
                "100 Bids per month",
                "80 Skills",
                "Client Engagement",
                "Daily withdrawal requests",
                "Unlock rewards",
                "Unlimited project bookmarks",
                "Preferred Freelancer eligible*",
                "Custom cover photo",
                "5 Free highlighted contest entries / month",
                "25 Free sealed contest entries / month",
                "10 Employer followings"
            ],
            buttonText: "Start Free Trial"
        },
        {
            name: "Professional",
            price: "₹2499.92/month",
            billing: "₹29,999.00 billed annually",
            savings: "₹5,989.00",
            features: [
                "300 Bids per month",
                "100 Skills",
                "Client Engagement",
                "Bid Insights",
                "Daily withdrawal requests",
                "Unlock rewards",
                "Unlimited project bookmarks",
                "Preferred Freelancer eligible*",
                "Custom cover photo",
                "15 Free highlighted contest entries / month",
                "75 Free sealed contest entries / month",
                "20 Employer followings",
                "15 External invoices",
                "Project extensions",
                "Sealed projects",
                "Premium Freelancer insights",
                "High value project bidding*"
            ],
            buttonText: "Upgrade"
        },
        {
            name: "Premier",
            price: "₹4999.00/month",
            billing: "₹59,988.00 billed annually",
            savings: "₹12,000.00",
            features: [
                "1500 Bids per month",
                "400 Skills",
                "Client Engagement",
                "Bid Insights",
                "Daily withdrawal requests",
                "Unlock rewards",
                "Unlimited project bookmarks",
                "Preferred Freelancer eligible*",
                "Custom cover photo",
                "30 Free highlighted contest entries / month",
                "150 Free sealed contest entries / month",
                "Unlimited Employer followings",
                "Unlimited External invoices",
                "Project extensions",
                
                "Sealed projects",
                "Premium Freelancer insights",
                "Free NDA projects",
                "High value project bidding*"
            ],
            buttonText: "Upgrade"
        }
    ];

    const benefits = [
        {
            icon: <i className="fa fa-hand-pointer text-4xl"></i>,
            title: "Place more bids",
            description: "Reach more clients and increase your chances of winning projects with 300 additional bids per month."
        },
        {
            icon: <i className="fa fa-expand text-4xl"></i>,
            title: "Expand your skills",
            description: "Cast your net on a wider range of projects that match your skills and profession."
        },
        {
            icon: <i className="fa fa-bell text-4xl"></i>,
            title: "Get notified on select projects",
            description: "Bookmark projects and follow employers to get notified fater about projects you care about."
        },
        {
            icon: <i className="fa fa-trophy text-4xl"></i>,
            title: "Competitive advantage",
            description: "Access to exclusive features like custom cover photo, bid insights, client engagement insights and more!"
        }
    ];

    return (
        <div className="bg-white-100">
            <div className="container mx-auto px-6">
                <section className="hero bg-blue-900 text-white py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Maximize your success and earnings
                        </h1>
                        <p className="text-lg md:text-xl mb-8">
                            Try a Freelancer Membership to enjoy greater benefits.
                        </p>
                    </div>
                </section>
                <div className="flex flex-wrap justify-center">
                    {plans.map((plan, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-4">
                            <div className="bg-teal-200  text-primary rounded-lg shadow-lg p-10 text-center">
                                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                                <p className="text-2xl font-bold mb-4">{plan.price} <span className="text-sm">{plan.billing}</span></p>
                                <p className="text-sm mb-4">You save {plan.savings}</p>
                                <ul className="text-left mb-6">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="mb-2">{feature}</li>
                                    ))}
                                </ul>
                                <button className="bg-primary text-white font-semibold py-2 px-4 rounded">
                                    {plan.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-blue-900 text-white py-12">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8">Do More. Earn More.</h2>
                    <div className="flex flex-wrap justify-center">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-4">
                                <div className="flex flex-col items-center">
                                    <div className="mb-4">{benefit.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                    <p className="text-sm">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <div className="max-w-2xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-4">
                                <button className="w-full text-left py-2 px-4 bg-teal-200 shadow-md rounded-lg focus:outline-none" onClick={() => toggleFAQ(index)}>
                                    {faq.question}
                                </button>
                                {faq.open && (
                                    <div className="p-4 bg-transparet mt-2">
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

export default MembershipPlans;
