import React, { useState, useEffect } from 'react';

function Brand() {
    const logos = [
        "https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/amazon_logo2.svg",
        "https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/facebook-corporate-logo2.svg",
        "https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/deloitte-logo2.svg",
        "https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/novo-nordisk-logo2.svg",
        "https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/nasa-logo2.svg",
        "https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/ibm-logo2.svg",
        "https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/airbus-logo2.svg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 3) % logos.length);
        }, 3000); // Change logos every 3 seconds

        return () => clearInterval(interval);
    }, [logos.length]);

    return (
        <div className="flex justify-center mb-5">
            <div className="flex flex-wrap items-center justify-between max-w-full px-4">
                <h4 className="font-medium text-2xl mb-4 w-full text-center">As used by</h4>
                <div className="flex justify-center space-x-6">
                    {logos.slice(currentIndex, currentIndex + 3).map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`logo-${index}`}
                            className="h-12 md:h-16"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Brand;
