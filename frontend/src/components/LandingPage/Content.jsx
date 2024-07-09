import React from 'react';
import Single from './Single';

function Content() {
    return (
        <div className="flex flex-col items-center ml-10 mb-20">
            <div className="mb-9">
                <h2 className="text-center font-bold text-4xl leading-tight">What's great about it?</h2>
            </div>
            <div className="flex justify-evenly mx-12">
                <Single
                    src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/browse-portfolios-v2.svg"
                    title="Browse portfolios"
                    content="Find professionals you can trust by browsing their samples of previous work and reading their profile reviews."
                />
                <Single
                    src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/view-bids-v2.svg"
                    title="View bids"
                    content="Receive free bids from our talented freelancers within seconds."
                />
                <Single
                    src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/live-chat-v2.svg"
                    title="Live chat"
                    content="You can live chat with your freelancers to get constant updates on the progress of your work."
                />
            </div>
            <div className="flex justify-evenly mx-12">
                <Single
                    src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/pay-v2.svg"
                    title="Pay for quality"
                    content="Pay for work when it has been completed and you're 100% satisfied."
                />
                <Single
                    src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/track-progress-v2.svg"
                    title="Track progress"
                    content="Keep up-to-date and on-the-go with our time tracker, and mobile app."
                />
                <Single
                    src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/support-v2.svg"
                    title="24/7 support"
                    content="We're always here to help. Our support consists of real people who are available 24/7."
                />
            </div>
        </div>
    )
}

export default Content;
